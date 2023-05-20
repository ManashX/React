import {useState} from 'react'
import Bird from "./svg/bird.svg";
import Cat from "./svg/cat.svg";
import Cow from "./svg/cow.svg";
import Dog from "./svg/dog.svg";
import Gator from "./svg/gator.svg";
import Horse from "./svg/horse.svg";
import Heart from "./svg/heart.svg";
import './animalShow.css';
const svg = {
    Bird,
    Cat,
    Cow,
    Dog,
    Gator,
    Horse
}
function AnimalShow({type}){

    const [clicks, setClick] = useState(0);
    function handleClick(){
        setClick(clicks + 1);
    }
    return (
        <div onClick={handleClick} className='animal-show'>
        <img src={svg[type] } alt = "animal" className = "animal"></img>
        <img className = "heart" src = {Heart} alt = "heart" style = {{width : 10 + 10 * clicks + 'px'}}></img>
    </div>);
}
export default AnimalShow;