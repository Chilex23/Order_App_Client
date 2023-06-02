import { useSelector } from "react-redux";
import { selectWidth } from "../../redux/features/screenWidth";

const Footer = () => {
  const width = useSelector(selectWidth);
  return (
    <div
      className={`text-sm sm:text-base py-10 bg-stone-900 text-white flex flex-col tablet:flex-row sm2:items-center gap-y-4 justify-center gap-x-20 px-6 ${
        width > 700 ? "ml-48" : ""
      }`}
    >
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Become a Partner</li>
      </ul>

      <ul>
        <span className="block mb-2 font-semibold">Cities</span>
        <li>Lagos</li>
        <li>Abuja</li>
        <li>Ibadan</li>
        <li>Port Harcourt</li>
        <li>Lekki Phase 1</li>
        <li>Victoria Island</li>
      </ul>
      <div>
        <p className="text-center font-rubik text-3xl">Foodie App</p>
        <p>&copy; Onumaegbu Chima {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
export default Footer;
