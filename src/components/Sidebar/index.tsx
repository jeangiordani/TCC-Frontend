import { Sidebar as StyledSidebar } from "./styles";
import { BackButton } from "../BackButton";
import { NavLink } from "react-router-dom";

import mockExamIcon from "../../assets/icons/exam-svgrepo-com.svg";
import profileIcon from "../../assets/icons/profile-round-1346-svgrepo-com.svg";
import dashboardIcon from "../../assets/icons/dashboard-alt-svgrepo-com.svg";
import { useAuth } from "../../context/auth";

export const Sidebar = () => {
    const { user } = useAuth();

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
                    {user.role === "ADMIN" && ( 
                        <a href="http://localhost:8000/admin/login" target="_blank" className="link">
                            <img src={dashboardIcon} alt="" className="icon" />
                            Dashboard
                        </a>
                    )}
                </li>
            </ul>
        </StyledSidebar>
    );
};
