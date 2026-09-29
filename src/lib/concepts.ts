import { CONCEPTS } from '@/data/concepts';
import { Concept } from '@/types/concept';

/**
 * Loại bỏ dấu tiếng Việt để phục vụ tìm kiếm không phân biệt dấu
 */
function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

/**
 * Lấy thông tin khái niệm theo ID hoặc số thứ tự
 * @param id - Mã định danh của concept (ví dụ: 'concept-1' hoặc '1')
 * @returns Concept nếu tìm thấy, hoặc undefined nếu không tồn tại
 */
export function getConceptById(id: string): Concept | undefined {
  if (!id) return undefined;
  const trimmedId = id.trim().toLowerCase();

  return CONCEPTS.find(
    (concept) =>
      concept.id.toLowerCase() === trimmedId ||
      concept.id.toLowerCase() === `concept-${trimmedId}` ||
      concept.order?.toString() === trimmedId
  );
}

/**
 * Tính thứ hạng độ phù hợp (relevance rank) của một khái niệm theo từ khóa tìm kiếm:
 * - Priority 1 (Cao nhất): Tên khái niệm khớp chính xác với từ khóa (Exact match)
 * - Priority 2: Tên khái niệm bắt đầu bằng từ khóa (Prefix match)
 * - Priority 3: Tên khái niệm chứa từ khóa ở vị trí bất kỳ (Contains match)
 * - Priority 4: Nội dung định nghĩa chứa từ khóa (Definition match)
 * 
 * @returns Điểm thứ hạng (số càng nhỏ càng ưu tiên) hoặc null nếu không khớp
 */
function getRelevanceRank(
  concept: Concept,
  cleanQuery: string,
  queryNoTones: string
): number | null {
  const nameLower = concept.name.toLowerCase();
  const nameNoTones = removeVietnameseTones(nameLower);

  // Priority 1 — Tên khái niệm khớp chính xác hoàn toàn với từ khóa
  if (nameLower === cleanQuery) return 1.0;
  if (nameNoTones === queryNoTones) return 1.1;

  // Priority 2 — Tên khái niệm bắt đầu bằng từ khóa
  if (nameLower.startsWith(cleanQuery)) return 2.0;
  if (nameNoTones.startsWith(queryNoTones)) return 2.1;

  // Priority 3 — Tên khái niệm chứa từ khóa
  if (nameLower.includes(cleanQuery)) return 3.0;
  if (nameNoTones.includes(queryNoTones)) return 3.1;

  // Priority 4 — Định nghĩa chứa từ khóa
  const defLower = concept.definition.toLowerCase();
  const defNoTones = removeVietnameseTones(defLower);
  const plainDefLower = defLower.replace(/<[^>]*>/g, '').replace(/[*_~`#]/g, '');
  const plainDefNoTones = removeVietnameseTones(plainDefLower);

  if (defLower.includes(cleanQuery) || plainDefLower.includes(cleanQuery)) return 4.0;
  if (defNoTones.includes(queryNoTones) || plainDefNoTones.includes(queryNoTones)) return 4.1;

  return null;
}

/**
 * Tìm kiếm các khái niệm theo tên và nội dung định nghĩa với xếp hạng theo độ liên quan
 * Hỗ trợ tìm kiếm không phân biệt chữ hoa/thường và cả tiếng Việt có dấu lẫn không dấu
 * 
 * Thứ tự ưu tiên:
 * 1. Khớp chính xác tên khái niệm
 * 2. Tên bắt đầu bằng từ khóa
 * 3. Tên chứa từ khóa
 * 4. Định nghĩa chứa từ khóa
 * Hòa giải (Tie-breaking): Bảo toàn thứ tự gốc trong dữ liệu CONCEPTS
 * 
 * @param query - Từ khóa tìm kiếm
 * @returns Danh sách các concept thỏa mãn đã được sắp xếp theo mức độ liên quan
 */
export function searchConcepts(query: string): Concept[] {
  if (!query || !query.trim()) {
    return CONCEPTS;
  }

  const cleanQuery = query.trim().toLowerCase();
  const queryNoTones = removeVietnameseTones(cleanQuery);

  const rankedMatches: { concept: Concept; rank: number; originalIndex: number }[] = [];

  CONCEPTS.forEach((concept, index) => {
    const rank = getRelevanceRank(concept, cleanQuery, queryNoTones);
    if (rank !== null) {
      rankedMatches.push({ concept, rank, originalIndex: index });
    }
  });

  rankedMatches.sort((a, b) => {
    if (a.rank !== b.rank) {
      return a.rank - b.rank;
    }
    // Tie-breaking: Giữ nguyên thứ tự gốc trong dữ liệu CONCEPTS
    return a.originalIndex - b.originalIndex;
  });

  return rankedMatches.map((item) => item.concept);
}
