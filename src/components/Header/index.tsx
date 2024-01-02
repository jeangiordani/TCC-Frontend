import React from "react";
import { NavLink } from "react-router-dom";

import { StyledHeader, Container } from "./styles";
import logo from "../../assets/icons/logo-png.svg";
import profile from "../../assets/icons/profile-round-1346-svgrepo-com.svg";
import exam from "../../assets/icons/exam-svgrepo-com.svg";
import userImage from "../../assets/images/user.png";

export const Header = () => {
    return (
        <Container>
            <StyledHeader>
                <NavLink to="/" className="height">
                    <img src={logo} alt="Logo" className="logo svg-color" />
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/">
                            <img
                                src={profile}
                                alt="Profile"
                                className="nav-item svg-color"
                            />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img
                                src={exam}
                                alt="Exams"
                                className="nav-item svg-color"
                            />
                        </NavLink>
                    </li>
                    <li>
                        <div className="user">
                            <img
                                src={userImage}
                                alt="photo"
                                className="user-photo"
                            />
                            <div className="user-info">
                                <div className="name">João da Silva</div>
                                <div className="role">Estudante</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </StyledHeader>
        </Container>
    );
};
