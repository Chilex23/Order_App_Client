export const limitTitle = (text, no = 15) => {
  if (text.length <= 15) {
    return text;
  } else {
    return text.substring(0, 15) + "...";
  }
};
