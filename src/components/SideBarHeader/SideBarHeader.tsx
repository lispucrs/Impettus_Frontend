//import { IconButton, InputAdornment, TextField } from "@mui/material";
import "./SideBarHeader.scss";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { LuClipboardList } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import Logo from "../Logo/Logo";
import { FaRobot } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import { GrHp } from "react-icons/gr";
import { SiHp } from "react-icons/si";
import { FaPython } from "react-icons/fa";

interface SideBarHeaderProps {
  onInstructionChange: (instruction: number) => void;
}
export default function SideBarHeader({
  onInstructionChange,
}: SideBarHeaderProps) {
  const changeInstruction = (instructionKey: number) => {
    onInstructionChange(instructionKey);
  };
  // const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // const [modalOpen, setModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setModalOpen((prev) => {
  //     const newState = !prev;
  //     if (onModalStateChange) onModalStateChange(newState);
  //     return newState;
  //   });
  // };

  // const toggleSidebar = () => {
  //   setIsSidebarVisible(!isSidebarVisible);
  // };
  return (
    <>
      <div className="sidebarheader-container">
        <div className="sidebarheader-line-logo-hide">
          <div className="sidebarheader-logo">Prompto</div>
          {/* {isSidebarVisible ? (
            <HiOutlineChevronDoubleLeft
              size={32}
              cursor="pointer"
              className="sidebarheader-hide"
              onClick={toggleSidebar}
            />
          ) : (
            <HiOutlineChevronDoubleRight
              size={32}
              cursor="pointer"
              className="sidebarheader-hide"
              onClick={toggleSidebar}
            />
          )} */}
        </div>

        <div className="sidebarheader-input-container">
          <input
            type="text"
            id="inputField"
            placeholder="Search Project"
            className="sidebarheader-search"
            onKeyDown={(e) => e.key === "Enter"}
          />
          <FaMagnifyingGlass className="sidebarheader-glass" size={19} />
        </div>

        <div className="sidebarheader-quickaccess-container">
          <div className="sidebarheader-quickacess-title">Quick Access:</div>
          <div
            className="sidebarheader-quickacess-new-project-container"
            onClick={() => changeInstruction(1)}
          >
            <AiOutlineFileAdd
              className="sidebarheader-quickacess-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-quickacess-new-project-text">
              New Project
            </div>
            {/* <button onClick={toggleModal}>
              {modalOpen ? "Close Modal" : "Open Modal"}
            </button> */}
          </div>
          <div
            className="sidebarheader-quickacess-new-project-container"
            onClick={() => changeInstruction(2)}
          >
            <LuClipboardList
              className="sidebarheader-quickacess-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-quickacess-new-project-text">
              Define Requirements
            </div>
          </div>
          <div
            className="sidebarheader-quickacess-new-project-container"
            onClick={() => changeInstruction(3)}
          >
            <RiTeamLine
              className="sidebarheader-quickacess-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-quickacess-new-project-text">
              Assemble Team
            </div>
          </div>
        </div>
        <div className="sidebarheader-projects-title">Projects:</div>

        <div className="sidebarheader-projects-container">
          <div className="sidebarheader-projects-new-project-container">
            <FaRobot
              className="sidebarheader-projects-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-projects-new-project-text">
              Delfos
            </div>
            {/* <button onClick={toggleModal}>
              {modalOpen ? "Close Modal" : "Open Modal"}
            </button> */}
          </div>
          <div className="sidebarheader-projects-new-project-container">
            <IoHardwareChipOutline
              className="sidebarheader-projects-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-projects-new-project-text">
              Nautilus
            </div>
          </div>
          <div className="sidebarheader-projects-new-project-container">
            <FaCloud
              className="sidebarheader-projects-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-projects-new-project-text">
              Impettus
            </div>
          </div>
          <div className="sidebarheader-projects-new-project-container">
            <GrHp
              className="sidebarheader-projects-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-projects-new-project-text">
              Lottus
            </div>
          </div>
          {/* <div className="sidebarheader-projects-new-project-container">
            <FaPython
              className="sidebarheader-projects-new-project-icon"
              size={25}
            />
            <div className="sidebarheader-projects-new-project-text">
              FinSmart
            </div>
          </div> */}
        </div>
        <div className="sidebarheader-logo-container">
          <Logo></Logo>
        </div>
      </div>
    </>
  );
}
