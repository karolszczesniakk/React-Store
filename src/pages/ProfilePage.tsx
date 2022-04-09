import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const authState = useSelector((state: RootState) => state.auth);
  const { isLoggedIn, user } = authState;

  let content;

  if (user) {
    content = (
      <>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </>
    );
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    //setting a timer so app has 0.5s to realise if user is actually logged in
    if (!isLoggedIn) {
      timer = setTimeout(() => { navigate("/home", { replace: true }) }, 150);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      
    };
  }, [isLoggedIn, navigate]);

  return (
    <div className="centered">
      <h1>Users data</h1>
      {content}
    </div>
  );
};

export default ProfilePage;
