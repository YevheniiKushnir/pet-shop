import React from "react";

const Input = React.memo(({ message = null, ...rest }) => {
  return (
    <div>
      <input
        {...rest}
        className="border border-main-white px-8 py-4 outline-none rounded-md text-main-white placeholder-main-white w-full"
      />
      <div className="min-h-4">
        {message && (
          <p className="flex items-center rounded-md bg-red-900/20 px-4 py-2 text-xs text-red-400 h-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
});

export default Input;
