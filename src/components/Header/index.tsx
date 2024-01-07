import React from "react";
import { NavLink, Link } from "react-router-dom";

import { StyledHeader, Container, AuthButton } from "./styles";
import logo from "../../assets/icons/logo-png.svg";
import profile from "../../assets/icons/profile-round-1346-svgrepo-com.svg";
import exam from "../../assets/icons/exam-svgrepo-com.svg";
import userImage from "../../assets/images/user.png";
// import userNoImage from "../../assets/images/user-no-picture.png";

export const Header = () => {
    const [isAuth, setIsAuth] = React.useState<boolean>(false);
    return (
        <Container>
            <StyledHeader>
                <NavLink to="/" className="height">
                    <img src={logo} alt="Logo" className="logo svg-color" />
                </NavLink>

                {isAuth ? (
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
                            <NavLink to="/simulado">
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
