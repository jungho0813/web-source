// 오늘날짜확인후 -1 : 어제날짜를 화면에 보여주기

const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

function init() {
  var today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate() - 1;

  txtYear.value = year;

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month;
  selDay.value = day;
}
init();
