// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const btns = document.querySelectorAll(".btn");
const overlay = document.querySelector(".overlay");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.querySelector(btn.dataset.target);
    modal.classList.add("active");
    overlay.classList.add("overlay-active");
  });
});

window.onclick = (e) => {
  if (e.target == overlay) {
    overlay.classList.remove("overlay-active");
    const modals = document.querySelectorAll(".modal");
    modals.forEach((m) => {
      m.classList.remove("active");
    });
  }
};
