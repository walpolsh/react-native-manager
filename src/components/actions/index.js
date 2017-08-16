import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text, //the text the user typed into the form
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};
