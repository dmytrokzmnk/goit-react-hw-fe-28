import { useEffect } from "react";
export default (arr, loader) => {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [arr, loader]);
};
