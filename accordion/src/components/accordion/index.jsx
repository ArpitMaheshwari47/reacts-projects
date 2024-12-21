import React, { useState } from 'react';
import { accordionData } from './data';
import './style.css';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const onSingleSelection = (getSelectedId) => {
    setSelected(getSelectedId === selected ? null : getSelectedId);
  };

  const onMultiSelection = (selectedId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(selectedId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(selectedId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {'Enable Multi Selection'}
      </button>
      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => onMultiSelection(dataItem.id)
                    : () => onSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h1>{dataItem.title}</h1>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.includes(dataItem.id) ? (
                <div className="content">{dataItem.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

