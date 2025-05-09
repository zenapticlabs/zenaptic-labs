// src/hooks/useTheme.js
import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    document.body.style.transition =
      "background-color 0.5s ease-in-out, color 1s ease-in-out";
    const allImages = document.getElementsByClassName("toggle-image");
    if (allImages) {
      Array.from(allImages).forEach((icon) => {
        if (icon.src) {
          let src = icon.src.substring(icon.src.indexOf("/assets/"));
          let srcImage =
            theme === "dark" && src.includes("-light")
              ? src.replace("-light", "-dark")
              : src.replace("-dark", "-light");
          icon.src = icon.src.replace(icon.src, srcImage);
        }
      });
    }

  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
