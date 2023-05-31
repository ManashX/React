import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
function Accordion({items}){
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (nextIndex)=>{
        if(expandedIndex == nextIndex){
            setExpandedIndex(-1);
        }
        else{
            setExpandedIndex(nextIndex);
        }
        
    };
    const renderedList = items.map(
        (item, index) =>{
            const isExpanded = expandedIndex === index;
            const icon = <span className="text-2xl">{isExpanded? <GoChevronUp/>: <GoChevronDown/>}</span>;
            const content = isExpanded && <div className="border-b p-5">{item.content}</div>;
            return <div key = {item.id}>
                <div onClick={() =>{handleClick(index)}} className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">{item.label}{icon}</div>
                {content}
            </div>;
        }
    );
    return <div className="border-x border-t rounded">
        {renderedList}
    </div>;
}
export default Accordion;