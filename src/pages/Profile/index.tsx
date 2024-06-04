import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, ContentContainer, Content } from "./styles";
import { Sidebar } from "../../components/Sidebar";

import userImage from "../../assets/images/profile-picture.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
// import userNoImage from "../../assets/images/user-no-picture.png";

const Profile = () => {
    const { signed, user, logout } = useAuth();
    

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <ContentContainer>
                    <Content>
                        <span className="title-wrapper">
                            <h2 className="title">Perfil</h2>
                        </span>

                        <div className="profile-area">
                            <div className="commom-info">
                                {/* <img
                                    src={userImage}
                                    alt=""
                                    className="profile-picture"
                                /> */}
                                <div className="user-name">{user.name}</div>
                                <div className="user-role">{user.role != "PROFESSOR" ? "Estudante" : "Professor"}</div>
                            </div>

                            <div className="profile-info">
                                <div className="email-wrapper">
                                    Email: <span>{user.email}</span>
                                </div>
                                <div className="performance">
                                    <h1>Desempenho:</h1>
                                    <div className="cards">
                                        <div className="card">
                                            <h1 className="area">Filosofia</h1>
                                            <div className="numbers">
                                            <span className="label">Acertos: <h3 className="best">10</h3></span>
                                            <span className="label">Erros: <h3 className="worst">100</h3></span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <h1 className="area">Filosofia</h1>
                                            <div className="numbers">
                                            <span className="label">Acertos: <h3 className="best">10</h3></span>
                                            <span className="label">Erros: <h3 className="worst">100</h3></span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <h1 className="area">Filosofia</h1>
                                            <div className="numbers">
                                            <span className="label">Acertos: <h3 className="best">10</h3></span>
                                            <span className="label">Erros: <h3 className="worst">100</h3></span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <h1 className="area">Filosofia</h1>
                                            <div className="numbers">
                                            <span className="label">Acertos: <h3 className="best">10</h3></span>
                                            <span className="label">Erros: <h3 className="worst">100</h3></span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <h1 className="area">Filosofia</h1>
                                            <div className="numbers">
                                            <span className="label">Acertos: <h3 className="best">10</h3></span>
                                            <span className="label">Erros: <h3 className="worst">100</h3></span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <h1 className="area">Filosofia</h1>
                                            <div className="numbers">
                                            <span className="label">Acertos: <h3 className="best">10</h3></span>
                                            <span className="label">Erros: <h3 className="worst">100</h3></span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <h1 className="area">Filosofia</h1>
                                            <div className="numbers">
                                            <span className="label">Acertos: <h3 className="best">10</h3></span>
                                            <span className="label">Erros: <h3 className="worst">100</h3></span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="link">
                                    <button className="button" onClick={()=> handleLogout()}>Sair</button>
                                </div>
                            </div>
                        </div>
                    </Content>
                </ContentContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Profile;
