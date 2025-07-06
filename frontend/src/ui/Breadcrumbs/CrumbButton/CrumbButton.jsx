import { Link } from "react-router-dom";

const CrumbButton = ({ children, to, isLast }) => {
  return (
    <Link
      to={to}
      className={`transition-colors flex items-center justify-center border border-light-grey rounded-md py-2 px-4 w-fit whitespace-nowrap hover:bg-secondary-grey active:bg-light-grey ${
        isLast ? "text-main-black" : "text-main-grey"
      } `}
    >
      {children}
    </Link>
  );
};

export default CrumbButton;
