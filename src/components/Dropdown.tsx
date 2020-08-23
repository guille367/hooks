import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderOptions = options.filter(option => option.value !== selected.value).map((option: any) => {
    return <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
      {option.label}
    </div>;
  });
  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">Select a color</label>
        <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
          <i className="dropdown icon"></i>
          <div className="text">
            {selected.label}
          </div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.object,
  onSelectedChange: PropTypes.func
};

export default Dropdown;
