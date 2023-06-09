import { useState } from "react";
import Table from "./table";

function SortableTable(props){

    //We do not modify props ever for any reason.
    // when I say add, what I really mean to say here is we are going to map over these column config objects
    const {config, data } = props;

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const handleClick = (label) =>{
        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        else{
            setSortBy(null);
            setSortOrder(null);
        }
    }
    const updatedcontig = config.map( (column) =>{

        if (!column.sortValue) {
            return column;
       }
        return {
        ...column,
        header: () =>{
            return <th onClick={() => {handleClick(column.label)}}>{column.label}</th>;
        }
    }
    });
    
    // Only sort data if sortBy && sortOrder are not null
    // Make a copy of the data prop 
    // find the correct sortValue function and use it for sorting
    let sortedData = data;
    if(sortBy && sortOrder){
        const {sortValue} = config.find(column =>  column.label === sortBy);
        sortedData = [...data].sort((a,b) =>{
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const rev = sortOrder === 'asc'?1:-1;
            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * rev;
            }
            return (valueA - valueB) * rev; 
        })
    }
    
    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} data = {sortedData} config={updatedcontig}/> 
        </div> 
}
export default SortableTable;