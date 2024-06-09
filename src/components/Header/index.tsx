import React from "react";
import { NavLink, Link } from "react-router-dom";

import { StyledHeader, Container, AuthButton } from "./styles";
import logo from "../../assets/icons/logo-png.svg";
import profile from "../../assets/icons/profile-round-1346-svgrepo-com.svg";
import exam from "../../assets/icons/exam-svgrepo-com.svg";
import { useAuth } from "../../context/auth";
// import userImage from "../../assets/images/user.png";
// import userNoImage from "../../assets/images/user-no-picture.png";

export const Header = () => {
    const { signed, user } = useAuth();
    return (
        <Container>
            <StyledHeader>
                <NavLink to="/" className="height">
                    <img src={logo} alt="Logo" className="logo svg-color" />
                </NavLink>

                {signed ? (
                    <ul>
                        <li>
                            <NavLink to="/perfil">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="nav-item svg-color"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/simulados">
                                <img
                                    src={exam}
                                    alt="Exams"
                                    className="nav-item svg-color"
                                />
                            </NavLink>
                        </li>
                        <li>
                            <div className="user">
                                {/* <img
                                    src={userImage}
                                    alt="photo"
                                    className="user-photo"
                                /> */}
                                <div className="user-info">
                                    <div className="name">{user.name}</div>
                                    <div className="role">{user.role != "PROFESSOR" ? "Estudante" : "Professor"}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <AuthButton>
                        <Link to="/login">
                            <button className="button-login">Login</button>
                        </Link>
                        <Link to="/cadastrar" className="margin-left">
                            <button className="button-register">
                                Cadastrar
                            </button>
                        </Link>
                    </AuthButton>
                )}
            </StyledHeader>
        </Container>
    );
};
