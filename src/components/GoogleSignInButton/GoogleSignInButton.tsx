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

  return <Button onClick={handleLogin}>Google Sign-In</Button>;
};

export default GoogleSignInButton;
