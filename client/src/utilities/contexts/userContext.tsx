import { createContext, useContext, useReducer, useEffect } from "react"

type AuthUser = {
    firstName: string,
    email: string,
    token: string
}

type UserContextType = {
    state: { user: AuthUser | null },
    dispatch: React.Dispatch<any>,
    userLogout: () => void
}

type UserState = {
    user: AuthUser | null
}
type UserAction = {
    type: string,
    payload: AuthUser | null
}
type UserContextProps = {
    children : React.ReactNode
}

const UserContext = createContext({} as UserContextType);

export const useUserContext = () => {
    return useContext(UserContext);
}

const userReducer = (state: UserState, action: UserAction) => {
    switch(action.type) {
        case 'login':
            return { user: action.payload };
        case 'logout':
            return { user: null }
        default:
            return state;
    }
}


export function UserContextProvider({ children }: UserContextProps) {

const [state, dispatch] = useReducer(userReducer, { user: null })


const userLogout = () => {
    dispatch({type: 'logout', payload: null});
    localStorage.removeItem('user');
}

useEffect(() => {
    const user = localStorage.getItem('user');

    if(user) {
        dispatch(
            {
                type: 'login',
                payload: JSON.parse(user)
            }
        )
    }
}, [])
console.log(state)

  return (
    <UserContext.Provider value={{state, dispatch, userLogout}}>
        { children }
    </UserContext.Provider>
  )
}

