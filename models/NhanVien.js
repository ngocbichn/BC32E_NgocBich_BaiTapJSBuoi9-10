function NhanVien() {
    this.taiKhoan = 0;
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = '';
    this.luongCB = 0;
    this.chucVu = '';
    this.gioLam = 0;
    this.tinhTongLuong = function () {
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

    this.xepLoaiNV = function () {
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
}