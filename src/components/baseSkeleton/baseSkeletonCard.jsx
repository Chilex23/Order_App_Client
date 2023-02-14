const BaseSkeletonCard = () => {
  return (
    <div className="min-w-24 h-[18rem] bg-white rounded-md p-3">
      <div className="w-full h-[7rem] bg">&nbsp;</div>
      <div className="w-full h-3 bg mt-2">&nbsp;</div>
      <div className="w-2/4 h-3 bg mt-2">&nbsp;</div>
      <div className="w-3/4 h-5 bg mt-2">&nbsp;</div>
      <div className="flex justify-center mt-4 px-4">
        <div className="w-2/4 h-10 bg mr-4 rounded-md">&nbsp;</div>
        <div className="w-2/4 h-10 bg rounded-md">&nbsp;</div>
      </div>
    </div>
  );
};

export default BaseSkeletonCard;
