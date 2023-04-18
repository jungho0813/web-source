// 오늘날짜확인후 -1 : 어제날짜를 화면에 보여주기

const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");
const msg = document.querySelector("#msg");
const box = document.querySelector(".box3");

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
function show(movieCd) {
  console.log("movieCd ", movieCd);

  let url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";

  url += movieCd;

  console.log("영화상세정보 ", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터가 없습니다.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo);

      let str = "<ul>";
      str += "<li>영화제목 : " + movieInfo.movieNm + "</li>";
      str += "<li>영어제목 : " + movieInfo.movieNmEn + "</li>";
      str += "<li>상영시간 : " + movieInfo.showTm + "분 </li>";
      str += "<li>감독 : " + movieInfo.directors[0].peopleNm + "</li>";

      const length = movieInfo.actors.length;
      let peopleNm = "";
      movieInfo.actors.forEach((actor, idx) => {
        if (idx == length - 1) {
          peopleNm += actor.peopleNm;
        } else {
          peopleNm += actor.peopleNm + ",";
        }
      });
      str += "<li>출연배우 : " + peopleNm + "</li>";
      str += "</ul>";
      box.innerHTML = str;
    })
    .catch((err) => {
      box.innerHTML = err;
    });
}

init();

// 확인 버튼 클릭시 전일자 영화 순위 가져오기
document.querySelector("#btn1").addEventListener("click", () => {
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";

  // 사용자가 선택한 날짜 가져오기
  url = url + (txtYear.value + selMon.value + selDay.value);
  console.log(url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("주소를 확인해 주세요");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList);

      let str = "";
      dailyBoxOfficeList.forEach((item) => {
        str += item.rank + " 위";
        const rankInten = parseInt(item.rankInten);
        if (rankInten > 0) str += "(▲";
        else if (rankInten < 0) str += "(▼";
        else str += "(";

        str += rankInten + ") : ";
        str +=
          "<a href='#' onclick='javascript:show(" +
          item.movieCd +
          ")'>" +
          item.movieNm +
          "</a><br>";
      });
      msg.innerHTML = str;
    })
    .catch((err) => {
      msg.innerHTML = err;
    });
});
