import { useState } from "react";
import "./GridListSwitch.css";
import { HiOutlineViewList } from "react-icons/hi";
import { BsFillGridFill } from "react-icons/bs";

const GridListSwitch = () => {
  const [isGrid, setGrid] = useState(true);

  const handleClickGrid = () => {
    if (isGrid) return;

    setGrid(!isGrid);
  };

  const handleClickList = () => {
    if (!isGrid) return;
    setGrid(!isGrid);
  };

  return (
    <div className="switch--container">
      <div className={`slider ${isGrid ? "grid__on" : "grid__off"}`}>
        <div className="box" onClick={() => handleClickGrid()}>
          <BsFillGridFill className="icon" />
          <h4 className="title">Grid</h4>
        </div>
      </div>
      <div className={`slider ${isGrid ? "list__off" : "list__on"}`}>
        <div className="box" onClick={() => handleClickList()}>
          <HiOutlineViewList className="icon" />
          <h4 className="title">List</h4>
        </div>
      </div>
    </div>
  );
};

export default GridListSwitch;
