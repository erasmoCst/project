
import { createContext, useContext } from 'react';

import { useState } from 'react';

interface AuthContext {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const useAuth = (): AuthContext => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
};