import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAppDispatch } from "../../store";
import { authActions } from "../../store/auth-slice";
import {UserData} from "../../types/UserData";
import Button from "../UI/Button";

const GoogleSignInButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token: string = await user.getIdToken();

      const { uid: id, displayName: name, email } = user;

      const loggedInUser: UserData = {
        id,
        name,
        email,
        token
      };
      dispatch(authActions.login(loggedInUser));
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`${errorCode}: ${errorMessage}`);
    }
  };
  /*const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user);
        const token = await user.getIdToken();

        const { uid: id, displayName: name, email } = user;

        const loggedInUser = {
          id,
          name,
          email,
        };
        dispatch(authActions.login(loggedInUser));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`${errorCode}: ${errorMessage}`);
      });
  };
  */
  return <Button onClick={handleLogin}>Sign in with Google</Button>;
};

export default GoogleSignInButton;
