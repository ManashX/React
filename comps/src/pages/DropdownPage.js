import Dropdown from "../components/Dropdown";
import { useState } from "react";   

function DropdownPage(){
    const [selection, updateSelect] = useState(undefined);
    const handleSelect = (option)=>{
        updateSelect(option);
    };
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Yellow', value: 'yellow'},
        {label: 'Blue', value: 'blue'},
    ];
    return <Dropdown options = {options} selection = {selection} onHandleClick = {handleSelect}/>;
}

export default DropdownPage;