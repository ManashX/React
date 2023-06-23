import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import { deleteUser } from "../store";

function UserListItem({user}){

    const [doDeleteUser, deletingUser, error] = useThunk(deleteUser);
    const handleDeleteClick = () =>{
        doDeleteUser(user);
    }
    return <div key={user.id} className="mb-2 border rounded">
    <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button onClick={handleDeleteClick} loading={deletingUser}><GoTrashcan/></Button>
        
        {error && <div>Error</div>}
      {user.name}
    </div>
  </div>;
}
export default UserListItem;