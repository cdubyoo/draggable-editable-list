import React, { useState } from "react";

export const Dropdown = ({
    options
  }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    return (
        <select
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}>
          {options.map(o => (
            <option>{o}</option>
          ))}
        </select>
    );
  };