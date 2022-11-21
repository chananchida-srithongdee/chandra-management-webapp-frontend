import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, navigate) => async (dispatch) => {
   try {
      //   const { data } = await api.signIn(formData);

      //   dispatch({ type: AUTH, data });

      navigate.push('/');
   } catch (error) {
      const errMessage = error.response.data;
      console.log(errMessage.cause);
      return errMessage;
   }
};
