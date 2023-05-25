import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from "../context/book";

function BookList(){
    const {books} = useContext(BooksContext);
    const renderedList = books.map((book)=>{
        return <BookShow key = {book.id} book = {book}/>
    });
    return <div className="book-list">
        
        {renderedList}</div>;
}

export default BookList;