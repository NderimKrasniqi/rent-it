import React from 'react';
import { IUser } from '../interfaces/IUser';

interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  setUser: () => {},
});

export default AuthContext;
