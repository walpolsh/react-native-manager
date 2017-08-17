import {
  EMAIL_CHANGED, PASSWORD_CHANGED,
} from '../components/actions/types';

//^importing the action types

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

      //make a new object {} (the curly braces after return...)
      //take all of the properties in my existing state and put them in the object^
      //then define the property email, give it a value action.payload
      //the new value for email will overwrite the old property in the original state.

    default:
      return state;
  }
};
