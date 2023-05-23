import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from "./components/BookList";


function App(){
    const [books, setBooks] = useState([]);
    const deleteBookById = (id)=>{
        const removeBook = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(removeBook);
    };
    const handleSubmit = (bookName)=>{
        const addBook = [...books,{id:Math.round(Math.random() * 9999), title: bookName}];
        setBooks(addBook);
    };
    const updateBookById = (id, newTitle) =>{
        const updatedBooks = books.map((book) =>{
            if(book.id === id){
                return {...book,title: newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    return (<div className="app">
        <h1>Reading List</h1>
        <BookList books = {books} onDelete = {deleteBookById} onEdit = {updateBookById}/>
        <BookCreate onSubmit = {handleSubmit}/>
    </div>)
}
export default App;