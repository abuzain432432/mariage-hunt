import * as yup from 'yup';

import { SignupData, LoginData } from '@/types/types';

function basicString(errorMsg: string) {
  return yup
    .string()
    .required(errorMsg)
    .matches(/^([^0-9]*)$/, errorMsg);
}

export function validateEmail(errorMsg: string) {
  return {
    email: yup
      .string().required(errorMsg)
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        errorMsg
      ),
  };
}

export function validatePassword(errorMsg: string) {
  return {
    password: yup.string().required(errorMsg),
  };
}

export function validatePassConfirm(errorMsg: string) {
  return {
    passwordConfirm: yup.string().required(errorMsg),
  };
}

export function validateFirstName(errorMsg: string) {
  return {
    firstName: basicString(errorMsg),
  };
}
export function validateLastName(errorMsg: string) {
  return {
    lastName: basicString(errorMsg),
  };
}
export function loginFormValidationSchema(errorMsgs: {
  email: string;
  password: string;
}): yup.Schema<LoginData> {
  return yup.object().shape({
    ...validatePassword(errorMsgs.password),
    ...validateEmail(errorMsgs.email),
  });
}
// singupFormValidationSchema

export function singupFormValidationSchema(errorMsgs: {
  firstName: string;
  email: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
}): yup.Schema<SignupData> {
  return yup.object().shape({
    ...validatePassword(errorMsgs.password),
    ...validateEmail(errorMsgs.email),
    ...validateFirstName(errorMsgs.firstName),
    ...validateLastName(errorMsgs.lastName),
    ...validatePassConfirm(errorMsgs.passwordConfirm),
  });
}
