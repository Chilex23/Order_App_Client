export const formatDate = (dateStr) => {
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  let extractedTime = dateStr.slice(11, 16);
  const timeSuffix = extractedTime.split(":")[0] > 12 ? "PM" : "AM";
  let extractedDate = dateStr.slice(0, 10).split("-");
  return `${extractedDate[2]}-${months[extractedDate[1]]}-${
    extractedDate[0]
  } ${extractedTime}${timeSuffix}`;
};
