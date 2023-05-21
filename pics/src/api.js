import axios from 'axios';

const searchImages = async(term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID Lxf5Y3kbf8ua9ZX2Fe-3uRzix145KmG6cycnLJZat54'
        },
        params:{
            query: term
        }
    });
    return response.data.results;

}
export default searchImages;