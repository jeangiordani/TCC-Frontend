import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, ContentContainer, Content } from "./styles";
import { Sidebar } from "../../components/Sidebar";

const Profile = () => {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <ContentContainer>
                    <Content>
                        <span className="title-wrapper">
                            <h2 className="title">Simulados</h2>
                        </span>
                    </Content>
                </ContentContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Profile;
