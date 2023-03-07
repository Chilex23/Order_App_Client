export const limitTitle = (str, no = 15) => {
  let limitedTitle = "";
  for (let word of str.split(" ")) {
    if (limitedTitle.length < no) {
      limitedTitle += `${word} `;
    } else {
      limitedTitle += "...";
      break;
    }
  }
  return limitedTitle;
};
