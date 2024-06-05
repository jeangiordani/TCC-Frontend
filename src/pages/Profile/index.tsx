import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, ContentContainer, Content } from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { useAuth } from "../../context/auth";
import iconPassed from "../../assets/icons/passed-exam-svgrepo-com.svg"
import iconFailed from "../../assets/icons/failed-exam-svgrepo-com.svg"
import { useFetch } from "../../hooks/useFetch";

type Stats = {
    subject: string;
    correct: number;
    incorrect: number;
}

const Profile = () => {
    const { signed, user, logout } = useAuth();
    const { data, loading, error, refetch } = useFetch("users/stats")
    const [stats, setStats] = React.useState<Stats[] | null>(null)


    const handleLogout = () => {
        logout();
    }

    React.useEffect(() => {
        if (data) {
            const newStats = data.map((stat: Stats) => {
                return {
                    subject: stat.subject,
                    correct: stat.correct,
                    incorrect: stat.incorrect
                }
            }
        )
        setStats(newStats);
        }
    }, [data])
    
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <ContentContainer>
                    <Content >
                        <span className="title-wrapper">
                            <h2 className="title">Perfil</h2>
                        </span>

                        <div className="profile-area" style={{overflowY: "hidden"}} >
                            <div className="commom-info">
                                <div className="user-name">{user.name}</div>
                                <div className="user-role">{user.role != "PROFESSOR" ? "Estudante" : "Professor"}</div>
                            </div>

                            <div className="profile-info">
                                <div className="email-wrapper">
                                    Email: <span>{user.email}</span>
                                </div>
                                {stats && (
                                    <div className="performance">
                                        <h1>Desempenho:</h1>
                                        <div className="cards">
                                            {stats.map((stat) => (
                                            <div className="card" key={stat.subject}>
                                                <div className="img">
                                                    <img src={stat.correct >= stat.incorrect ? iconPassed : iconFailed} alt="" 
                                                    className={"icon " + (stat.correct >= stat.incorrect ? "filter-passed" : "filter-failed")} />
                                                </div>
                                                <div className="info">
                                                    <h1 className="area">{stat.subject}</h1>
                                                    <div className="numbers">
                                                        <span className="label">Acertos: <h3 className="best">{stat.correct}</h3></span>
                                                        <span className="label">Erros: <h3 className="worst">{stat.incorrect}</h3></span>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
