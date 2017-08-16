export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text, //the text the user typed into the form
  };
};
