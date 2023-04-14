// orange 클래스 부착
// tab-버튼0번을 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// tab-버튼0 orange 클래스 부착

// classList.add / remove

// tab-button 찾기

// tab.js ==> 이벤트 버블링 변경
// 이벤트버블링 : 자식에서 발생한 이벤트가 부모로 전달

// 이벤트 대상 (tab-button) => 부모(ul) 에게 이벤트가 전달
const tabParent = document.querySelector(".list");
const tabBtns = document.querySelectorAll(".tab-button");
const tabCnts = document.querySelectorAll(".tab-content");
// tabBtns.forEach((tabBtn) => {
//   tabBtn.addEventListener((e) => {
//     console.log(e.currentTarget.className);
//   });
// });

function tabOpen(idx) {
  tabBtns.forEach((item) => {
    item.classList.remove("orange");
  });
  tabCnts.forEach((tabCnt) => {
    tabCnt.classList.remove("show");
  });
  tabBtns[idx].classList.add("orange");
  tabCnts[idx].classList.add("show");
}

// tabParent.addEventListener("click", (e) => {
//   if (e.target == tabBtns[0]) {
//     tabOpen(0);
//   } else if (e.target == tabBtns[1]) {
//     tabOpen(1);
//   } else {
//     tabOpen(2);
//   }
// });

// data- 이용 : 조건문 안 쓸려고
tabParent.addEventListener("click", (e) => {
  tabOpen(e.target.dataset.id);
});
