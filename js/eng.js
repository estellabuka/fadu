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
    document.querySelector(".popup__none").style.display = "flex";
    document.querySelector("body").classList.add("lock");
  });

  const btnClose = document.querySelector(".btn__close");
  btnClose.addEventListener("click", () => {
    document.querySelector(".popup__none").style.display = "none";
    document.querySelector("body").classList.remove("lock");
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
    function dissapearText() {
      document.querySelector(".swal2-container").style.display = "none";
    }

    setTimeout(dissapearText, 800);

    Swal.fire({
      position: "center",
      title: "Copied",
      background: "transparent",
      color: "#EBE8E7",
      showConfirmButton: false,
      backdrop: `
        rgba(0, 0, 0, 0.7)
      `,
    });

    const titleAlert = document.querySelector(".swal2-title");
    titleAlert.style.fontSize = "16px";
    titleAlert.style.fontWeight = "400";
  });
});
