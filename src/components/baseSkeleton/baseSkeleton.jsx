import BaseSkeletonCard from "./baseSkeletonCard";
import BaseSkeletonFood from "./baseSkeletonFood";
import BaseSkeletonDashboard from "./baseSkeletonDashboard";

const BaseSkeleton = ({ variant = "default" }) => {
  const handleSetContentVariant = () => {
    let content;
    switch (variant) {
      case "card-grid":
        content = (
          <div className="grid grid-cols-3 gap-x-12 mr-7">
            <BaseSkeletonCard />
            <BaseSkeletonCard />
            <BaseSkeletonCard />
          </div>
        );
        break;
      case "category-grid":
        content = (
          <div className="grid grid-cols-4 gap-5">
            <BaseSkeletonCard />
            <BaseSkeletonCard />
            <BaseSkeletonCard />
            <BaseSkeletonCard />
            <BaseSkeletonCard />
            <BaseSkeletonCard />
            <BaseSkeletonCard />
            <BaseSkeletonCard />
          </div>
        );
        break;
      case "food-details":
        content = <BaseSkeletonFood />;
        break;
      case "dashboard":
        content = <BaseSkeletonDashboard />;
        break;
      default:
        content = (
          <>
            <BaseSkeletonCard />
          </>
        );
        break;
    }
    return content;
  };

  return <>{handleSetContentVariant()}</>;
};

export default BaseSkeleton;
