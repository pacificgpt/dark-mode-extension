(() => {
    const existingStyle = document.getElementById("dark-mode-style");

    if (existingStyle) {
        existingStyle.remove();
    } else {
        const darkModeStyle = document.createElement("style");
        darkModeStyle.id = "dark-mode-style";
        darkModeStyle.innerHTML = `
        html {
          filter: invert(1) hue-rotate(180deg);
          background-color: #000 !important;
        }
        img, video {
          filter: invert(1) hue-rotate(180deg);
        }
      `;
        document.head.appendChild(darkModeStyle);
    }
})();
