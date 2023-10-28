const rippleElements = document.querySelectorAll(".ripple");

rippleElements.forEach(rippleElement => {
  rippleElement.addEventListener("click", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const rippleStyle = `top:${y}px; left:${x}px;`;
    const ripple = document.createElement("span");

    ripple.className = "ripple";
    ripple.style = rippleStyle;

    rippleElement.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});
