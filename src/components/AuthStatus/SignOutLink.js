import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";

import { setAccessToken } from "../../redux/userSlice";

function SignOutLink() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    dispatch(setAccessToken(null));
    googleLogout();
  };

  return (
    <a href="#logout" onClick={(e) => handleLogout(e)}>
      logout
    </a>
  );
}

export default SignOutLink;
