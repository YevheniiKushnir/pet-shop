const Title = ({ children, className = "" }) => {
  return (
    <h2
      className={
        "font-bold text-4xl md:text-5xl lg:text-[64px] break-word w-fit " +
        className
      }
    >
      {children}
    </h2>
  );
};

export default Title;
