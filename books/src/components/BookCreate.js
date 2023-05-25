import { useState, useContext } from 'react';    
import BooksContext from '../context/book';
function BookCreate(){
    const {createBook} = useContext(BooksContext);
    const [title, setTitle] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('');
    };
    const handleChange = (event)=>{
        setTitle(event.target.value);
    };
 
    return(
        <div className = "book-create">
            <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            
            <input value={title} onChange={handleChange} className='input'/>
            <button className='button'>Submit</button>
        </form>
        </div>
    )
    ;


}
export default BookCreate;