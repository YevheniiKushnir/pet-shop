import { Link } from "react-router-dom";
import clsx from "clsx";

const CrumbButton = ({ children, to, isLast }) => {
  return (
    <Link
      to={to}
      className={clsx(
        "transition-colors flex items-center justify-center border border-light-grey rounded-md py-2 px-4 w-fit whitespace-nowrap hover:bg-secondary-grey active:bg-light-grey",
        {
          "text-main-black pointer-events-none": isLast,
          "text-main-grey pointer-events-auto": !isLast,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default CrumbButton;
