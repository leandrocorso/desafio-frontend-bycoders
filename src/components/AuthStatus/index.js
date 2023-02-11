import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUser, setAccessToken } from "../../redux/userSlice";
import CreateAccountLink from "./CreateAccountLink";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";

function AuthStatus({ className }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const tokenStatus = !!accessToken;
    setIsLogged(tokenStatus);
    dispatch(setAccessToken(accessToken || null));
  }, [user.accessToken]);

  return (
    <div className={`${className}`}>
      <div className={`${className}--logged-${isLogged ? "in" : "out"}`}>
        {isLogged ? (
          <SignOutLink />
        ) : (
          <>
            <CreateAccountLink /> or <SignInLink />
          </>
        )}
      </div>
    </div>
  );
}

AuthStatus.propTypes = {
  className: PropTypes.string,
};

AuthStatus.defaultProps = {
  className: "auth-status",
};

export default AuthStatus;
