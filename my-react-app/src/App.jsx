import { DisplayDifficulty } from "./Comp/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./MenuList/MenuList";
import s from "./style.module.css";
export function App() {
  return (
    <div>
      <hi>title</hi>
      <div className={s.workspace}>
        <MenuList />

        <DisplayDifficulty difficulty="Low" />
      </div>
    </div>
  );
}
