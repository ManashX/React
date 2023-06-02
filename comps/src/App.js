import Link from "./components/link";
import Route from "./components/route";

import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
function App(){
    return (<div>
        <Link to='accordion'>Go to Accordion</Link>
        <Link to='dropdown'>Go to drop</Link>
        <div>
            <Route path='/accordion'>
                <AccordionPage/>
            </Route>
            <Route path='/dropdown'>
                <DropdownPage/>
            </Route>
        </div>
    </div>);
}

export default App;