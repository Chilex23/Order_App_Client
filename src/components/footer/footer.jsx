import { useSelector } from "react-redux";
import { selectWidth } from "../../redux/features/screenWidth";

const Footer = () => {
  const width = useSelector(selectWidth);
  return (
    <div className={`py-10 bg-stone-900 text-white flex justify-center ${width > 700 ? "ml-48" : "" }`}>
      <div>
        <p className="text-center">Foodie App</p>
        <p>&copy; Onumaegbu Chima 2022</p>
      </div>
    </div>
  );
};
export default Footer;
