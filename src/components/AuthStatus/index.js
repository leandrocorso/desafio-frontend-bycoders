import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import CreateAccountLink from "./CreateAccountLink";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";

const isLogged = false;

function AuthStatus({ className }) {
  const [status, setStatus] = useState("out");

  useEffect(() => {
    const userStatus = isLogged ? "in" : "out";
    setStatus(userStatus);
  }, [isLogged]);

  return (
    <div className={`${className}`}>
      <div className={`${className}--logged-${status}`}>
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
