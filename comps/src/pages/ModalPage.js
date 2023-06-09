import Modal from "../components/modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage(){
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleClose = () =>{
        setIsOpen(false);
    }
    return <div>
        <Button primary onClick={handleClick}>Primary</Button>
        {isOpen && <Modal onClose={handleClose}/>}
    </div>
}

export default ModalPage;