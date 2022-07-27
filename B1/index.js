function b1() {
  let benchmark = +document.getElementById("benchmark").value;
  let beat = +document.getElementById("beat").value;
  let subject = +document.getElementById("subject").value;
  let point1 = +document.getElementById("point1").value;
  let point2 = +document.getElementById("point2").value;
  let point3 = +document.getElementById("point3").value;
  let result = "";
  if (point1 == 0 || point2 == 0 || point3 == 0) {
    result = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  }
  let countPoint = point1 + point2 + point3;
  if (beat === 1) {
    countPoint += 2;
  } else if (beat == 2) {
    countPoint += 1;
  } else if (beat == 3) {
    countPoint += 0.5;
  } else {
    countPoint += 0;
  }

  if (subject === 1) {
    countPoint += 2.5;
  } else if (subject == 2) {
    countPoint += 1.5;
  } else if (subject == 3) {
    countPoint += 1;
  } else {
    countPoint += 0;
  }
  if (benchmark <= countPoint) {
    result = "bạn đã đậu. Tổng điểm là: " + countPoint;
  } else {
    result = "bạn đã rớt. Tổng điểm là: " + countPoint;
  }
  document.getElementById("showResult1").innerHTML = result;
  document.getElementById("showResult1").className =
    "card-footer bg-success text-center text-white";
}
