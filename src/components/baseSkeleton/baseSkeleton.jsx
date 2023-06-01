import { useSelector } from "react-redux";
import { selectWidth } from "../../redux/features/screenWidth";
import BaseSkeletonCard from "./baseSkeletonCard";
import BaseSkeletonFood from "./baseSkeletonFood";
import BaseSkeletonDashboard from "./baseSkeletonDashboard";

const BaseSkeleton = ({ variant = "default" }) => {
  const width = useSelector(selectWidth);
  const handleSetContentVariant = () => {
    let content;
    switch (variant) {
      case "card-grid":
        content = (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 mx-auto sm:mr-7">
            {width < 500 ? (
              <BaseSkeletonCard />
            ) : (
              <>
                <BaseSkeletonCard />
                <BaseSkeletonCard />
                <BaseSkeletonCard />
              </>
            )}
          </div>
        );
        break;
      case "category-grid":
        content = (
          <div className="grid sm2:grid-cols-1 xs:grid-cols-2 tablet:grid-cols-4 gap-5">
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
