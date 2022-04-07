import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAppDispatch } from "../../store";
import { authActions } from "../../store/auth-slice";
import Button from "../UI/Button";


const GoogleSignInButton: React.FC = () => {
  const dispatch = useAppDispatch();
     const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        let token;
        if (credential) {
          token = credential.accessToken;
        } else {
          throw new Error("Error with authentication")
        }

        const user = result.user;
        const { uid: id, displayName: name, email } = user;

        const loggedInUser = {
          id,
          name,
          email
        }
        dispatch(authActions.login(loggedInUser));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`${errorCode}: ${errorMessage}`);
      });
  };
  return <Button onClick={handleLogin}>Sign in with Google</Button>
}

export default GoogleSignInButton;