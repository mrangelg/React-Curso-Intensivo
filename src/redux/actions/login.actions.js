import Constans from "./../../utils/Constans";

export const LoginAction = (payload) => {
  return {
    type: Constans.LoginAction,
    payload,
  };
};
