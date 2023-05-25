import { useState,useContext } from "react";
import BooksContext from "../context/book";
function BookEdit ({book,onSubmit}){
    const [title, setTitle] = useState(book.title);
    const {updateBookById} = useContext(BooksContext);
    const handleChange = (event)=>{
        setTitle(event.target.value);
    }
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit();
        updateBookById(book.id, title);
    }
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input onChange={handleChange} value={title} className="input">
            </input>
            <button className="button is-primary">Submit</button>
        </form>
    );
}

export default BookEdit;