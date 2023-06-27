import { useState } from "react";
import s from "./style.module.css";
export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  function activate() {
    setIsHover(true);
  }

  function deactivate() {
    setIsHover(false);
  }

  console.log("Is hovered? ", isHovered);

  function getBackgoundColor(){
    if(isHovered) {
        return "#a5e9ff"
    } else {
        return "#eff0ef"
    }
  }
  return (
    <div
    className={s.container}
    onMouseEnter={activate} onMouseLeave={deactivate}
        style={{backgroundColor: getBackgoundColor()}}
 
    >
      Set to: {props.difficulty}
    </div>
  );
};
