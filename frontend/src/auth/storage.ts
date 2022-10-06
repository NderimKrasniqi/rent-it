import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';
import { IDecodeResponse } from '../interfaces/JwtDecodeResponse';

const key = 'authToken';

const getUser = async () => {
  const token = await getToken();
  const { data } = jwtDecode<IDecodeResponse>(token!);
  return token ? data : null;
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
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Could not get the token', error);
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
