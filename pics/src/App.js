import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App(){
    const [images,setImages] = useState([]);
    const handleSubmit = async (term) => {
        //it is goint to receive some value from the child component
        const result = await searchImages(term);
        setImages(result);
    }
    // passing down handleSubmit as a prop to SearchBar component as onSubmit
    return <div>
        
        <SearchBar onSubmit = {handleSubmit}/>
        <ImageList images = {images}/>
    </div>;
}

export default App;