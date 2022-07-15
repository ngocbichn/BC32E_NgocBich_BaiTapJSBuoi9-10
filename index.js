var arrNhanVien = [];
document.querySelector('#btnThemNV').onclick = function () {
    var nv = new NhanVien();
    //input
    nv.taiKhoan = Number(document.querySelector('#tknv').value);
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCB = Number(document.querySelector('#luongCB').value);
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = Number(document.querySelector('#gioLam').value);

    //Validation
    var valid = true;
    valid = kiemTraRong(nv.email, '#tbEmail', 'Email') & kiemTraRong(nv.hoTen, '#tbTen', 'Họ tên') & kiemTraRong(nv.matKhau, '#tbMatKhau', 'Mật khẩu') & kiemTraRong(nv.ngayLam, '#tbNgay', 'Ngày làm') & kiemTraRong(nv.luongCB, '#tbLuongCB', 'Lương cơ bản') & kiemTraRong(nv.gioLam, '#tbGiolam', 'Giờ làm');

    valid &= kiemTraDoDai(nv.taiKhoan, '#error_tbTKNV', 'Tài khoản', 4, 6) & kiemTraTatCaKyTu(nv.hoTen, '#error_tbTen', 'Họ tên') & kiemTraEmail(nv.email, '#error_tbEmail', 'Email') & kiemTraGiaTri(nv.luongCB, '#error_tbLuongCB', 'Lương cơ bản', 1000000, 20000000) & kiemTraGiaTri(nv.gioLam, '#error_tbGiolam', 'Giờ làm', 80, 200);


    if (!valid) {
        return;
    }



    //add into arrNhanVien
    arrNhanVien.push(nv);
    //add into table
    renderTableNhanVien(arrNhanVien);
    //Lưu vào local storage
    luuLocalStorage(arrNhanVien);
}

function renderTableNhanVien(arrayNhanVien) {
    var html = '';
    for (var index = 0; index < arrayNhanVien.length; index++) {
        var nv = arrayNhanVien[index];
        nv.tinhTongLuong = function () {
            var tongTienLuong = 0;
            if (this.chucVu === 'Sếp') {
                tongTienLuong = this.luongCB * 3;
            } else if (this.chucVu === 'Trưởng phòng') {
                tongTienLuong = this.luongCB * 2;
            } else if (this.chucVu === 'Nhân viên') {
                tongTienLuong = this.luongCB * 1;
            }

            return tongTienLuong;
        };

        nv.xepLoaiNV = function () {
            var xepLoai = '';
            if (this.gioLam >= 0 & this.gioLam < 160) {
                xepLoai = 'Nhân viên trung bình';
            } else if (this.gioLam >= 160 & this.gioLam < 176) {
                xepLoai = 'Nhân viên khá';
            } else if (this.gioLam >= 176 & this.gioLam < 192) {
                xepLoai = 'Nhân viên giỏi';
            } else if (this.gioLam >= 192) {
                xepLoai = 'Nhân viên xuất sắc';
            }

            return xepLoai;
        }

        html += `
          <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tinhTongLuong()}</td>
            <td>${nv.xepLoaiNV()}</td>
            <td>
              <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
              <button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-primary" onclick="chinhSua('${nv.taiKhoan}')">Sửa</button>
            </td>
          </tr>
        `;
    }

    document.querySelector('#tableDanhSach').innerHTML = html;

    return html;
}

function timKiemNhanVien(arrayNhanVien) {
    var nv = new NhanVien();

}



function xoaNhanVien(taiKhoanNVClick) {
    var indexDel = arrNhanVien.findIndex(nv => nv.taiKhoan === taiKhoanNVClick);
    arrNhanVien.splice(indexDel, 1);

    renderTableNhanVien(arrNhanVien);
};

function chinhSua(taiKhoanNVClick) {
    var indexEdit = arrNhanVien.findIndex(nv => nv.taiKhoan === taiKhoanNVClick);
    var nvEdit = arrNhanVien[indexEdit];

    //Khoa lai tai khoan
    // document.querySelector('#tknv').disabled = true;
    //Gan cac gia tri len giao dien
    document.querySelector('#tknv').value = nvEdit.taiKhoan;
    document.querySelector('#name').value = nvEdit.hoTen;
    document.querySelector('#email').value = nvEdit.email;
    document.querySelector('#password').value = nvEdit.matKhau;
    document.querySelector('#datepicker').value = nvEdit.ngayLam;
    document.querySelector('#luongCB').value = nvEdit.luongCB;
    document.querySelector('#chucvu').value = nvEdit.chucVu;
    document.querySelector('#gioLam').value = nvEdit.gioLam;

    console.log(arrNhanVien);

}



document.querySelector('#btnCapNhat').onclick = function () {
    //Lay du lieu nguoi dung thay doi tren giao dien
    var nv = new NhanVien();
    //lấy thông tin input từ người dùng
    nv.taiKhoan = Number(document.querySelector("#tknv").value);
    nv.hoTen = document.querySelector("#name").value;
    nv.email = document.querySelector("#email").value;
    nv.matKhau = document.querySelector("#password").value;
    nv.ngayLam = document.querySelector("#datepicker").value;
    nv.luongCB = Number(document.querySelector("#luongCB").value);
    nv.chucVu = document.querySelector("#chucvu").value;
    nv.gioLam = Number(document.querySelector("#gioLam").value);

    //Tìm ra phần tử trong mảng cần chỉnh sửa
    var indexEdit = arrNhanVien.findIndex(nhanVien => nhanVien.taikhoan === nv.taiKhoan);

    arrNhanVien[indexEdit].hoTen = nv.hoTen;
    arrNhanVien[indexEdit].email = nv.email;
    arrNhanVien[indexEdit].matKhau = nv.matKhau;
    arrNhanVien[indexEdit].ngayLam = nv.ngayLam;
    arrNhanVien[indexEdit].luongCB = nv.luongCB;
    arrNhanVien[indexEdit].chucVu = nv.chucVu;
    arrNhanVien[indexEdit].gioLam = nv.gioLam;

    //Tạo lại bảng sinh viên mới sau khi thay đổi
    renderTableNhanVien(arrNhanVien);
    //Mở lại nút mã sinh viên
    // document.querySelector('#tknv').disabled = false;
    //Lưu localstorage sau khi sửa
    luuLocalStorage();
}

function luuLocalStorage() {

    //Biến đổi mảng thành string
    var stringMangNhanVien = JSON.stringify(arrNhanVien);
    //Sau đó dùng string lưu vào local storage
    localStorage.setItem('arrNhanVien', stringMangNhanVien);
}

function layLocalStorage() {
    //check xem storage có dữ liệu đó hay không
    if (localStorage.getItem('arrNhanVien')) {
        //Lay ra
        var stringMangNhanVien = localStorage.getItem('arrNhanVien');
        //Lấy mangSinhVien gán bằng chuỗi được lấy từ localstorage ra (phải dùng hàm JSON.parse)
        arrNhanVien = JSON.parse(stringMangNhanVien);
        //tao ra table sinh vien tu mang
        renderTableNhanVien(arrNhanVien);
    }
}

//Gọi hàm lấy localstorage khi trang vừa load
window.onload = function () {
    layLocalStorage();
}