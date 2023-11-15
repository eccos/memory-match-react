import { useState } from "react";
import { Input, Label } from "reactstrap";

const GridSizeSelector = ({
  gridData,
  onGridSizeSelectorChange,
  selectedGridSize,
}) => {
  function handleChange({ target: { value } }) {
    const selectedOption = JSON.parse(value);
    onGridSizeSelectorChange(selectedOption);
  }

  return (
    <span>
      <Label for="grid-size-selector" className="d-inline">
        Grid Size
      </Label>
      <Input
        type="select"
        value={JSON.stringify(selectedGridSize)}
        className="d-inline mx-2"
        style={{ width: "auto" }}
        onChange={handleChange}
        id="grid-size-selector"
        name="grid-size-selector"
        alt="grid size selector"
      >
        {gridData.map((grid) => {
          const { row, col } = grid;
          return (
            <option
              key={`${row}x${col}`}
              value={JSON.stringify(grid)}
            >{`${row} x ${col}`}</option>
          );
        })}
      </Input>
    </span>
  );
};

export default GridSizeSelector;
