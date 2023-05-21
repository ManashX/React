import { useState } from "react";  

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');

    const handleClick = (event) =>{
        //any time we wire up a event handler on a plane element like 'form', we're always going to have our event handler receive that event object.
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) =>{
        //every single time user changes the input in any way it update our states with whatever value is inside the inputs
        setTerm(event.target.value);
    };
    // The On change event is fired from an input element any time user adds text deletes.
    return(
        <>
        <form onSubmit={handleClick}>
            <input onChange={handleChange}/>
        </form>
        </>
    )
    ;
}
export default SearchBar;