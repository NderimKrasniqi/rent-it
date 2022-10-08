import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';
import { IDecodeResponse } from '../interfaces/IDecodeResponse';

const key = 'authToken';

const getUser = async () => {
  const token = await getToken();
  if (!token) {
    return null;
  }
  try {
    const { data, exp } = jwtDecode<IDecodeResponse>(token);

    if (exp) {
      if (Date.now() >= exp * 1000) {
        return null;
      }
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const storeToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log('Could not store the token');
  }
};
const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(key);
    return token;
  } catch (error) {
    console.log('Could not get the token', error);
    return null;
  }
};
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Could not remove the token', error);
  }
};

export default { getUser, removeToken, storeToken };
