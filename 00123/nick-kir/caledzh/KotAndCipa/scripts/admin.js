document.addEventListener("DOMContentLoaded", () => {
  let currentCategory = null;

  const mainButtons = document
    .querySelector(".list-main")
    .querySelectorAll("button");
  const staffButton = mainButtons[0];
  const shiftButton = mainButtons[1];
  const staffContent = document.querySelector(".list-staff");
  const shiftContent = document.querySelector(".list-shift");

  staffButton.addEventListener("click", (e) => {
    currentCategory = "staff";
    changeCategoryState(currentCategory);
  });

  shiftButton.addEventListener("click", (e) => {
    currentCategory = "shift";
    changeCategoryState(currentCategory);
  });

  function changeCategoryState(newState) {
    console.log(newState);
    switch (newState) {
      case "staff":
        staffButton.classList.add("button-active");
        staffContent.style.display = "block";
        shiftButton.classList.remove("button-active");
        shiftContent.style.display = "none";
        break;
      case "shift":
        staffButton.classList.remove("button-active");
        staffContent.style.display = "none";
        shiftButton.classList.add("button-active");
        shiftContent.style.display = "block";
        break;
      default:
        staffButton.classList.remove("button-active");
        staffContent.style.display = "none";
        shiftButton.classList.remove("button-active");
        shiftContent.style.display = "none";
        break;
    }
  }

  changeCategoryState(currentCategory);
});

document.addEventListener("DOMContentLoaded", () => {
  const staffContent = document.querySelector(".list-staff");
  const shiftContent = document.querySelector(".list-shift");
  const layoffBtn = staffContent.querySelector("#layoff");
  const regBtn = staffContent.querySelector("#reg");
});
