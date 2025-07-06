import { Link } from "react-router-dom";
import clsx from "clsx";

const Button = ({ children, to, className, onClick }) => {
  const baseClasses =
    "w-full cursor-pointer bg-main-blue text-main-white rounded-md flex items-center justify-center border border-main-blue hover:bg-main-black hover:border-main-black transition-colors duration-300 active:border-main-black active:bg-main-white active:text-main-black py-4";

  if (to) {
    return (
      <Link to={to} className={clsx(baseClasses, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
    </button>
  );
};

export default Button;
