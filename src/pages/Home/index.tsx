import React from "react";
import { Header } from "../../components/Header";
import { ButtonArea, CardArea, Container, Content } from "./styles";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/Reading glasses-bro.svg";
import { Footer } from "../../components/Footer";

export const Home = () => {
    
    return (
        <>
            <Header />
            <Container>
                <Content>
                    <div className="info">
                        <div className="greetings">
                            <h1 className="welcome">
                                Bem vindo ao Portal Estude e Responda
                            </h1>
                            <p className="info-paragraph">
                                Plataforma projetada para ajudar a estudar. Com
                                uma variedade de questões em diferentes áreas de
                                conhecimento.
                            </p>
                            <ButtonArea>
                                <Link to="/simulados">
                                    <button className="button-colored">
                                        Começar
                                    </button>
                                </Link>
                                <Link to="/recursos" className="margin-left">
                                    <button className="button-uncolored">
                                        Recursos
                                    </button>
                                </Link>
                            </ButtonArea>
                        </div>
                        <div className="image">
                            <img
                                src={homeImage}
                                alt=""
                                className="home-image"
                            />
                        </div>
                    </div>
                </Content>
                <CardArea>
                    <ul className="cards">
                        <li className="card">
                            <h1 className="title">Experiência</h1>
                            <p className="text">
                                Com nossa interface intuitiva, criar e gerenciar
                                estudos nunca foi tão fácil.
                            </p>
                        </li>
                        <li className="card">
                            <h1 className="title">Acessibilidade</h1>
                            <p className="text">
                                Com foco na acessibilidade, garantimos que todos
                                possam utilizar nossa plataforma sem barreiras.
                            </p>
                        </li>
                        <li className="card">
                            <h1 className="title">Variedade de questões</h1>
                            <p className="text">
                                Questões de diversas disciplinas, tudo isso de
                                acordo com a sua preferência
                            </p>
                        </li>
                    </ul>
                </CardArea>
            </Container>
            <Footer />
        </>
    );
};
