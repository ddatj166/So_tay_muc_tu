/**
 * Định nghĩa kiểu dữ liệu cho Khái niệm (Concept)
 * Phù hợp cho danh sách 60 khái niệm cần học/tra cứu
 */
export interface Concept {
  id: string; // Mã định danh duy nhất (vd: 'concept-01', 'slug')
  name: string; // Tên khái niệm
  definition: string; // Khái niệm / Định nghĩa chi tiết
  examples: string[]; // Danh sách các ví dụ minh họa
  imageUrl?: string | null; // Đường dẫn ảnh minh hoạ (tùy chọn, thêm sau)
  imageAlt?: string; // Mô tả ảnh hỗ trợ SEO & Accessibility (tùy chọn)
  category?: string; // Phân loại / Chủ đề (vd: "Kinh tế", "Kỹ thuật", "Công nghệ")
  order?: number; // Thứ tự hiển thị từ 1 đến 60
}

/**
 * Các loại từ trong tiếng Anh / ngôn ngữ học
 */
export type PartOfSpeech =
  | 'noun' // Danh từ
  | 'verb' // Động từ
  | 'adjective' // Tính từ
  | 'adverb' // Trạng từ
  | 'preposition' // Giới từ
  | 'conjunction' // Liên từ
  | 'idiom' // Thành ngữ
  | 'phrase'; // Cụm từ

/**
 * Cấu trúc ví dụ câu kèm giải nghĩa
 */
export interface WordExample {
  sentence: string; // Câu ví dụ
  translation?: string; // Bản dịch nghĩa tiếng Việt
}

/**
 * Cấu trúc các từ ngữ liên quan
 */
export interface RelatedWords {
  synonyms?: string[]; // Từ đồng nghĩa
  antonyms?: string[]; // Từ trái nghĩa
  collocations?: string[]; // Cụm từ cố định thường đi chung
  derivatives?: string[]; // Các dạng từ liên quan (family words)
}

/**
 * Định nghĩa kiểu dữ liệu cho Từ vựng (Vocabulary Word)
 * Đầy đủ word, pronunciation, part of speech, definition, examples, related words và imageUrl
 */
export interface VocabularyWord {
  id: string; // Mã định danh duy nhất
  word: string; // Từ vựng
  pronunciation: {
    ipa: string; // Phiên âm IPA, ví dụ: /kənˈsɪst/
    audioUrl?: string; // Link file âm thanh phát âm (nếu có)
  };
  partOfSpeech: PartOfSpeech | PartOfSpeech[]; // Từ loại
  definition: {
    vi: string; // Định nghĩa tiếng Việt
    en?: string; // Định nghĩa tiếng Anh (tùy chọn)
  };
  examples: WordExample[]; // Danh sách ví dụ
  relatedWords: RelatedWords; // Các từ liên quan
  imageUrl?: string; // Hình ảnh minh hoạ (thêm sau)
  category?: string; // Chủ đề từ vựng
  order?: number; // Thứ tự (1-60)
}
