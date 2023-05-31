import { useState , useEffect, useRef} from "react";
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panel";

function Dropdown({options, selection, onHandleClick}){
    const [isOpen, setDropDown] = useState(false);
    const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if(!divEl.current.contains(event.target)){
        setDropDown(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
    const handleClick = () =>{
        setDropDown(!isOpen);
    };
    const selectOption = (option)=>{
        setDropDown(false);
        onHandleClick(option);
    };
    const renderedOptions = options.map((option) =>{
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key = {option.value} onClick={() =>{selectOption(option)}}>
            {option.label}
        </div>
    });
    
    return <div ref={divEl} className="w-48 relative"><Panel onClick = {handleClick} className="flex justify-between items-center cursor-pointer">{selection?.label || 'Select'} <GoChevronDown className="text-lg"/></Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>;
}

export default Dropdown;
