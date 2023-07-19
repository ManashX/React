import { useEffect} from "react";
import {useSelector} from "react-redux";
import { fetchUsers, addUser} from "../store";
import Button from "./Button";
import Skeleton from "./skeleton";
import { useThunk } from "../hooks/useThunk";
import UserListItem from "./UserListItem";


function UserList(){

   
    const [doFetchUsers, isLoadingUsers, isLoadingUsersError] = useThunk(fetchUsers);
    const [doCreateUsers, isCreatingUser, isCreatingUserError] = useThunk(addUser);
    useEffect(() =>{
        doFetchUsers();
    },[doFetchUsers]);


  const handleUserAdd = () => {
      doCreateUsers();
  };
    let content;

    const {data} = useSelector((state,action) =>{
        return state.users; //{data:[], isLoading: false, error: null}
    })
    if(isLoadingUsers){
        content = <Skeleton times={6} className="h-10 w-full" />
    }
    else if(isLoadingUsersError){
        content = <div>Error</div>
    }
    else{
      content = data.map((user) => {
        return (
          <UserListItem key={user.id} user={user}/>
        );
      });
    }
    
      return (
        <div>
          <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
            {isCreatingUserError && 'Error'}
          </div>
          {content}
        </div>
          );
      
}

export default UserList;