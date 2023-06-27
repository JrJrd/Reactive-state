import { DisplayDifficulty } from "./Comp/DisplayDifficulty/DisplayDifficulty";
import { MenuListItem } from "./Comp/MenuListItem/MenuListItem";


export function App() {
   
    return <div>
        <MenuListItem difficulty="low" />
       { /*<DisplayDifficulty difficulty="Low"/> */}
    </div>
}