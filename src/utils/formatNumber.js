export const formatNumber = (num) => {
  let number = num;
  if (typeof num === "string") {
    number = Number(num.replaceAll(",", ""));
  }

  let value = number.toLocaleString(undefined, { minimumFractionDigits: 0 });
  return value;
};
