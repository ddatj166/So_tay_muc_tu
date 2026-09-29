import { Concept } from '@/types/concept';

/**
 * Danh sách 57 khái niệm mục từ ngữ học tiếng Việt
 * Được chuyển đổi nguyên văn từ tài liệu 'SỔ TAY MỤC TỪ.docx'
 * Giữ nguyên 100% nội dung, thứ tự và định dạng (**in đậm**, *in nghiêng*)
 */
export const CONCEPTS: Concept[] = [
  {
    "id": "concept-1",
    "order": 1,
    "name": "Âm tiết",
    "definition": "- Âm tiết là: Âm tiết là đơn vị phát âm tự nhiên nhỏ nhất của tiếng Việt, đóng vai trò là hình thức ngữ âm tạo nên từ hoặc hình vị. Trong tiếng Việt, ranh giới âm tiết trùng với ranh giới của hình vị điển hình.",
    "examples": [
      "từ *lớp học* gồm 2 âm tiết *lớp* và *học.*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-2",
    "order": 2,
    "name": "Đơn vị độc lập",
    "definition": "- Đơn vị độc lập: là đơn vị ngôn ngữ nhỏ nhất có khả năng tự do, độc lập hoạt động để tạo thành câu bình thường trong giao tiếp. Đây là đặc điểm chức năng quyết định tư cách từ của tiếng Việt, dùng để phân biệt từ với hình vị không độc lập và cụm từ tự do.",
    "examples": [
      "*+ Sông* là đơn vị đứng độc lập (có thể đứng một mình tạo câu *Tôi yêu dòng sông.*\n*+* Đối lập với nó là *Giang* là đơn vị không độc lập ( không thể đứng một mình tạo câu mà phải kết hợp thành từ phức như *giang sơn, hà giang).*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-3",
    "order": 3,
    "name": "Đơn vị cấu tạo từ",
    "definition": "- Đơn vị cấu tạo từ: là đơn vị nhỏ nhất có nghĩa hoặc có khả năng đi vào các phương thức cấu tạo từ, được dùng làm nguyên liệu để cấu tạo nên từ.",
    "examples": [
      "*bút* và *viết* là hai đơn vị cấu tạo từ kết hợp lại tạo thành từ ghép *bút viết* hoặc đẹp là cấu tạo từ làm gốc để tạo thành từ láy *đẹp đẽ.*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-4",
    "order": 4,
    "name": "Điệp âm",
    "definition": "- Điệp âm: là kiểu láy bộ phận mà phụ âm đầu của từ tố láy lặp lại phụ âm đầu của từ tố cơ sở, còn phần khuôn vần giữa hai từ tố thì khác nhau.",
    "examples": [
      "*lung linh* lặp lại phụ âm đầu *l-* , vần khác nhau *-ung* và *-inh*)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-5",
    "order": 5,
    "name": "Điệp vần",
    "definition": "- Điệp vần: là kiểu láy bộ phận mà phần vần của từ tố láy lặp lại phần vần của từ tố cơ sở, còn phụ âm đầu giữa hai từ tố thì khác nhau.",
    "examples": [
      "*Bồi hồi* lặp lại vần *-ôi*, phụ âm đầu khác nhau: *-b* và *-h.*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-6",
    "order": 6,
    "name": "Cơ chế nghĩa (Cơ chế tạo nghĩa)",
    "definition": "- Cơ chế nghĩa là tập hợp các quy tắc và sự tác động ngữ nghĩa tương hỗ giữa các yếu tố cấu tạo hoặc giữa từ với ngữ cảnh để tạo ra nghĩa của từ phức, nghĩa của ngữ cố định hay nghĩa chuyển của từ.",
    "examples": [
      "Trong từ ghép *quần áo* - cơ chế ghép hợp nghĩa tạo ra nghĩa tổng loại chỉ chung trang phục (rộng hơn nghĩa của từng từ tố thành phần)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-7",
    "order": 7,
    "name": "Cấu tạo từ",
    "definition": "-  Cấu tạo từ: là quá trình và cách thức tổ chức, kết hợp các đơn vị cấu tạo từ theo những quy tắc ngữ âm và cơ chế nghĩa nhất định để tạo nên từ của ngôn ngữ.",
    "examples": [
      "Tổ hợp từ tố cơ sở *máy* và *tính* theo phương thức ghép chính phụ tạo nên từ *máy tính*."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-8",
    "order": 8,
    "name": "Cụm từ",
    "definition": "- Cụm từ: là đơn vị ngữ pháp cấp độ trên từ do hai hay nhiều đơn vị độc lập kết hợp với nhau theo các quan hệ cú pháp tạo thành. Dẫn ra hai loại lớn: Cụm từ tự do và Ngữ cố định.",
    "examples": [
      "*Đang đọc sách trong phòng* (cụm động từ)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-9",
    "order": 9,
    "name": "Cụm từ tự do",
    "definition": "-  Cụm từ tự do: là tổ hợp gồm hai hay nhiều đơn vị độc lập kết hợp theo các quy tắc cú pháp để đảm nhiệm chức năng tạo câu, được tạo ra tức thời trong giao tiếp, liên kết giữa các từ mang tính lỏng lẻo (có thể chêm, tách, mở rộng) và nghĩa toàn cụm bằng tổng số nghĩa của các từ cấu thành.",
    "examples": [
      "*Đọc cuốn sách hay* (có thể chêm tách thành: *Đọc một cuốn sách rất hay*)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-10",
    "order": 10,
    "name": "Hình vị",
    "definition": "- Hình vị: là đơn vị cấu tạo từ nhỏ nhất có nghĩa hoặc có chức năng tạo từ, phần lớn có hình thức ngữ âm trùng với âm tiết có nghĩa.",
    "examples": [
      "*Học* trong *học sinh*, *trường học* là một hình vị."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-11",
    "order": 11,
    "name": "Khuôn vần",
    "definition": "- Khuôn vần: là mô hình cấu trúc phần vần cố định của từ tố láy trong phương thức cấu tạo từ láy. Có khả năng tái sử dụng để tạo nên hàng loạt từ láy mang cùng một kiểu sắc thái biểu cảm hoặc nghĩa khái quát định hình.",
    "examples": [
      "Khuôn vần *-iếc* trong *tiền tiếc*, *sách siếc* mang sắc thái mỉa mai, coi thường hoặc khái quát hóa."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-12",
    "order": 12,
    "name": "Láy bộ phận",
    "definition": "-  Láy bộ phận: là kiểu từ láy mà chỉ một bộ phận cấu trúc ngữ âm (phụ âm đầu hoặc phần vần) của từ tố cơ sở được lặp lại ở từ tố láy. Đối lập với láy hoàn toàn và dẫn ra hai tiểu loại: Điệp âm và Điệp vần",
    "examples": [
      "*Gọn gàng* (láy âm đầu *g-*)"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-13",
    "order": 13,
    "name": "Láy hoàn toàn",
    "definition": "- Láy hoàn toàn: là kiểu từ láy mà hình thức âm tiết của từ tố cơ sở được lặp lại toàn bộ ở từ láy. Có thể giữ nguyên trọn vẹn ngữ âm hoặc biến đổi thanh điệu theo quy tắc hoà âm.",
    "examples": [
      "*Cào cào* (giữ nguyên ngữ âm) hoặc *đèm đẹp* (biến đổi vần từ từ tố gốc *đẹp*)"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-14",
    "order": 14,
    "name": "Lớp từ vựng",
    "definition": "- Lớp từ vựng: là tập hợp các từ ngữ trong hệ thống từ vựng, ngữ nghĩa được phân chia dựa trên các tiêu chí cụ thể về nguồn gốc lịch sử (từ thuần Việt, Hán Việt, vay mượn), phạm vi sử dụng xã hội (thuật ngữ, từ nghề nghiệp, tiếng lóng), địa lý (phương ngữ) hoặc phong cách chức năng (khẩu ngữ, văn chương).",
    "examples": [
      "Lớp từ vựng phương ngữ Nam Bộ: *bắp* (ngô), heo (lợn), *chén* (bát)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-15",
    "order": 15,
    "name": "Ngữ cố định",
    "definition": "- Ngữ cố định: là những cụm từ có kết cấu cú pháp chặt chẽ, có tính sẵn có, tính cố định và tính xã hội như từ, hoạt động tương đương với một từ trong việc tạo câu.",
    "examples": [
      "+ Ngữ có kết cấu cụm từ:\n*Đói mốc mồm* ( tương đương tính từ: cực kỳ túng thiếu, đói kém)\n+ Ngữ có kết cấu câu (dùng như ngữ cố định làm thành phần câu)\n*Vỏ quýt dày có móng tay nhọn* (chỉ tình huống kẻ ghê gớm, cao tay đến mấy cũng sẽ có người cao tay hơn khắc chế)"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-16",
    "order": 16,
    "name": "Ngữ nghĩa",
    "definition": "- Ngữ nghĩa: là toàn bộ nội dung tinh thần mà một từ gợi ra trong tâm trí con người khi tiếp xúc, là kết quả của sự ngôn ngữ hóa hiện thực và phản ánh các mối quan hệ cấu trúc trong hệ thống từ vựng.",
    "examples": [
      "Nghĩa của từ *mặt trời* gồm nghĩa biểu vật (vật thể vũ trụ phát sáng ban ngày) và nghĩa biểu niệm (*thiên thể*, *phát sáng và tỏa nhiệt*)"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-17",
    "order": 17,
    "name": "Phương thức cấu tạo từ",
    "definition": "- Phương thức cấu tạo từ: là cách thức tổ chức và tác động của ngôn ngữ lên các đơn vị cấu tạo từ theo những quy tắc nhất định để tạo nên từ mới",
    "examples": [
      "Phương thức ghép kết hợp hai từ tố cơ sở *xe* và *máy* tạo thành từ ghép *xe máy*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-18",
    "order": 18,
    "name": "Phương thức chuyển nghĩa",
    "definition": "- Phương thức chuyển nghĩa: là cách thức tác động làm biến đổi nghĩa của một từ sẵn có dựa trên cơ chế ẩn dụ hoặc hoán dụ. Nó tạo ra nghĩa mới trong nội bộ một từ hoặc làm phát sinh từ mới khi mối liên hệ ngữ nghĩa lịch sử bị đứt gãy hoàn toàn.",
    "examples": [
      "Chuyển nghĩa tạo từ đa nghĩa\n+ *Mũi* (bộ phận cơ thể: nhô ra phía trước)\n=> *Mũi thuyền, mũi kéo, mũi đất*\nChuyển nghĩa đứt gãy tạo từ đồng âm:\n+ *Chuột* (loài gặm nhấm) => *Chuột* (thiết bị điều khiển trỏ trên màn hình máy tính)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-19",
    "order": 19,
    "name": "Phương thức ghép",
    "definition": "- Phương thức ghép: là phương thức dùng hai hoặc hơn hai đơn vị cấu tạo từ riêng rẽ ghép lại với nhau theo những quy tắc nhất định để cho một từ, được gọi là từ ghép.",
    "examples": [
      "Hình vị *điện* (chỉ năng lượng) và hình vị *máy* (chỉ thiết bị) vốn không có quan hệ gì với nhau được kết hợp lại với nhau cho từ ghép *điện máy.*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-20",
    "order": 20,
    "name": "Phương thức láy",
    "definition": "- Phương thức láy: là phương thức tác động và một đơn vị cấu tạo từ làm sản sinh ra một đơn vị thứ sinh, giữa hai đơn vị này có quan hệ ngữ âm nhất định, tổ hợp đơn vị gốc và đơn vị thứ phát là một từ láy.",
    "examples": [
      "Phương thức láy tác động vào hình vị gốc *gọn* cho ta hình vị thứ sinh *gàng* và tổ hợp *gọn gàng* là một từ láy hai âm tiết."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-21",
    "order": 21,
    "name": "Phương thức rút gọn",
    "definition": "- Phương thức rút gọn: là phương thức loại bỏ đi một hoặc một yếu tố trong một từ nhiều yếu tố đã có từ trước. Kết quả ta có một từ có số lượng yếu tố ít hơn nhưng vẫn mang nghĩa của từ đầy đủ có từ trước.",
    "examples": [
      "Từ *rau* *chân vịt* được rút gọn bằng cách lược bỏ hình vị đầu tiên là *rau,* giữ lại phần sau để tạo thành từ mới *chân vịt* (vẫn dùng để chỉ loài thực vật đó trong ngữ cảnh giao tiếp thông thường)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-22",
    "order": 22,
    "name": "Phương thức vay mượn",
    "definition": "- Phương thức vay mượn: là phương thức tiếp nhận các yếu tố ngôn ngữ từ hệ thống ngôn ngữ khác để sử dụng một phần có tính hệ thống của hệ thống ngôn ngữ đó, làm phong phú thêm vốn từ vựng của ngôn ngữ đó.",
    "examples": [
      "Từ *cà rốt* được mượn từ tiếng Pháp (*carotte)*\nTừ *xì-căng-đan* được mượn từ tiếng Anh (*scandal*)"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-23",
    "order": 23,
    "name": "Thành ngữ",
    "definition": "- Thành ngữ: là đơn vị đặc trưng của ngữ cố định về tính ổn định trong cấu tạo và thường có giá trị biểu trưng về mặt nghĩa.",
    "examples": [
      "*chuột sa chĩnh gạo, cá lớn nuốt cá bé, đẽo cày giữa đường, bới lông tìm vết,..*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-24",
    "order": 24,
    "name": "Tiếng",
    "definition": "- Tiếng: là đơn vị phát âm nhỏ nhất, tương ứng với một âm tiết",
    "examples": [
      "*he* là một tiếng vì khối âm thanh trọn vẹn nhỏ nhất phát ra trong một lần phát âm, không thể chia nhỏ hơn được nữa."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-25",
    "order": 25,
    "name": "Từ đơn",
    "definition": "- Từ đơn: Là từ do một từ tố (hay một hình vị) tạo nên.",
    "examples": [
      "*nhà* là từ đơn vì nó được cấu tạo nên từ một hình vị *nhà.*",
      "*bồ hòn* là từ đơn vì mặc dù gồm hai tiếng phát ra nhưng toàn bộ tổ hợp âm thanh chỉ ứng với một hình vị duy nhất là *bồ hòn*."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-26",
    "order": 26,
    "name": "Từ định danh",
    "definition": "- Từ định danh: là từ có chức năng đưa sự vật, sự kiện trong hiện thực ngoài ngôn ngữ vào ngôn ngữ, biến chúng thành các đơn vị nghĩa của ngôn ngữ.",
    "examples": [
      "Từ *học sinh* dùng để gọi tên người học trong hệ thống giáo dục."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-27",
    "order": 27,
    "name": "Từ ghép",
    "definition": "- Từ ghép: là từ được cấu tạo từ hai từ tố (hai hình vị) trở lên theo phương thức ghép hình vị.",
    "examples": [
      "Từ *xe đạp* là một từ ghép vì nó được tạo thành bởi hình vị *xe* và hình vị *đạp* độc lập với nhau."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-28",
    "order": 28,
    "name": "Từ ghép đẳng lập",
    "definition": "- Từ ghép đẳng lập: là những từ ghép trong đó hai từ tố (hay hai hình vị) bình đẳng đối với nhau, không từ tố bình đẳng đối với nhau, không từ tố nào là chính, không từ tố nào là phụ, cả hai từ tố góp nghĩa với nhau để cho nghĩa mới của toàn từ ghép.",
    "examples": [
      "Từ *anh em* là từ ghép đẳng lập vì được tạo từ hình vị *anh* và hình vị *em* bình đẳng với nhau về nghĩa. Chúng cùng đóng góp nghĩa với nhau để cho nghĩa toàn từ ghép *anh em* chỉ anh chị em trong gia đình."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-29",
    "order": 29,
    "name": "Từ ghép đẳng lập biệt lập",
    "definition": "- Từ ghép đẳng lập biệt lập: là từ ghép đẳng lập mà nghĩa của từ không phải tổng loại, không phải chuyên loại, cũng không phải phối nghĩa mà là một sự kiện, một hoạt động, một tính chất riêng biệt.",
    "examples": [
      "Từ *xây dựng* gồm hình vị *xây* và hình vị *dựng* đều chỉ hành động tạo tác, nhưng không phải liệt kê hành động rời rạc mà dùng để chỉ một hoạt động kiến thiết, tạo nên các công trình hoặc tổ chức mang tính hoàn chỉnh, riêng biệt."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-30",
    "order": 30,
    "name": "Từ ghép đẳng nghĩa",
    "definition": "- Từ ghép đẳng nghĩa: là từ ghép phân nghĩa mà trong đó nghĩa của từ tố X và từ tố Y có phần nào đó đồng nghĩa với nhau. Do đó, nghĩa của toàn bộ từ ghép đôi khi tương đương với nghĩa của từ tố Y dùng một mình.",
    "examples": [
      "Từ *chim bồ câu* có từ tố *bồ câu* tự nó khi dùng một mình đã chỉ đích xác loài chim đó, kết hợp với từ tố *chim* tạo thành từ ghép đẳng nghĩa."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-31",
    "order": 31,
    "name": "Từ ghép chính phụ",
    "definition": "- Từ ghép chính phụ: là những từ ghép giữa 2 từ tố có quan hệ chính phụ. Nếu X là từ tố chính và Y là từ tố phụ thì Y có tác dụng phân hoá nghĩa của X.",
    "examples": [
      "Từ *đèn pin* (với *đèn* là từ tố chính chỉ nguồn phát sáng nói chung, *pin* là từ tố phụ) dùng để phân hóa, chỉ loại đèn cầm tay hoạt động bằng nguồn điện pin nhỏ gọn."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-32",
    "order": 32,
    "name": "Từ ghép chính phụ biệt lập",
    "definition": "- Từ ghép chính phụ biệt lập: là các từ ghép chính phụ mà nghĩa không có quan hệ nằm trong so với nghĩa của một loại lớn nào, không lập thành một hệ thống nghĩa với những từ ghép phụ khác.",
    "examples": [
      "Từ *chợ đen* được tạo nên từ từ tố *chợ* là nơi mua bán, từ tố *đen* là tính từ màu sắc. Nghĩa của từ không phải là một loại chợ trong hệ thống thương mại chính thống, mà biệt lập hoàn toàn để chỉ thị trường giao dịch ngầm, phi pháp."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-33",
    "order": 33,
    "name": "Từ ghép chính phụ phân nghĩa",
    "definition": "- Từ ghép chính phụ phân nghĩa: (hay còn gọi là *từ ghép phân nghĩa)* là những từ ghép chia loại lớn X thành những loại nhỏ có quan hệ bao hàm và nằm trong loại lớn X.",
    "examples": [
      "Từ *trà sữa* (với *trà* là loại lớn X, *sữa* là yếu tố phụ Y) chia nhỏ chủng loại thức uống từ trà thành một biến thể cụ thể có pha thêm sữa."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-34",
    "order": 34,
    "name": "Từ ghép hợp nghĩa",
    "definition": "- Từ ghép hợp nghĩa: là từ ghép trong đó hai từ tố bình đẳng đối với nhau, không từ tố nào là chính, là phụ, cả hai từ tố góp nghĩa với nhau để cho nghĩa mới của toàn từ ghép.",
    "examples": [
      "Từ *mua bán* được tạo nên từ hai từ tố *mua* và *bán* chỉ hai hành động trao đổi kinh tế ngược chiều nhau, tạo thành từ ghép chỉ chung hoạt động thương mại, giao dịch hàng hóa."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-35",
    "order": 35,
    "name": "Từ ghép lâm thời",
    "definition": "- Từ ghép lâm thời: là những từ ghép được tạo ra tạm thời trong ngữ cảnh giao tiếp (nói hoặc viết) dựa trên các mô hình hình thức ngữ nghĩa có sẵn, không cố định hay nằm trong từ điển.",
    "examples": [
      "Tổ hợp *nhân viên văn phòng* được cấu tạo bằng cách mở rộng thành tố chính phụ trong ngữ cảnh cụ thể để định danh nhanh gọn đối tượng gắn liền với vị trí và không gian làm việc."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-36",
    "order": 36,
    "name": "Từ ghép phái sinh ngữ nghĩa",
    "definition": "- Từ ghép phái sinh ngữ nghĩa: (hay còn gọi là từ ghép phụ gia hoá) là kiểu từ ghép chính phụ, trong đó các đơn vị cấu tạo được hình thành bằng cách kết hợp với một từ tố có nghĩa rất khái quát, trừu tượng (như trưởng, viên, phi, bất, có, hóa, chủ nghĩa, luận, học...). Khác với từ ghép phân nghĩa biệt loại ở chỗ chúng không phân chia một loại lớn thực thể cụ thể, mà gán một nét nghĩa ngữ pháp/chức năng trừu tượng chung cho toàn bộ các từ trong cùng một kiểu cấu tạo.",
    "examples": [
      "Từ *phi công:* Từ tố “công” (chỉ công việc, điều khiển phương tiện) kết hợp với từ tố “phi” (bán phụ tố gốc Hán mang nét nghĩa khái quát chỉ sự bay lượn, trên không). ⇒ Chuyển thành danh từ chỉ chuyên môn, nghề nghiệp điều khiển máy bay."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-37",
    "order": 37,
    "name": "Từ ghép phân nghĩa biệt loại",
    "definition": "- Từ ghép phân nghĩa biệt loại (hay còn gọi là *từ ghép biệt loại)*: là từ ghép phân nghĩa mà từ tố chính chỉ loại lớn, mang nghĩa khái quát, từ tố phụ dùng để phân các loại lớn thành từng loại nhỏ hơn.",
    "examples": [
      "Từ *quạt nan* (với quạt là từ tố chính chỉ dụng cụ tạo gió nói chung, nan là từ tố phụ) dùng để phân hóa, chỉ loại quạt truyền thống đan bằng các nan tre, nứa."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-38",
    "order": 38,
    "name": "Từ ghép phối nghĩa",
    "definition": "- Từ ghép phối nghĩa: là từ ghép hợp nghĩa mà những trường hợp nghĩa S không phải là tổng loại, không phải chuyên loại mà là do sự phối hợp nghĩa của các từ tố mà có.",
    "examples": [
      "*Mổ xẻ: Mổ* (động từ): rạch, cắt mở bề mặt cơ thể hoặc vật thể. *Xẻ* (động từ): bổ, tách dọc theo thớ hoặc chia nhỏ vật thể.\n⇒ Hai từ tố này bình đẳng với nhau về mặt ngữ pháp, không từ tố nào chính, không từ tố nào phụ. ⇒ Đây là từ ghép phối nghĩa: *mổ xẻ* là sự phối hợp nghĩa đồng thời của cả hai hành động (*mổ* + *xẻ*) để chỉ một thao tác phẫu thuật/chia tách vật thể một cách tỉ mỉ, trọn vẹn."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-39",
    "order": 39,
    "name": "Từ ghép phụ gia hoá",
    "definition": "- Từ ghép phụ gia hóa: hay còn là từ ghép phái sinh ngữ nghĩa, là kiểu từ ghép chính phụ, mà mỗi kiểu nhỏ hơn được tạo thành bằng cách kết hợp với một từ tố nghĩa rất khái quát (như trưởng, viên, phi, bất, có, chủ nghĩa, luận, học…). Khác với từ ghép biệt loại ở chỗ không có tính chất là một loại lớn thực thể cụ thể, mà gán một nét nghĩa ngữ pháp/chức năng trừu tượng chung cho tất cả các từ trong cùng một kiểu cấu tạo.",
    "examples": [
      "*Số hoá: Số* (danh từ) + *hóa* (bán phụ tố/hậu tố).\n⇒ Bán phụ tố *hoá* mang nghĩa khái quát là chuyển sang trạng thái, tính chất hoặc hình thái mới. Khi kết hợp với từ tố *số*, nó tạo nên động từ chỉ toàn bộ quá trình chuyển đổi dữ liệu và hoạt động sang dạng kỹ thuật số."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-40",
    "order": 40,
    "name": "Từ ghép sắc thái hoá",
    "definition": "- Từ ghép sắc thái hoá: là từ ghép chính phụ trong đó các từ tố phụ Y là các âm tiết C có tác dụng chỉ các sắc thái khác nhau của tính chất hay trạng thái, hoạt động do từ tố loại lớn X biểu thị.\n\n- Từ ghép sắc thái hoá chỉ bổ sung sắc thái biểu cảm/mức độ cho tính chất hay hoạt động của X.",
    "examples": [
      "*Đỏ ửng / Đỏ rực / Đỏ mọng*\nTừ tố chính X: *đỏ* (tính chất màu sắc).\nTừ tố phụ Y: *ửng* (chỉ sắc thái đỏ nhẹ tỏa ra trên da/mặt), *rực* (chỉ sắc thái đỏ chói lọi, tỏa sáng), *mọng* (chỉ sắc thái đỏ mọng nước của trái cây)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-41",
    "order": 41,
    "name": "Từ ghép tổng loại",
    "definition": "- Từ ghép tổng loại: là từ ghép hợp nghĩa mà nghĩa của từng từ tố gộp lại tạo nên S. S chỉ một loại lớn hơn, rộng hơn. Loại do từng từ tố biểu thị chỉ là những loại nhỏ, đại diện cho loại lớn đó.",
    "examples": [
      "*Quần áo*\n*Quần*: trang phục mặc từ thắt lưng trở xuống, có hai ống che chân hoặc đùi.\n*Áo*: trạng phục mặc từ cổ trở xuống, chủ yếu che lưng, ngực và bụng.\n⇒ Khi ghép lại thành *quần áo*: nghĩa toàn bộ của từ ghép không dừng lại ở hai món đồ riêng lẻ đó mà khái quát hoá thành toàn bộ trang phục nói chung của con người (bao gồm cả váy, áo khoác, yếm,...). Từ ghép hợp nghĩa tổng loại *quần áo* chỉ một loại lớn hơn, rộng hơn do các từ tố đơn lẻ *quần, áo* đại diện tạo thành."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-42",
    "order": 42,
    "name": "Từ láy",
    "definition": "- Từ láy là từ phức  được tạo ra bằng phương thức láy, trong đó từ tố láy L lặp lại toàn bộ hoặc một bộ phận hình thức ngữ âm của từ tố cơ sở C.",
    "examples": [
      "*Thánh thót* (Láy bộ phận - Láy âm)\nTừ tố cơ sở C: *Thót* (ở sau, mang thanh sắc thuộc nhóm thanh cao).\nTừ tố láy L: *Thánh* (ở trước, lặp lại phụ âm đầu /th/, thanh sắc thuộc nhóm thanh cao).\n⇒ Gợi sắc thái âm thanh nhỏ, trong trẻo, rơi rụng từng tiếng ngân vang đều đặn."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-43",
    "order": 43,
    "name": "Từ láy đôi",
    "definition": "- Từ láy đôi (hay từ láy hai âm tiết): là những từ láy thế hệ thứ nhất, được tạo thành bằng cách áp dụng phương thức láy lên một từ tố cơ sở C để sản sinh ra một từ tố láy thứ sinh L.\n\n- Phân loại:\n\nLáy toàn bộ: Toàn bộ âm tiết của từ tố cơ sở được lặp lại (có thể xảy ra hiện tượng biến thanh hoặc biến vần ở từ tố láy đứng trước để dễ phát âm).\n\nLáy bộ phận: Chỉ lặp lại một bộ phận hình thức ngữ âm. Láy âm (điệp âm): Lặp lại phụ âm đầu. Láy vần (điệp vận): Lặp lại khuôn vần.",
    "examples": [
      "*Ríu rít*: Từ tố cơ sở C: *Rít* (ở sau, thanh sắc thuộc nhóm thanh cao). Từ tố láy L: *Ríu* (ở trước, lặp lại phụ âm đầu /r/, thanh sắc thuộc nhóm thanh cao).\n⇒ Miêu tả chuỗi âm thanh nhỏ, vang, rộn rã liên tiếp."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-44",
    "order": 44,
    "name": "Từ láy ba",
    "definition": "- Từ láy ba: là tổ hợp gồm ba âm tiết liên hoàn hòa phối ngữ âm khắt khe. Về vị trí hệ thống, giáo trình thảo luận từ láy ba ở mục Thế hệ từ láy thứ hai. Tuy nhiên, GS. Đỗ Hữu Châu nghiêng về quan điểm xem từ láy ba là từ láy thế hệ thứ nhất (được sản sinh trực tiếp từ một từ tố cơ sở, còn các từ láy đôi tương ứng như sạch sanh, xốp xộp chỉ là dạng rút gọn của từ láy ba). Mô hình từ láy ba mang tác dụng gia tăng, nhấn mạnh sắc thái ngữ nghĩa đến mức tối đa (cực điểm) đối với tính chất, trạng thái do từ tố cơ sở biểu thị.",
    "examples": [
      "*Sát sàn sạt*: Từ tố gốc: *sát, nhằm* hấn mạnh khoảng cách cực kỳ gần, dính liền hoàn toàn không còn một khe hở."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-45",
    "order": 45,
    "name": "Từ láy tư",
    "definition": "- Từ láy tư: là những từ láy gồm bốn âm tiết, đại bộ phận thuộc thế hệ từ láy thứ hai (lấy một từ láy đôi hoặc từ ghép đẳng lập làm thành tố cơ sở để phát triển tiếp), nhằm tăng cường sắc thái, nhấn mạnh và miêu tả rõ nét hơn.\n\nCơ sở là từ ghép đẳng lập hai âm tiết (láy toàn bộ): Lặp lại toàn bộ hai từ tố (quần áo ⇒ quần quần áo áo).\n\nCơ sở là từ láy đôi (thế hệ thứ hai): Chèn âm tiết phụ mang vần /a/ hoặc hòa phối âm tiết (khấp khểnh ⇒ khấp kha khấp khểnh). Lặp lại toàn bộ từ láy đôi (cằn nhằn ⇒ cằn nhằn cằn nhằn).",
    "examples": [
      "*Hấp ha hấp hối:* Phát triển từ từ láy đôi *hấp hối* + chèn vần /a/ ⇒ Tăng cường sắc thái tình trạng nguy cấp, gấp gáp.",
      "*Người người nhà nhà:* Mô hình láy toàn bộ từ ghép đẳng lập *người nhà* ⇒ Nhấn mạnh quy mô diễn ra rộng khắp ở mọi gia đình."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-46",
    "order": 46,
    "name": "Từ phức",
    "definition": "- Từ phức: là từ do hai hoặc hơn hai từ tố tạo nên. Đó là những từ ghép và những từ láy.",
    "examples": [
      "Từ ghép *xe cộ* (Từ ghép đẳng lập) cấu tạo: Gồm 2 từ tố (*xe* và *cộ*).\n⇒ Mang nghĩa tổng loại khái quát chỉ chung tất cả các loại phương tiện giao thông đường bộ.",
      "Từ láy *lấp lánh* (Từ láy bộ phận - Điệp âm) cấu tạo: Gồm từ tố cơ sở *lánh* và từ tố láy *lấp*.\n⇒ Tạo thành từ phức nhờ phương thức láy điệp phụ âm đầu /l/ hòa phối thanh điệu cùng nhóm cao (thanh sắc), bổ sung sắc thái miêu tả ánh sáng chớp lóe liên tục."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-47",
    "order": 47,
    "name": "Từ tố",
    "definition": "- Từ tố: là đơn vị tiếng Việt có yếu tố cấu tạo từ tiếng Việt, giống như hình vị - là những hình thức ngữ âm cố định, bất biến - được dùng lặp đi lặp lại, nhỏ nhất với dạng chuẩn tối thiểu là một âm tiết, nhưng từ tố tự thân có nghĩa (từ vựng hay ngữ pháp), có thể đi vào ba phương thức tạo từ của tiếng Việt (chuyển nghĩa, ghép, láy) để tạo từ mới.",
    "examples": [
      "Từ tố *rót.* Tự thân mang nét nghĩa thực: chuyển chất lỏng từ vật chứa này sang vật chứa khác bằng cách nghiêng vật chứa. Là đơn vị đơn âm tiết không thể chia nhỏ hơn. Xuất hiện cố định trong nhiều bối cảnh (*rót nước, rót trà, rót rượu*). Có phương thức tạo từ mới: (1) Phương thức ghép: Tạo thành các từ ghép phân nghĩa (*rót vốn, rót mật, rót dầu*), từ ghép đẳng lập (r*ót đổ*). (2) Phương thức chuyển nghĩa: Tạo nghĩa chuyển ẩn dụ (*rót vốn*: đầu tư tài chính, *rót lời mật ngọt*: nói lời êm tai)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-48",
    "order": 48,
    "name": "Từ tố đơn âm",
    "definition": "- Từ tố đơn âm: là từ tố được thể hiện bằng một âm tiết (một vỏ ngữ âm duy nhất), đóng vai trò là đơn vị trung tâm và là nguyên liệu cơ bản nhất trong hệ thống cấu tạo từ tiếng Việt. Bao gồm các từ tố độc lập (tự do) và từ tố không độc lập (không tự do), có khả năng đi vào ba phương thức tạo từ (chuyển nghĩa, ghép, láy).",
    "examples": [
      "*bè* (trong *bè bạn, bè lũ*), *khoang* (trong *khoang thuyền, khoang máy*), *lướt* (trong *lướt sóng, lướt web*)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-49",
    "order": 49,
    "name": "Từ tố độc lập",
    "definition": "- Từ tố độc lập: là từ tố đơn âm tự do, vừa có khả năng đứng một mình làm thành một từ đơn độc lập có nghĩa thực xác định để tạo câu bình thường, vừa có khả năng đóng vai trò từ tố cơ sở để tạo từ phức. Đóng vai trò là đơn vị từ vựng tiêu biểu (từ tiếng Việt) có tần suất sản sinh từ phức rất cao.",
    "examples": [
      "*chạy* (từ đơn: *Anh ấy* chạy *rất nhanh,* tham gia tạo từ phức: *chạy chữa, chạy chọt, chạy đua*)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-50",
    "order": 50,
    "name": "Từ tố cơ sở",
    "definition": "- Từ tố cơ sở: là từ tố có sẵn, mang nghĩa (nghĩa thực hoặc nghĩa biểu trưng/gợi hình/gợi âm), đóng vai trò là nguyên liệu gốc hay điểm xuất phát chịu sự tác động của phương thức tạo từ (ghép hoặc láy) để sinh ra một từ phức mới. Khác với từ tố láy, từ tố cơ sở quyết định hạt nhân ngữ nghĩa của từ phức.",
    "examples": [
      "*mịn*: từ tố cơ sở trong từ láy *mịn màng*",
      "thắt: từ tố cơ sở trong từ ghép *thắt lưng, thắt chặt*."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-51",
    "order": 51,
    "name": "Từ tố không độc lập",
    "definition": "- Từ tố không độc lập: là từ tố đơn âm không thể đứng một mình để làm thành một từ độc lập tạo câu bình thường, chỉ xuất hiện trong các tổ hợp từ phức với tư cách là thành tố cấu tạo từ. Bao gồm nhóm từ tố gốc Hán có nghĩa rõ ràng nhưng không tự do và nhóm từ tố mất nghĩa cổ/phiên âm trong tổ hợp từ phức.",
    "examples": [
      "*gia* (trong *gia đình, gia tăng* - gốc Hán), *dốt* (trong *dốt đặc* - từ tố cổ/mất nghĩa độc lập)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-52",
    "order": 52,
    "name": "Từ tố láy",
    "definition": "- Từ tố láy: (hay còn gọi là *từ tố thứ sinh)* là từ tố được sản sinh ra trực tiếp từ một từ tố cơ sở theo phương thức láy, có vỏ ngữ âm lặp lại toàn bộ hoặc một bộ phận (âm đầu, vần, thanh điệu) của từ tố cơ sở.",
    "examples": [
      "*màng*: từ tố láy thứ sinh được sinh ra từ từ tố cơ sở *mịn* trong *mịn màng*), *thót* (trong *thánh thót*)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-53",
    "order": 53,
    "name": "Từ tố loại biệt nghĩa",
    "definition": "- Từ tố loại biệt nghĩa: là từ tố phụ Y trong từ ghép chính phụ phân nghĩa biệt loại, có chức năng chia loại lớn X thành các loại nhỏ có quan hệ bao gồm/nằm trong, trực tiếp tạo ra nét nghĩa phân hóa/biệt loại giữa các từ trong cùng hệ thống. Chỉ ra thuộc tính, tính năng, nguyên liệu, đường nét hoặc phương thức đặc thù để phân biệt đối tượng này với đối tượng khác cùng chủng loại.",
    "examples": [
      "Trong hệ thống từ ghép phân nghĩa chỉ chủng loại xe có từ tố loại lớn *xe*: các từ tố loại biệt nghĩa là *điện* (trong *xe điện*), *hơi* (trong *xe hơi*), *tải* (trong *xe tải*)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-54",
    "order": 54,
    "name": "Từ tố loại lớn",
    "definition": "- Từ tố loại lớn: là từ tố chính X mang nghĩa chỉ một phạm vi/chủng loại rộng lớn các thực thể, hoạt động hoặc tính chất cùng bản chất, làm hạt nhân định danh để kết hợp với các từ tố loại biệt nghĩa Y tạo thành một chuỗi hệ thống các từ ghép chính phụ phân nghĩa. Có tính khái quát cao, làm cơ sở bao trùm (thượng cấp) cho các loại nhỏ hơn nằm trong nó.",
    "examples": [
      "*nhà* (từ tố loại lớn trong chuỗi từ ghép: *nhà ống, nhà sàn, nhà ngói, nhà tranh, nhà bè*), *mũ* (từ tố loại lớn trong: *mũ bảo hiểm, mũ cối, mũ lưỡi trai*)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-55",
    "order": 55,
    "name": "Từ tố thứ sinh",
    "definition": "- Từ tố thứ sinh: (hay còn gọi là *từ tố láy*) là từ tố được sản sinh ra trực tiếp từ một từ tố cơ sở theo phương thức láy, có vỏ ngữ âm lặp lại toàn bộ hoặc một bộ phận (âm đầu, vần, thanh điệu) của từ tố cơ sở.",
    "examples": [
      "từ tố *gàng* được sinh ra từ từ tố cơ sở *gọn* trong *gọn gàng.*"
    ],
    "imageUrl": null
  },
  {
    "id": "concept-56",
    "order": 56,
    "name": "Từ vựng địa phương",
    "definition": "- Từ vựng địa phương: là đơn vị từ vựng có nghĩa khác nhau ít hay nhiều kèm theo sự khác nhau về ngữ âm nhiều hay ít nhưng không nằm trong những sai dị ngữ âm đều đặn hay không đều đặn.",
    "examples": [
      "từ *bắp* (phương ngữ miền Nam) tương ứng với từ *ngô* (phương ngữ miền Bắc)."
    ],
    "imageUrl": null
  },
  {
    "id": "concept-57",
    "order": 57,
    "name": "Tục ngữ",
    "definition": "- Trường hợp 1: Tục ngữ: là những đơn vị tương đương với câu, là một phán đoán, một sự đánh giá, một sự khẳng định về một chân lí, một lẽ thường đối với một nền văn hoá nào đó, nghĩa là một tư tưởng hoàn chỉnh, độc lập với văn cảnh. Ở tư cách một phát ngôn tương đương với câu, tục ngữ không được xem là một đơn vị từ vựng tương đương với từ, nên không thuộc phạm vi của ngữ cố định theo nghĩa hẹp.\n\n- Trường hợp 2: Tục ngữ được dùng như một ngữ cố định và thuộc phạm vi của từ vựng - ngữ nghĩa học. Trong một số trường hợp, một câu tục ngữ có thể được sử dụng như một đơn vị có sẵn, đảm nhiệm một thành phần hoặc một bộ phận của thành phần trong câu. Khi đó, nó không còn hoạt động chủ yếu như một phát ngôn độc lập mà tham gia vào cấu trúc cú pháp của một câu lớn hơn. Ý nghĩa và chức năng của tổ hợp vì thế có sự phụ thuộc nhất định vào ngữ cảnh giao tiếp. Hình thức của tổ hợp có thể vẫn được giữ nguyên, nhưng chức năng cú pháp và quan hệ của nó với các thành phần khác trong câu đã thay đổi. Ở tư cách này, tục ngữ có thể được xem xét trong phạm vi từ vựng - ngữ nghĩa, cụ thể là ở phương diện các đơn vị có tính cố định và có sẵn trong ngôn ngữ.",
    "examples": [
      "*Ông bà ta từ xưa đã đúc kết được một bài học quý báu về môi trường sống: “Gần mực thì đen, gần đèn thì rạng”.*\n⇒ Trong câu văn trên, *Gần mực thì đen, gần đèn thì rạng* đứng độc lập như một câu trích dẫn nguyên vẹn, truyền đạt một bài học chân lý nhân sinh hoàn chỉnh, không bị biến đổi cấu trúc và không đảm nhiệm vai trò làm thành phần nòng cốt (như chủ ngữ hay vị ngữ) cho câu chứa nó.",
      "*Trong công việc, anh ấy lúc nào cũng nước đến chân mới nhảy, khiến cả nhóm nhiều lần phải thức đêm làm bù cho kịp tiến độ.* Sự thay đổi chức năng cú pháp: Câu tục ngữ không còn đứng độc lập nữa, mà tham gia thành phần vị ngữ trong câu văn. Sự thay đổi ý nghĩa: Không còn biểu thị một phán đoán/chân lý mang tính bài học chung chung, mà được dùng với chức năng định danh tương đương một tính từ/động từ, chỉ thói quen trì hoãn, lười biếng của một cá nhân cụ thể.\n⇒ Vì tham gia làm thành phần câu và mang chức năng tương đương từ/cụm từ định danh, câu tục ngữ chuyển hóa thành một ngữ cố định và thuộc phạm vi từ vựng - ngữ nghĩa học."
    ],
    "imageUrl": null
  }
];
