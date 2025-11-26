import axios from 'axios';
import { BASE_URL } from '../constants';

interface authUserForm {
  email: string;
  password: string;
}

interface authUserReturn {
  email: string;
  password: string;
  _id: number;
}

interface refreshTokenType {
  refresh: string;
}

interface accessTokenType {
  token: string;
}

type tokenType = accessTokenType & refreshTokenType;

export const authUser = (data: authUserForm): Promise<authUserReturn> => {
  return axios.post(BASE_URL + '/user/login/', data, {
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      'content-type': 'application/json',
    },
  });
};

export const regUser = ({
  email,
  password,
}: authUserForm): Promise<authUserReturn> => {
  return axios.post(
    BASE_URL + '/user/signup/',
    { email, password, username: email },
    {
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    },
  );
};

export const getToken = async ({
  email,
  password,
}: authUserForm): Promise<tokenType> => {
  const res = await axios.post(
    BASE_URL + '/user/token/',
    { email, password },
    {
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    },
  );
  return res.data;
};

export const refreshToken = async (
  refresh: string,
): Promise<tokenType> => {
  const res = await axios.post(
    BASE_URL + '/user/token/refresh/',
    { refresh },
    {
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    },
  );
  return res.data;
};
