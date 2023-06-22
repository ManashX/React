import { useEffect , useState} from "react";
import { useDispatch , useSelector} from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./skeleton";

function UserList(){

    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [LoadingUsersError, setLoadingUserError] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() =>{
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            .catch((err) =>{
                setLoadingUserError(err);
            })
            .finally(() =>{
                setIsLoadingUsers(false);
            })
    },[dispatch]);


  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
    .unwrap()
    .catch((err) =>{
        setCreatingUserError(err);
    })
    .finally(() =>{
        setIsCreatingUser(false);
    })
  };


    const {data} = useSelector((state,action) =>{
        return state.users; //{data:[], isLoading: false, error: null}
    })
    if(isLoadingUsers){
        return <Skeleton times={6} className="h-10 w-full" />
    }
    if(LoadingUsersError){
        return <div>Error</div>
    }
    const renderedUsers = data.map((user) => {
        return (
          <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
              {user.name}
            </div>
          </div>
        );
      });
    
      return (
        <div>
          <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            {isCreatingUser ? 'Creating user.': <Button onClick={handleUserAdd}>+ Add User</Button>}
            {creatingUserError && 'Error'}
          </div>
          {renderedUsers}
        </div>
          );
      
}

export default UserList;