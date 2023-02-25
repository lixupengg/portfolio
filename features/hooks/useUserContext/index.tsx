import React, { useContext, createContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

interface UserContext {
    loginWithRedirect: () => void;
    logout: () => void;
    user: any;
    isAuthenticated: boolean;
    isLoading: boolean;
    accessToken: string;
}

const Context = createContext<UserContext>({
    loginWithRedirect: () => {},
    logout: () => {},
    user: {},
    isAuthenticated: false,
    isLoading: false,
    accessToken: "",
});

export const useUserContext = () => useContext(Context);

export const UserContextProvider = ({children}: any) => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = React.useState<string>('');
    React.useEffect(() => {
        const getAccessToken = async () => {
            const token = await getAccessTokenSilently();
            setAccessToken(token);
        }
        if (isAuthenticated) {
            getAccessToken();
        }
    }, [getAccessTokenSilently, isLoading, isAuthenticated]);

	return (
	  <Context.Provider value={{
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        isLoading,
        accessToken
	  }}>
		{children}
	  </Context.Provider>
	);
}