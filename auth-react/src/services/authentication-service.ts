import axios from 'axios';
import { RegisterDTO } from '../models/registerDTO';
import { User } from '../models/user';
import { LoginDTO } from '../models/loginDTO';
import { selectToken, setError, setToken, setUser } from '../store/slices/auth-slice';
import store from '../store/store';

const dispatch = store.dispatch;
const api = axios.create({ baseURL: '/api/' });
const getHeaders = (token: string | null) => ({
    headers: { Authorization: `Bearer ${token}` }
});


export const register = (dto: RegisterDTO) =>
  api.post<User>('/register', dto);

export const fetchToken = (dto: LoginDTO) =>
  api.post('/login', dto).then(request => {
    const token = request.data;
    dispatch(setToken(token));
    dispatch(setError(null));
  }).catch(error => dispatch(setError(error.message)));

export const logout = () => {
  dispatch(setUser(null));
  dispatch(setToken(null));
}

export const getUserProfile = (token: string) => {
  return api.get('/user', getHeaders(token))
      .then(request => {
        const user = request.data;
        dispatch(setUser(user));
      }).catch(error => dispatch(setError(error.message)));
}

export const login = async (dto: LoginDTO) => {
  await fetchToken(dto);
  const token = selectToken(store.getState());
  if(token){
    await getUserProfile(token);
  }
}