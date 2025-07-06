const CartBadge = ({ children }) => {
  return (
    <div className="relative group inline-block cursor-pointer">
      {children}

      <span className="absolute top-1.5 left-0 bg-main-blue text-main-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
        {3 + 1}
      </span>
    </div>
  );
};

export default CartBadge;
