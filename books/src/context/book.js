import axios from 'axios';

import { createContext, useState} from "react";
const BooksContext = createContext();


function Provider({children}){
    const [books, setBooks] = useState([]);

    const fetchBooks = async () =>{
        const response = await axios.get('http://127.0.0.1:3001/books');
        setBooks(response.data);
    };
    const deleteBookById = async (id)=>{
        axios.delete(`http://127.0.0.1:3001/books/${id}`);
        const removeBook = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(removeBook);
    };
    const createBook = async (bookName)=>{
        const response = await axios.post('http://127.0.0.1:3001/books',{
            title: bookName
        });
        const addBook = [...books,
            // {id:Math.round(Math.random() * 9999), title: bookName}
            response.data
        ];
        setBooks(addBook);
    };
    const updateBookById = async(id, newTitle) =>{
        const response = await axios.put( `http://127.0.0.1:3001/books/${id}`,{
            title : newTitle
        });
        //one of the most critical feature...go through the video
        
        const updatedBooks = books.map((book) =>{
            if(book.id === id){
                return {...book,...response.data};
                //response.data was the updated book object that came back from the API.
                //... means take all the different properties out of that object, take all the different key value and add them into this new object right here.
            }
            return book;
        });
        setBooks(updatedBooks);
    }
    const valueToShare = {
        books,
        updateBookById,
        deleteBookById,
        createBook,
        fetchBooks
    };
    
return <BooksContext.Provider value = {valueToShare}>
    {children}
</BooksContext.Provider>
}

export {Provider}; 
export default BooksContext;