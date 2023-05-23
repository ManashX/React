import BookShow from './BookShow';
function BookList({books, onDelete, onEdit}){
    const renderedList = books.map((book)=>{
        return <BookShow key = {book.id} book = {book} onDelete = {onDelete} onEdit={onEdit}/>
    });
    return <div className="book-list">{renderedList}</div>;
}

export default BookList;