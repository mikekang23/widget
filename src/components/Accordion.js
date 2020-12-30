import React, {Fragment, useState} from 'react';
import {onToggleClick} from '../helper/Clicks';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <Fragment key={`item-${item.id}`}>
        <div
          className={`title ${active}`}
          onClick={() => onToggleClick(index, activeIndex, setActiveIndex)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  )
}

export default Accordion;
