import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();
function NavigationProvider({children}){
    // 1. We need this current path piece of state to have a default value when it is first declared
    // its default value that we pass into needs to be whatever the current path is, whatever path the user navigated to. 
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(()=>{
        // 2. Whenever the user navigates around by using those back and forward buttons, the handler is going to be called.
        const handler = () =>{
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        return () =>{
            window.removeEventListener('popstate', handler);
        }
    }, []);
    const navigate = (to) =>{
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };
    return (<NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
    );   
}

export {NavigationProvider};
export default NavigationContext;