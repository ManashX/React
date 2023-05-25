import { useState } from "react";
import { useContext } from 'react';
import BooksContext from "../context/book";

import BookEdit from "./BookEdit";
function BookShow({book}){
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);
    const deleteBook = ()=>{
        deleteBookById(book.id);
    }
    const editBook = () =>{
        setShowEdit(!showEdit);
    }
    const handleSubmit = () =>{
        setShowEdit(false);
    };
    let content = <p>{book.title}</p>;
    if(showEdit){
        content = <BookEdit book = {book} onSubmit = {handleSubmit}/>
    }
    
    return <>
    <div className="book-show">
        <div>{content}</div>
        <img src = {`https://picsum.photos/seed/${book.id}/300/200`} alt = "photos"/>
    <div className="actions">
        <button className="edit" onClick={editBook}></button>
        <button className="delete" onClick={deleteBook}></button>
    </div>
    </div>
    </>;
}
export default BookShow;