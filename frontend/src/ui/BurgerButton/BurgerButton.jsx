const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="flex flex-col justify-around p-2 border-0 bg-transparent cursor-pointer h-10 w-10 md:hidden z-30"
    >
      <span
        className={`w-full h-1 bg-main-blue rounded block transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        }`}
      />
      <span
        className={`w-full h-1 bg-main-blue rounded block my-1 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`w-full h-1 bg-main-blue rounded block transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      />
    </button>
  );
};

export default BurgerButton;
