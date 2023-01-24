import { AiOutlineSearch } from "react-icons/ai";

const DashboardHeader = () => {
  const greeting = (timeString) => {
    let splittedTimeString = timeString.split(":");
    let period;
    if (/AM/i.test(timeString)) {
      period = "Good Morning";
    } else if (
      /PM/i.test(timeString) &&
      Number(splittedTimeString[0]) % 12 >= 0 &&
      Number(splittedTimeString[0]) % 12 <= 4
    ) {
      period = "Good Afternoon";
    } else {
      period = "Good Evening";
    }
    return period;
  };
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-y-5 items-center border-b-2 border-gray-400 pb-5">
      <span className="text-xl font-semibold">
        {greeting(new Date().toLocaleTimeString())}, Chilex24
      </span>
      <span className="relative z-0">
        <AiOutlineSearch className="absolute top-3 left-1 text-2xl" />
        <input
          type="search"
          className="border-black border-[1px] sm2:w-[18rem] w-[24rem] h-12 pl-8 rounded-md mr-4 focus:border-green-600 focus-visible:border-green-600"
          placeholder="Search for food items"
        />
      </span>
      <div className="flex flex-col border-l-2 border-gray-400 pl-4">
        <div className="flex items-center">
          <span className="bg-gradient-to-r from-green-400 to-green-600 flex justify-center items-center text-2xl text-white font-semibold w-10 h-10 mr-4 rounded-full">
            C
          </span>
          <span className="font-bold">Onumaegbu Chima</span>
        </div>
        <span>yahoo@gmail.com</span>
      </div>
    </div>
  );
};

export default DashboardHeader;
