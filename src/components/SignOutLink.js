import { googleLogout } from "@react-oauth/google";

function SignOutLink() {
  const handleLogout = (e) => {
    e.preventDefault();
    googleLogout();
  };

  return (
    <a href="#logout" onClick={(e) => handleLogout(e)}>
      logout
    </a>
  );
}

export default SignOutLink;
