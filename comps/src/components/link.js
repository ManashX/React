import { useContext } from "react";
import NavigationContext from "../context/navigation";


function Link({to, children}){
    const {navigate} = useContext(NavigationContext);
    //1. to is going to be the path that we're going to navigate to whenever a user clicks on this thing.
    //2. Children is going to be some text that we want to show inside of the anchor element.
    //3. the entire goal of the link function is to make sure that clicking on an anchor element does not trigger a total page refresh.
    const handleClick = (event) =>{
        event.preventDefault();
        navigate(to);
    }
    //we created a function to allow us developers to programmatically navigate around the application.
    return <a onClick={handleClick} >{children}</a>;
}
export default Link;