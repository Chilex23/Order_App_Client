export const limitTitle = (str) => {
  let limitedTitle = "";
  for (let word of str.split(" ")) {
    if (limitedTitle.length < 15) {
      limitedTitle += `${word} `;
    } else {
      limitedTitle += "...";
      break;
    }
  }
  return limitedTitle;
};
