// button see more

const btnMoreBox = document.querySelectorAll(".show__more");

btnMoreBox.forEach((btnMore, btnMoreIndex) => {
  btnMore.addEventListener("click", () => {
    const textArray = document.querySelectorAll(".hide__box");

    textArray.forEach((text, textIndex) => {
      if (btnMoreIndex === textIndex) {
        text.classList.toggle("show__box");
      }
    });
  });
});

// btn donut

const btnDonutAll = document.querySelectorAll(".js-btn__modal");

btnDonutAll.forEach((btnDonut) => {
  btnDonut.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    document.querySelector(".popup__none").style.display = "flex";
  });

  const btnClose = document.querySelector(".btn__close");
  btnClose.addEventListener("click", () => {
    document.querySelector(".popup__none").style.display = "none";
    document.body.style.overflow = "auto";
  });
});

// btn copy

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

const btnCopyAll = document.querySelectorAll(".btn__copy");
btnCopyAll.forEach((btnCopy, btnIndex) => {
  btnCopy.addEventListener("click", () => {
    document.querySelector(".pop__copy").style.display = "flex";

    function dissapearText() {
      document.querySelector(".pop__copy").style.display = "none";
    }

    setTimeout(dissapearText, 800);
  });
});
