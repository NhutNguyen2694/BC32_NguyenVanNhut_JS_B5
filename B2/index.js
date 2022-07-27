function b2() {
  let name2 = document.getElementById("name2").value;
  let kw = +document.getElementById("kw").value;
  let result = 0;
  if (kw <= 0) {
    result = alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }
  else if(kw > 0 && kw <= 50){
    result = kw * 500;
  } else if ( kw > 50 && kw <= 100){
    result = 50 * 500 + (kw - 50) * 650;
  } else if ( kw > 100 && kw <= 200)
  {
    result =50 * 500 + 50 * 650 + (kw -100) * 850;
  }
  else if ( kw > 200 && kw <= 350){
    result =50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  }else{
    result =(50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 ) + ((kw -350)*1300);
  }
  let currentFormat = new Intl.NumberFormat("vn-VN");
  document.getElementById("showResult2").innerHTML = "Họ tên: "+name2+" . Tiền điện: " +currentFormat.format(result);
  document.getElementById("showResult2").className =
    "card-footer bg-success text-center text-white";
}
