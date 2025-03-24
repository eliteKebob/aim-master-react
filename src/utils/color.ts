export const colorKeywordToRGB = (
  colorKeyword: string,
  alpha: string | null = null
) => {
  let el = document.createElement("div");
  el.style.color = colorKeyword;
  document.body.appendChild(el);
  let rgbValue = window.getComputedStyle(el).color;
  document.body.removeChild(el);

  if (alpha) {
    return rgbValue.replace("rgb", "rgba").replace(")", `, ${alpha})`);
  }

  return rgbValue;
};
