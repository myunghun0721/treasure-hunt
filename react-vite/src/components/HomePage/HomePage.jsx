import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css"
import { thunkFetchAvatars } from "../../redux/avatars";

function HomePage() {
  const dispatch = useDispatch();

  const avatar = useSelector(state => state.avatars.avatars)
  const sessionUser = useSelector((state) => state.session.user);


  useEffect(() => {
    dispatch(thunkFetchAvatars())
  }, [dispatch, sessionUser])

  if (!sessionUser) return <Navigate to="/" />;


  return (
    <>
      <div className="">
        {/* {sessionUser && avatar.id ? (
          <div key={avatar.id} className="div-main-avatar">
            <img src={avatar.backgrounds} className="avatar-image"></img>
            <div className="avatar-container">
              <img src={avatar.extra} className="avatar-image"></img>
              <img src={avatar.skin} className="avatar-image"></img>
              <img src={avatar.hair} className="avatar-image"></img>
              <img src={avatar.body} className="avatar-image"></img>
            </div>
          </div>
        ) :
          <div key={avatar.id} className="div-main-avatar">
            <img src={"../../public/avatar/backgrounds/background_yellow.png"} className="avatar-image"></img>
            <div className="avatar-container">
                <p>No avatar yet</p>
            </div>
          </div>
        }
        <br></br> */}
        <div className="div-daily">
          <h2>Dailies</h2>
          <div>
            <label>
              Daily
            </label>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}

export default HomePage;