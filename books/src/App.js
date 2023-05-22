import { useState } from "react";
import BookCreate from './components/BookCreate'

function App(){
    const [books, setBooks] = useState([]);
    const handleSubmit = (bookName)=>{
        console.log('Here it is: ', bookName);
    };
    return (<div>
        <BookCreate onSubmit = {handleSubmit}/>
    </div>)
}
export default App;