import { Sidebar as StyledSidebar } from "./styles";
import { BackButton } from "../BackButton";
import { NavLink } from "react-router-dom";

import mockExamIcon from "../../assets/icons/exam-svgrepo-com.svg";
import profileIcon from "../../assets/icons/profile-round-1346-svgrepo-com.svg";
import dashboardIcon from "../../assets/icons/dashboard-alt-svgrepo-com.svg";

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <BackButton />
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/simulados" className="link">
                        <img src={mockExamIcon} alt="" className="icon" />
                        Simulados
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/perfil" className="link">
                        <img src={profileIcon} alt="" className="icon" />
                        Perfil
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dashboard" className="link">
                        <img src={dashboardIcon} alt="" className="icon" />
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </StyledSidebar>
    );
};
