// orange 클래스 부착
// tab-버튼0번을 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// tab-버튼0 orange 클래스 부착

// classList.add / remove

// tab-button 찾기

// const arr = [1, 2, 3, 4];
// arr.forEach((item, i) => {
//   console.log(item);
// });

const tabBtns = document.querySelectorAll(".tab-button");

const tabCnts = document.querySelectorAll(".tab-content");

tabBtns.forEach((tabBtn, idx) => {
  tabBtn.addEventListener("click", (e) => {
    // 모든 tab-button 의 orange 제거
    tabBtns.forEach((item) => {
      item.classList.remove("orange");
    });
    // 현재 클릭이 된 tab-button 만 orange 부착
    e.target.classList.add("orange");

    // 모든 tab-content 의 show 제거
    tabCnts.forEach((tabCnt) => {
      tabCnt.classList.remove("show");
    });
    // 현재 클릭이 된 tab-content 순서에 맞는 show 보여주기
    tabCnts[idx].classList.add("show");
  });
});
