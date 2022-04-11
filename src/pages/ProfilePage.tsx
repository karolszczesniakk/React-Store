import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetOrdersData, getOrdersData } from "../api/api";
import Orders from "../components/Profile/Orders";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { RootState } from "../store";


const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);

  const { sendRequest, status, data: ordersData } = useHttp<GetOrdersData>(getOrdersData);

  const { isLoggedIn, user: userData } = authState;

  let content;

  if (status === "pending") {
    content = <LoadingSpinner />
  }

  if (userData && ordersData && status === "completed") {
    console.log(ordersData);
    content = (
      <>
        <h1>{userData.name}</h1>
        <h1>{userData.email}</h1>
        <Orders orders={ordersData} />
      </>
    );
  }


  useEffect(() => {
    if (userData) {
      sendRequest(userData);
    }
  }, [sendRequest, userData]);

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
      {content}
    </div>
  );
};

export default ProfilePage;
