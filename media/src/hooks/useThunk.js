
import { useCallback, useState} from "react";
import { useDispatch } from "react-redux";
function useThunk(thunk){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
  
    const runThunk = useCallback((arg) =>{
        setError(null);
      setIsLoading(true);
      // this arg thing to a hell lot of time to debugg
      dispatch(thunk(arg))
      .unwrap()
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
    },[dispatch, thunk]);
    return [runThunk, isLoading,error];
  }
  export {useThunk};