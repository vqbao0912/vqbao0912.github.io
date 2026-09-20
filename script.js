const toggle = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();


// English text → Vietnamese. Add new entries here when adding website content.
const vietnamese = {
  "Skip to content": "Chuyển đến nội dung",
  "RESEARCH & TEACHING": "NGHIÊN CỨU & GIẢNG DẠY",
  "Menu": "Danh mục",
  "About": "Giới thiệu",
  "Research": "Nghiên cứu",
  "Publications": "Công bố",
  "Teaching": "Giảng dạy",
  "Projects": "Đề tài",
  "Honors": "Giải thưởng",
  "Get in touch": "Liên hệ",
  "LECTURER · RESEARCHER · EDUCATOR": "GIẢNG VIÊN · NHÀ NGHIÊN CỨU · NHÀ GIÁO",
  "Connecting signals.": "Kết nối tín hiệu.",
  "Advancing intelligence.": "Phát triển trí tuệ.",
  "I work at the intersection of wireless communications, digital signal processing, and artificial intelligence.": "Tôi nghiên cứu sự giao thoa giữa truyền thông không dây, xử lý tín hiệu số và trí tuệ nhân tạo.",
  "School of Electrical Engineering": "Khoa Điện – Điện tử",
  "International University · VNU-HCM": "Trường Đại học Quốc tế · ĐHQG-HCM",
  "Explore my research": "Khám phá nghiên cứu",
  "Selected publications": "Công bố tiêu biểu",
  "ACADEMIC PROFILE": "HỒ SƠ KHOA HỌC",
  "Vương Quốc Bảo, Ph.D.": "TS. Vương Quốc Bảo",
  "Telecommunications · University of Brest, 2022": "Viễn thông · Đại học Brest, 2022",
  "HO CHI MINH CITY, VIETNAM": "THÀNH PHỐ HỒ CHÍ MINH, VIỆT NAM",
  "WIRELESS COMMUNICATIONS": "TRUYỀN THÔNG KHÔNG DÂY",
  "DIGITAL SIGNAL PROCESSING": "XỬ LÝ TÍN HIỆU SỐ",
  "COMPUTER VISION": "THỊ GIÁC MÁY TÍNH",
  "APPLIED AI": "TRÍ TUỆ NHÂN TẠO ỨNG DỤNG",
  "01 / ABOUT": "01 / GIỚI THIỆU",
  "Research grounded": "Nghiên cứu gắn liền",
  "in real applications.": "với ứng dụng thực tiễn.",
  "I am a lecturer in the School of Electrical Engineering at International University, Vietnam National University Ho Chi Minh City.": "Tôi là giảng viên Khoa Điện – Điện tử, Trường Đại học Quốc tế, Đại học Quốc gia Thành phố Hồ Chí Minh.",
  "My research connects the foundations of telecommunications with applications in intelligent systems. I investigate full-duplex communications, channel coding, and physical-layer security, alongside computer vision and machine learning for biomedical imaging and practical sensing systems.": "Nghiên cứu của tôi kết nối nền tảng viễn thông với các ứng dụng trong hệ thống thông minh. Tôi nghiên cứu truyền thông song công toàn phần, mã hóa kênh và bảo mật lớp vật lý, đồng thời ứng dụng thị giác máy tính và học máy trong xử lý ảnh y sinh và các hệ thống cảm biến thực tiễn.",
  "I received my Ph.D. in Telecommunications from the University of Brest, France, in 2022. At International University, I also support student activities and supervise undergraduate research.": "Tôi nhận bằng tiến sĩ chuyên ngành Viễn thông tại Đại học Brest, Pháp, năm 2022. Tại Trường Đại học Quốc tế, tôi còn phụ trách hỗ trợ hoạt động sinh viên và hướng dẫn sinh viên nghiên cứu khoa học.",
  "Ph.D. · Telecommunications": "Tiến sĩ · Viễn thông",
  "University of Brest, France · MathSTIC": "Đại học Brest, Pháp · Trường Tiến sĩ MathSTIC",
  "M.Eng. · Electronic Engineering": "Thạc sĩ · Kỹ thuật điện tử",
  "International University, VNU-HCM": "Trường Đại học Quốc tế, ĐHQG-HCM",
  "B.Eng. · Electronics & Telecommunications": "Kỹ sư · Điện tử – Viễn thông",
  "02 / RESEARCH": "02 / NGHIÊN CỨU",
  "From reliable networks": "Từ mạng truyền thông tin cậy",
  "to intelligent systems.": "đến hệ thống thông minh.",
  "Three connected areas of inquiry,": "Ba hướng nghiên cứu liên kết,",
  "from theory to implementation.": "từ lý thuyết đến triển khai.",
  "Wireless": "Truyền thông",
  "communications": "không dây",
  "Full-duplex transmission, channel estimation, interference cancellation, and coding for 5G and beyond.": "Truyền dẫn song công toàn phần, ước lượng kênh, khử nhiễu và mã hóa cho mạng 5G và các thế hệ tiếp theo.",
  "5G & beyond": "5G và các thế hệ tiếp theo",
  "Physical-layer security": "Bảo mật lớp vật lý",
  "Computer vision": "Thị giác máy tính",
  "& medical AI": "& AI trong y học",
  "Deep learning for biomedical image analysis, with applications in breast cancer detection and image classification.": "Học sâu trong phân tích ảnh y sinh, ứng dụng vào phát hiện ung thư vú và phân loại hình ảnh.",
  "Medical imaging": "Ảnh y khoa",
  "Vision Transformers": "Mô hình Vision Transformer",
  "Signal processing": "Xử lý tín hiệu",
  "& intelligent sensing": "& cảm biến thông minh",
  "AI for digital signal processing, speech emotion recognition, and Internet of Things applications.": "Ứng dụng AI trong xử lý tín hiệu số, nhận dạng cảm xúc qua giọng nói và các hệ thống Internet vạn vật.",
  "IoT": "Internet vạn vật (IoT)",
  "SELECTED RESEARCH PROJECT · 2024–2025": "ĐỀ TÀI NGHIÊN CỨU TIÊU BIỂU · 2024–2025",
  "Vision Transformers for biomedical image classification": "Ứng dụng mô hình Vision Transformer để phân loại hình ảnh y sinh",
  "Principal investigator · International University · T2023-05-EE": "Chủ nhiệm đề tài · Trường Đại học Quốc tế · T2023-05-EE",
  "03 / PUBLICATIONS": "03 / CÔNG BỐ KHOA HỌC",
  "Selected scholarship.": "Công trình tiêu biểu.",
  "Publication archive": "Danh mục công bố",
  "Journal articles and recent conference contributions across communications and applied AI.": "Các bài báo tạp chí và công trình hội nghị gần đây trong lĩnh vực truyền thông và trí tuệ nhân tạo ứng dụng.",
  "More selected publications": "Xem thêm công bố tiêu biểu",
  "04 / TEACHING & MENTORING": "04 / GIẢNG DẠY & HƯỚNG DẪN",
  "Connecting understanding": "Kết nối kiến thức",
  "with hands-on exploration.": "với trải nghiệm thực hành.",
  "Teaching interests": "Lĩnh vực giảng dạy",
  "Signals and Systems": "Tín hiệu và hệ thống",
  "Digital Signal Processing": "Xử lý tín hiệu số",
  "Principles of Communication Systems": "Nguyên lý hệ thống truyền thông",
  "Computer and Communication Networks": "Mạng máy tính và truyền thông",
  "Digital Logic Design": "Thiết kế logic số",
  "Electronic Circuits": "Mạch điện tử",
  "Programming for Engineering": "Lập trình cho kỹ thuật",
  "Selected undergraduate supervision": "Một số đề tài hướng dẫn sinh viên",
  "A Computer Vision Based Assistant Device for Enhancing Mobility and Identity of Vision Impairment": "Thiết Bị Hỗ Trợ Dựa Trên Thị Giác Máy Tính Nhằm Cải Thiện Khả Năng Di Chuyển và Nhận Biết Của Người Khiếm Thị",
  "Design and Implementation of an Unmanned Aerial Vehicle System for Human Detection": "Thiết kế và triển khai hệ thống máy bay không người lái cho nhiệm vụ phát hiện con người",
  "Deep Learning–Based Medical Image Analysis in Cancer Diagnosis": "Ứng dụng học sâu phân tích ảnh y khoa trong chẩn đoán ung thư",
  "YOLO-Based Improvements for Adapting Roadsides Trash Detection in Vietnam": "Phát Triển Và Cải Tiến Mô Hình YOLO Cho Nhận Diện Rác Thải Trong Điều Kiện Thực Tế Tại Việt Nam",
  "IOT-Enable Digital Twin for Predictive Monitoring of Mini Conveyer Belt": "Ứng Dụng Công Nghệ Bản Sao Kỹ Thuật Số Trong Giám Sát Và Phân Tích Dự Đoán Băng Tải Mini Dựa Trên IoT"
  "05 / HONORS": "05 / GIẢI THƯỞNG",
  "Recognition": "Những dấu mốc",
  "along the way.": "được ghi nhận.",
  "Best Paper Award": "Giải bài báo xuất sắc nhất",
  "GEn-CITy 2024 · Binary and non-binary coding approaches for reliable and secure full-duplex transmission.": "GEn-CITy 2024 · Các phương pháp mã hóa nhị phân và phi nhị phân cho truyền dẫn song công toàn phần tin cậy và bảo mật.",
  "Outstanding Young Officer and Lecturer": "Cán bộ, giảng viên trẻ tiêu biểu",
  "Vietnam National University Ho Chi Minh City": "Đại học Quốc gia Thành phố Hồ Chí Minh",
  "Pony Chung Founder Scholarship": "Học bổng Pony Chung Founder",
  "Master’s scholarship · Academic years 2016–2017 and 2017–2018": "Học bổng dành cho học viên cao học · Năm học 2016–2017 và 2017–2018",
  "Second Rank & Excellent Scientific Publications": "Á khoa & Thành tích công bố khoa học xuất sắc",
  "Master of Electrical Engineering · International University, VNU-HCM": "Chương trình thạc sĩ Kỹ thuật điện · Trường Đại học Quốc tế, ĐHQG-HCM",
  "Silver Medal · Second Rank": "Huy chương bạc · Á khoa",
  "Electrical Engineering · International University, VNU-HCM": "Ngành Kỹ thuật điện · Trường Đại học Quốc tế, ĐHQG-HCM",
  "Student of 5 Merits": "Sinh viên 5 tốt",
  "Ho Chi Minh City and VNU-HCM recognition": "Danh hiệu cấp Thành phố Hồ Chí Minh và ĐHQG-HCM",
  "06 / RESEARCH PROJECTS": "06 / ĐỀ TÀI NGHIÊN CỨU",
  "Selected projects.": "Đề tài tiêu biểu.",
  "Research projects in communications, computer vision, and applied artificial intelligence.": "Các đề tài nghiên cứu về truyền thông, thị giác máy tính và trí tuệ nhân tạo ứng dụng.",
  "PRINCIPAL INVESTIGATOR · INTERNATIONAL UNIVERSITY": "CHỦ NHIỆM ĐỀ TÀI · TRƯỜNG ĐẠI HỌC QUỐC TẾ",
  "Vision Transformers for Biomedical Image Classification": "Ứng dụng mô hình Vision Transformer để phân loại hình ảnh y sinh",
  "· Project code: T2023-05-EE · 2024–2025": " · Mã đề tài: T2023-05-EE · 2024–2025",
  "RESEARCH TEAM MEMBER · INTERNATIONAL UNIVERSITY": "THÀNH VIÊN NGHIÊN CỨU · TRƯỜNG ĐẠI HỌC QUỐC TẾ",
  "Speech Emotion Recognition Using Machine Learning": "Nhận dạng cảm xúc qua giọng nói ứng dụng học máy",
  "· Project code: T2022-02-EE · 2022–2023": " · Mã đề tài: T2022-02-EE · 2022–2023",
  "07 / CONTACT": "07 / LIÊN HỆ",
  "Let’s connect.": "Kết nối với tôi.",
  "For academic collaboration, research enquiries,": "Trao đổi về hợp tác học thuật, nghiên cứu",
  "and student supervision.": "và hướng dẫn sinh viên.",
  "Linh Xuân Ward": "Phường Linh Xuân",
  "Ho Chi Minh City, Vietnam": "Thành phố Hồ Chí Minh, Việt Nam",
  "Google Sites profile ↗": "Trang cá nhân trên Google Sites ↗",
  "Research. Teach. Discover.": "Nghiên cứu. Giảng dạy. Khám phá.",
  "Back to top ↑": "Về đầu trang ↑",
  "Ots-Net: Unlocking Mechanistic Interpretability in ECG Arrhythmia Classification": "Ots-Net: Làm rõ cơ chế hoạt động của mô hình trong phân loại rối loạn nhịp tim từ tín hiệu ECG",
  "MANGA-YOLO: A Mamba-Inspired YOLO Model with Group Attention for Breast Mass Detection in Mammograms": "MANGA-YOLO: Mô hình YOLO lấy cảm hứng từ Mamba kết hợp cơ chế chú ý nhóm để phát hiện khối u trên ảnh nhũ ảnh",
  "Node-Based Graph Convolutional Network With SLIC Method for Breast Cancer Ultrasound Images Classification": "Mạng tích chập đồ thị dựa trên nút kết hợp phương pháp SLIC để phân loại ảnh siêu âm ung thư vú",
  "Non-binary Codes Approach on the Performance of Short-packet Full-Duplex Transmissions": "Phương pháp mã phi nhị phân và hiệu năng truyền dẫn song công toàn phần gói tin ngắn",
  "Secrecy Coding Analysis of Short-Packet Full-Duplex Transmissions with Joint Iterative Channel Estimation and Decoding Processes": "Phân tích mã hóa bảo mật cho truyền dẫn song công toàn phần gói tin ngắn với quá trình ước lượng kênh và giải mã lặp kết hợp",
  "Joint Iterative Blind Self-Interference Cancellation, Propagation Channel Estimation and Decoding Processes in Full-Duplex Transmissions": "Kết hợp khử tự nhiễu mù, ước lượng kênh truyền và giải mã theo phương pháp lặp trong truyền dẫn song công toàn phần",
  "MiTRes-UNet: A Hybrid Encoder Framework with Evolutionary Feature Selection for Intracranial Aneurysm Detection": "MiTRes-UNet: Khung bộ mã hóa lai kết hợp lựa chọn đặc trưng tiến hóa để phát hiện phình động mạch nội sọ",
  "A Re-parameterized Multi-scale and Global Context Framework for Waste Detection in Vietnamese Street Scenes": "Khung đa tỉ lệ và ngữ cảnh toàn cục được tái tham số hóa để phát hiện rác trong cảnh đường phố Việt Nam",
  "Remote Sensing-Based Human Detection Using a Custom-Built Coaxial UAV System": "Phát hiện con người dựa trên viễn thám bằng hệ thống máy bay không người lái đồng trục tự chế tạo",
  "Joint Semi-Blind Self-Interference Cancellation and Equalisation Processes in 5G QC-LDPC-Encoded Short-Packet Full-Duplex Transmissions": "Kết hợp khử tự nhiễu bán mù và cân bằng kênh trong truyền dẫn song công toàn phần gói tin ngắn sử dụng mã QC-LDPC 5G",
  "JOURNAL · DISCOVER APPLIED SCIENCES": "TẠP CHÍ · DISCOVER APPLIED SCIENCES",
  "JOURNAL · COMPUTERS IN BIOLOGY AND MEDICINE": "TẠP CHÍ · COMPUTERS IN BIOLOGY AND MEDICINE",
  "JOURNAL · IEEE ACCESS": "TẠP CHÍ · IEEE ACCESS",
  "JOURNAL · INTERNATIONAL JOURNAL OF ELECTRICAL AND COMPUTER ENGINEERING": "TẠP CHÍ · INTERNATIONAL JOURNAL OF ELECTRICAL AND COMPUTER ENGINEERING",
  "JOURNAL · SENSORS": "TẠP CHÍ · SENSORS",
  "CONFERENCE · IEEE ISBI": "HỘI NGHỊ · IEEE ISBI",
  "CONFERENCE · ICCSA": "HỘI NGHỊ · ICCSA",
  "CONFERENCE · RIVF": "HỘI NGHỊ · RIVF"
};

// Keep the original text nodes so switching languages preserves links, formatting,
// disclosure state and event handlers. No translated HTML is injected.
const languageButtons = document.querySelectorAll('[data-language]');
const switcher = document.querySelector('.language-switch');
const translatedNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, style, .language-switch')) continue;
  const key = node.nodeValue.trim();
  if (Object.prototype.hasOwnProperty.call(vietnamese, key)) {
    const original = node.nodeValue;
    translatedNodes.push({node, original, translated:
      original.slice(0, original.indexOf(key)) + vietnamese[key] +
      original.slice(original.indexOf(key) + key.length)});
  }
}
const translatedAttributes = [
  [document.querySelector('.brand'), 'aria-label', 'Vương Quốc Bảo home', 'Trang chủ Vương Quốc Bảo'],
  [nav, 'aria-label', 'Main navigation', 'Điều hướng chính'],
  [toggle, 'aria-label', 'Open or close menu', 'Mở hoặc đóng danh mục'],
  [document.querySelector('.portrait-panel img'), 'alt', 'Portrait of Dr. Vương Quốc Bảo', 'Ảnh chân dung TS. Vương Quốc Bảo']
];
const description = document.querySelector('meta[name="description"]');
const englishDescription = description.content;
const englishTitle = document.title;
function setLanguage(language, remember = false) {
  const vietnameseSelected = language === 'vi';
  document.documentElement.lang = vietnameseSelected ? 'vi' : 'en';
  translatedNodes.forEach(({node, original, translated}) => {
    node.nodeValue = vietnameseSelected ? translated : original;
  });
  translatedAttributes.forEach(([element, attribute, en, vi]) => {
    if (element) element.setAttribute(attribute, vietnameseSelected ? vi : en);
  });
  document.title = vietnameseSelected ? 'Vương Quốc Bảo · Nghiên cứu & Giảng dạy' : englishTitle;
  description.content = vietnameseSelected
    ? 'TS. Vương Quốc Bảo — giảng viên Trường Đại học Quốc tế, ĐHQG-HCM. Nghiên cứu truyền thông không dây, xử lý tín hiệu, thị giác máy tính và AI ứng dụng.'
    : englishDescription;
  languageButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === document.documentElement.lang));
  });
  if (remember) {
    try { localStorage.setItem('vqbao-language', document.documentElement.lang); }
    catch (_) { /* Switching remains available when browser storage is blocked. */ }
  }
}
languageButtons.forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language, true));
});
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('vqbao-language') === 'vi' ? 'vi' : 'en'; }
catch (_) { /* Default to English when browser storage is unavailable. */ }
setLanguage(savedLanguage);
switcher.hidden = false;


// Keep the homepage language in sync after returning from a course page.
window.addEventListener('pageshow', event => {
  if (!event.persisted) return;
  try { setLanguage(localStorage.getItem('vqbao-language') === 'vi' ? 'vi' : 'en'); }
  catch (_) { /* Keep the current language if storage is unavailable. */ }
});
