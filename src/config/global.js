export const COE_URL = 'https://www.centreofexcellence.com';
export const emailValidation = (email) => {
  const exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let valid = false;
  if (email) {
    valid = exp.test(email);
  }

  return valid;
};
