const BaseSkeletonCard = () => {
  return (
    <div className="w-[22rem] h-[18rem] bg-white rounded-md p-3">
      <div className="w-full h-[7rem] bg-gray-300">&nbsp;</div>
      <div className="w-full h-3 bg-gray-300 mt-2">&nbsp;</div>
      <div className="w-2/4 h-3 bg-gray-300 mt-2">&nbsp;</div>
      <div className="w-3/4 h-5 bg-gray-300 mt-2">&nbsp;</div>
      <div className="flex justify-center mt-4 px-4">
        <div className="w-2/4 h-10 bg-gray-300 mr-4 rounded-md">&nbsp;</div>
        <div className="w-2/4 h-10 bg-gray-300 rounded-md">&nbsp;</div>
      </div>
    </div>
  );
};

export default BaseSkeletonCard;
