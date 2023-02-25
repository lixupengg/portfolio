import React, { useContext, createContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

interface UserContext {
    loginWithRedirect: () => void;
    logout: () => void;
    user: any;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const Context = createContext<UserContext>({
    loginWithRedirect: () => {},
    logout: () => {},
    user: {},
    isAuthenticated: false,
    isLoading: false,
});

export const useUserContext = () => useContext(Context);

export const UserContextProvider = ({children}: any) => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

	return (
	  <Context.Provider value={{
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        isLoading,
	  }}>
		{children}
	  </Context.Provider>
	);
}