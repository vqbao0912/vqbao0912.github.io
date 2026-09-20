# Trang môn học và cách đăng lecture notes

## 1. Cập nhật website lần đầu

Bản cập nhật giữ nguyên ảnh, nội dung trang chủ và chức năng EN / VI đã có trên GitHub. Tên cả 7 môn trong phần Teaching nay mở các trang môn học riêng.

1. Giải nén `cap-nhat-trang-mon-hoc.zip`.
2. Mở repository https://github.com/vqbao0912/vqbao0912.github.io
3. Chọn **Add file → Upload files**.
4. Tải lên **nội dung bên trong ZIP**: ba file `index.html`, `styles.css`, `script.js` và hai thư mục `courses`, `materials`. Giữ đúng cấu trúc thư mục. Không tải nguyên ZIP, không đặt các file trong một thư mục bao ngoài.
5. Chọn **Commit changes** để lưu vào nhánh xuất bản website.
6. Khi website cập nhật xong, vào Teaching / Giảng dạy và nhấn tên môn.

Không cần sửa hoặc thay thư mục `assets`. Tài liệu hướng dẫn này có thể giữ trên máy, không bắt buộc tải lên website.

## 2. Cấu trúc các trang

Mỗi môn có:

- Giới thiệu ngắn về lĩnh vực.
- Mục tài liệu tham khảo của môn, hiện chưa có danh mục chính thức.
- Một liên kết học liệu mở MIT OpenCourseWare để tham khảo thêm.
- Mục lecture notes, hiện chưa có file vì bạn chưa cung cấp bài giảng.
- Danh mục chuyển sang môn khác, liên hệ giảng viên và nút EN / VI.

Phần giới thiệu là bản nháp tổng quan để bạn điều chỉnh theo đề cương. Không tự thêm số tín chỉ, điều kiện tiên quyết, lịch học hay tỷ lệ đánh giá. Liên kết MIT là nguồn tham khảo bổ sung, không phải tài liệu do bạn biên soạn hay danh mục bắt buộc của lớp.

| Môn học | File trang môn học | Thư mục tải tài liệu |
|---|---|---|
| Signals and Systems | `courses/signals-and-systems.html` | `materials/signals-and-systems/` |
| Digital Signal Processing | `courses/digital-signal-processing.html` | `materials/digital-signal-processing/` |
| Principles of Communication Systems | `courses/principles-of-communication-systems.html` | `materials/principles-of-communication-systems/` |
| Computer and Communication Networks | `courses/computer-and-communication-networks.html` | `materials/computer-and-communication-networks/` |
| Digital Logic Design | `courses/digital-logic-design.html` | `materials/digital-logic-design/` |
| Electronic Circuits | `courses/electronic-circuits.html` | `materials/electronic-circuits/` |
| Programming for Engineering | `courses/programming-for-engineering.html` | `materials/programming-for-engineering/` |

## 3. Ví dụ: đăng Lecture 01 của Digital Signal Processing

### Bước A — Tải file PDF

1. Đặt tên file là `lecture-01.pdf` (nên dùng chữ thường, không dấu và dấu gạch ngang).
2. Trong repository GitHub, mở thư mục **materials → digital-signal-processing**.
3. Chọn **Add file → Upload files**, tải `lecture-01.pdf` rồi **Commit changes**.

File lúc này nằm tại:

```
materials/digital-signal-processing/lecture-01.pdf
```

### Bước B — Thêm file vào danh sách trên website

1. Mở **courses → digital-signal-processing.html** trên GitHub.
2. Chọn biểu tượng bút chì để chỉnh sửa.
3. Tìm `<!-- START LECTURE NOTES`.
4. Trong phần đó, thay toàn bộ khối `<div class="material-empty"> ... </div>` bằng đoạn sau. Giữ nguyên thẻ `<section>`, tiêu đề của mục và phần còn lại của trang.

```html
<article class="resource-row">
  <div>
    <span class="resource-meta">LECTURE 01 · PDF</span>
    <h3 data-vi="Bài 1: Giới thiệu xử lý tín hiệu số">
      Lecture 1: Introduction to Digital Signal Processing
    </h3>
  </div>

  <div class="resource-actions">
    <a
      href="../materials/digital-signal-processing/lecture-01.pdf"
      target="_blank"
      rel="noopener"
      data-vi="Mở PDF"
    >Open PDF</a>

    <a
      href="../materials/digital-signal-processing/lecture-01.pdf"
      download
      data-vi="Tải xuống"
    >Download</a>
  </div>
</article>
```

5. Chọn **Commit changes**.
6. Sau khi website cập nhật, vào môn học và kiểm tra **Mở PDF** / **Tải xuống**.

**Tải PDF lên thư mục chưa đủ để file tự hiện trong danh sách: cần thực hiện cả Bước A và Bước B.** Website tĩnh không có nút quản trị tải file trực tiếp; bạn quản lý tài liệu qua GitHub.

### Thêm bài giảng tiếp theo

Sao chép cả khối `<article class="resource-row"> ... </article>` và dán tiếp ngay trước `<!-- END LECTURE NOTES -->`. Thay tên, số bài và cả hai đường dẫn bằng file mới, ví dụ `lecture-02.pdf`.

Đối với môn khác, thay `digital-signal-processing` bằng tên thư mục tương ứng trong bảng ở trên.

Muốn cập nhật nội dung PDF mà không đổi đường dẫn: tải bản mới cùng tên vào đúng thư mục, commit và tải lại trang.

## 4. Sửa phần giới thiệu môn học

Trong file HTML của môn, tìm `class="course-intro"`. Ví dụ:

```html
<p class="course-intro"
   data-vi="Nội dung giới thiệu bằng tiếng Việt.">
  Course introduction in English.
</p>
```

Sửa cả hai ngôn ngữ. Phần `data-vi` là bản tiếng Việt; nội dung giữa thẻ mở và đóng là tiếng Anh. Không đặt thẻ HTML bên trong thuộc tính `data-vi`. Khi cần dấu ngoặc kép trong thuộc tính, dùng `&quot;`.

Phần thông báo về đề cương nằm trong `class="course-notice"`; thay bằng thông tin chính thức khi bạn có đề cương.

## 5. Thêm tài liệu tham khảo

Trong trang môn học, tìm `<!-- START COURSE REFERENCES` và thay khối `material-empty` bên trong bằng một hoặc nhiều đoạn như sau. Thay đường dẫn mẫu bằng URL thật trước khi lưu.

```html
<article class="resource-row">
  <div>
    <span class="resource-meta" data-vi="TÀI LIỆU THAM KHẢO">
      REFERENCE
    </span>
    <h3>Tên sách hoặc tài liệu</h3>
    <p>Tác giả · Phiên bản · Năm xuất bản</p>
  </div>
  <div class="resource-actions">
    <a href="THAY-BANG-DUONG-DAN-THAT"
       target="_blank" rel="noopener"
       data-vi="Xem tài liệu">View resource</a>
  </div>
</article>
```

Với tài liệu của bạn được phép chia sẻ, có thể tải PDF vào thư mục `materials` và dùng cấu trúc đường dẫn tương đối như bài giảng. Các file trên website GitHub Pages công khai đều có thể được truy cập công khai; chỉ đăng tài liệu bạn muốn chia sẻ với sinh viên trên web.

## 6. Khi có lỗi

- **Không thấy trang môn học:** kiểm tra đã tải cả thư mục `courses` cùng các file bên trong lên đúng thư mục gốc.
- **Mất định dạng:** đảm bảo có `styles.css` ở thư mục gốc và `course.css` trong `courses`.
- **Không chuyển được EN / VI:** kiểm tra file `courses/course.js` đã được tải lên.
- **PDF báo 404:** kiểm tra tên file, chữ hoa/chữ thường và đường dẫn. `lecture-01.pdf` và `Lecture-01.pdf` là hai tên khác nhau.
- **Vẫn thấy bản cũ:** đợi cập nhật hoàn tất, sau đó nhấn Command + Shift + R (Mac) hoặc Ctrl + Shift + R (Windows).

Các file trong `materials` phải được đưa lên trước hoặc cùng lúc với đường dẫn tương ứng. Không giữ liên kết tới những file chưa tồn tại.
