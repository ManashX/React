import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";
function Link({to, children, className}){
    const {navigate , currentPath} = useContext(NavigationContext);

    // Whenever we show our link component, we're going to allow other developers to give us a class name prop
    const classes = classNames('text-blue-500',
        className
        // So now whenever some other developer uses our link component, they can easily add in some additional class name prop
    );
    const handleClick = (event) =>{

        if(event.ctrlKey || event.metaKey){

            //Instead, we want to allow the browser to handle the navigation event as usual and attempt to open up a new tab
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return <a className={classes} href={to} onClick={handleClick} >{children}</a>;
}
export default Link;