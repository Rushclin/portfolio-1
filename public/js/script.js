const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutine = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  cursorDot.style.left = `${clientX}px`;
  cursorDot.style.top = `${clientY}px`;
  cursorOutine.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
