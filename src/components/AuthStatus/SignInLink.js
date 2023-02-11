import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";

import { setAccessToken } from "../../redux/userSlice";

function SignInLink() {
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: (authData) => {
      localStorage.setItem("access_token", authData.access_token);
      dispatch(setAccessToken(authData.access_token));
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    googleLogin();
  };

  return (
    <a href="#login" onClick={(e) => handleLogin(e)}>
      Sign-in
    </a>
  );
}

export default SignInLink;
