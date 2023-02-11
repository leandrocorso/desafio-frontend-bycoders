import { useGoogleLogin } from "@react-oauth/google";

function SignInLink() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <a href="#login" onClick={(e) => handleLogin(e)}>
      Sign-in
    </a>
  );
}

export default SignInLink;
