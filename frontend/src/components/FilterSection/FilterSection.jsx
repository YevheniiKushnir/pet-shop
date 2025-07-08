import { useState } from "react";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";
import CustomSelect from "./CustomSelect/CustomSelect";

const FilterSection = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [sortOption, setSortOption] = useState("by default");

  const sortOptions = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high",
  ];

  return (
    <div className="p-5 max-w-md flex items-center gap-10">
      <div className="mb-6">
        <CustomCheckbox
          label="check box"
          checked={isChecked}
          onChange={setIsChecked}
        />
      </div>

      <div className="flex">
        <p className="text-sm text-main-grey mb-2">sort</p>
        <CustomSelect
          options={sortOptions}
          selectedValue={sortOption}
          onSelect={setSortOption}
        />
      </div>
    </div>
  );
};

export default FilterSection;
