import { useState } from "react";
import BookEdit from './BookEdit'
function BookShow({book,onDelete, onEdit}){
    const [showEdit, setShowEdit] = useState(false);
    const deleteBook = ()=>{
        onDelete(book.id);
    }
    const editBook = () =>{
        setShowEdit(!showEdit);
    }
    const handleSubmit = (id, newTitle) =>{
        setShowEdit(false);
        onEdit(id,newTitle);
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