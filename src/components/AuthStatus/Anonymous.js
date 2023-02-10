import CreateAcountLink from "../CreateAccountLink";
import SignInLink from "../SignInLink";

function Anonymous() {
  return (
    <div className="auth__logged--out">
      <CreateAcountLink /> or <SignInLink />
    </div>
  );
}

export default Anonymous;
