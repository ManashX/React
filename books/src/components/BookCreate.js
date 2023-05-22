import { useState } from 'react';    

function BookCreate({onSubmit}){
    // eslint-disable-next-lin
    const [title, setTitle] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(title);
    };
    const handleChange = (event)=>{
        setTitle(event.target.value);
    };
    // eslint-disable-next-line
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