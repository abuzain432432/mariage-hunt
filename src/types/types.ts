import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LoginData = {
  email?: string;
  password?: string;
};

export type SignupData = {
  firstName?: string;
  email?: string;
  lastName?: string;
  password?: string;
  passwordConfirm?: string;
};

export type ResendOtpType={
  email:string
}

export type TServerError = {
  message?: string;
  stack?: string;
  status?: number;
};

export type ResponseMessage = {
  msg: string;
};

export type User = {
  firstName?: string;
  email?: string;
  lastName?: string;
};

export interface ProfileUpdateData {
  mobile: string;
  email: string;
}

export enum AuthStatus {
  INITIAL_LOADING = 'initial-loading',
  LOGGED_IN = 'logged-in',
  LOGGED_OUT = 'logged-out',
}

export type Url = string;
