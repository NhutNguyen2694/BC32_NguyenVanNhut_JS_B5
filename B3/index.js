function b3() {
  let name = document.getElementById("name").value;
  let tongThuNhapNam = document.getElementById("tongtiennam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNgPhuThuoc").value * 1;
  let tongChiuThue = tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;
  let total = 0;
  let current = new Intl.NumberFormat("vn-VN");
  if (tongThuNhapNam < 11e6) {
    alert("Số tiền thu nhập không hợp lệ");
  } else {
    if (tongChiuThue <= 60e6) {
      total = tongChiuThue * 0.05;
    } else if (tongChiuThue <= 120e6) {
      total = tongChiuThue * 0.1;
    } else if (tongChiuThue <= 210e6) {
      total = tongChiuThue * 0.15;
    } else if (tongChiuThue <= 384e6) {
      total = tongChiuThue * 0.2;
    } else if (tongChiuThue <= 624e6) {
      total = tongChiuThue * 0.25;
    } else if (tongChiuThue <= 960e6) {
      total = tongChiuThue * 0.3;
    } else {
      total = tongChiuThue * 0.35;
    }
  }
  document.getElementById("showResult3").innerHTML =
    "Họ Tên: " +
    name +
    ". Tiền thuế thu nhập cá nhân là : " +
    current.format(total);
  document.getElementById("showResult3").className =
    "card-footer bg-success text-center text-white";
}
