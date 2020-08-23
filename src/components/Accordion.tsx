import React, { useState } from "react";
import PropTypes from "prop-types";

function Accordion(props: any) {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const onItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const renderedItems = props.items.map((item: any, index: number) => (
    <React.Fragment key={item.title}>
      <div>
        <div
          className={`title ${index === selectedItem ? "active" : ""}`}
          onClick={() => onItemClick(index)}
        >
          <i className="dropdown icon"></i> {item.title}
        </div>
        <div className={`content ${index === selectedItem ? "active" : ""}`}>
          <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
        </div>
      </div>
    </React.Fragment>
  ));
  return <div className="ui styled accordion">{renderedItems}</div>;
}

Accordion.propTypes = {
  items: PropTypes.array,
};

export default Accordion;
