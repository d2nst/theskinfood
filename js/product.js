// product.html - 상세페이지 펼쳐보기
window.onload = function () {
  // 초기 이미지 높이 설정

  const detail = document.querySelector('.detail');
  detail.style.height = '900px';

  // 상세보기 버튼 클릭 시 이미지 높이 전체/1000px로 설정
  document.querySelector('.btn-open').addEventListener('click', function (e) {
    e.preventDefault();
    const detail = document.querySelector('.detail');
    const currentHeight = parseInt(window.getComputedStyle(detail).height);
    const newHeight =
      currentHeight === 900
        ? parseInt(
            window.getComputedStyle(detail.querySelector('.content')).height
          )
        : 1000;
    detail.style.transition = 'height 0.5s ease-in-out';
    detail.style.height = newHeight + 'px';

    const scrollY = window.scrollY;
    window.scrollTo(0, scrollY);
  });
};

// product.html - rating__bar
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach((progressBar) => {
  const targetRate = progressBar.getAttribute('data-num');
  const progressValue = progressBar.querySelector('.progress-value');
  progressValue.style.width = `${targetRate}%`;
});
