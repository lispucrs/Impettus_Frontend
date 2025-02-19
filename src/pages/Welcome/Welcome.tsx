import "./Welcome.scss";
import Profile from "../../components/Profile/Profile";
import { GrHp } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import SideBarHeader from "../../components/SideBarHeader/SideBarHeader";

export default function Welcome() {
  console.log(localStorage.getItem("loggedIn"));

  const navigate = useNavigate();
  const handleProjectSelect = (projectName: string) => {
    navigate("/chat", { state: { selectedProject: projectName } });
  };
  return (
    <>
      <SideBarHeader />
      <div className="welcome-container">
        <div className="welcome-text-container">
          <div className="welcome-first">Welcome back,</div>
          <div className="welcome-second">Ben Parker</div>
          {/* <div className="welcome-third">Choose what you want to do</div> */}
        </div>
        {/* <div className="welcome-create-continue-container">
          <div className="welcome-new-project-container">
            <div className="welcome-new-project-text">Create New Project</div>
          </div>
          <div className="welcome-or">or</div>
          <div className="welcome-continue-container">
            <div className="welcome-continue-title">Continue a project</div>
            <div className="welcome-continue-projects-container">
              <div
                className="welcome-continue-project-container"
                onClick={() => handleProjectSelect("Delfos")}
              >
                <div className="welcome-continue-project-name-icon-container">
                  <FaRobot className="welcome-continue-project-icon" />
                  <div className="welcome-continue-project-text">Delfos</div>
                </div>
                <IoArrowForward />
              </div>
              <div
                className="welcome-continue-project-container"
                onClick={() => handleProjectSelect("Nautilus")}
              >
                <div className="welcome-continue-project-name-icon-container">
                  <IoHardwareChipOutline className="welcome-continue-project-icon" />
                  <div className="welcome-continue-project-text">Nautilus</div>
                </div>
                <IoArrowForward />
              </div>
              <div
                className="welcome-continue-project-container"
                onClick={() => handleProjectSelect("Impettus")}
              >
                <div className="welcome-continue-project-name-icon-container">
                  <FaCloud className="welcome-continue-project-icon" />
                  <div className="welcome-continue-project-text">Impettus</div>
                </div>
                <IoArrowForward />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Profile />
    </>
  );
}
