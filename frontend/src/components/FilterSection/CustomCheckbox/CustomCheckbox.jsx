import clsx from "clsx";

const CustomCheckbox = ({ label, checked = false, onChange }) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="absolute opacity-0 w-0 h-0"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div
          className={clsx(
            "w-5 h-5 border rounded flex items-center justify-center transition-colors",
            checked
              ? "bg-main-blue border-main-blue"
              : "bg-main-white border-light-grey"
          )}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-main-white"
              viewBox="0 0 12 9"
              fill="none"
            >
              <path
                d="M1 4.5L4.5 8L11 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-main-black">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
