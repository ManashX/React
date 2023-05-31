import Dropdown from "./components/Dropdown";
import { useState } from "react";   

function App(){
    const [selection, updateSelect] = useState(undefined);
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Yellow', value: 'yellow'},
        {label: 'Blue', value: 'blue'},
    ];
    return <Dropdown options = {options} selection = {selection} onHandleClick = {updateSelect}/>;
}

export default App;