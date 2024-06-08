
import React from "react";
import { Header } from "../../components/Header";
import { Container, ContentWrapper, Table } from "./styles";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../components/Spinner";

// import { useFetch } from "../../hooks/useFetch";

type Resource = {
    id: number;
    name: string;
    type: string;
    subject: string;
    path: string;
}


const Resources = () => {
    const [resources, setResources] = React.useState<Resource[]>([]);
    const { data, loading } = useFetch("/medias");

    React.useEffect(() => {
        if (data) {
            setResources(data);
        }
    }, [data]);
    
    return (
        <>
        <Header/>
        <Container>
        <ContentWrapper>
            <div className="content">
                <div style={{width: "100%"}}>
                    <h1 className="title">Recursos</h1>
                    <p className="subtitle">Aqui você encontra diversos materiais para estudar para os vestibulares</p>
                </div>
            </div>
        </ContentWrapper>
        {loading ? <div style={{height: "200px", marginTop: "10px"}}><Loading size={100} color="var(--primary)"/></div>  : (
        <Table>
            
            <thead>
                <tr>
                    <th className="border-radius-top-left">Nome</th>
                    <th>Tipo de arquivo</th>
                    <th>Disciplina</th>
                    <th className="border-radius-top-right">Download</th>
                </tr>
            </thead>
            <tbody>
                {resources.map((resource) => (
                    <tr key={resource.id}>
                        <td>{resource.name}</td>
                        <td>{resource.type}</td>
                        <td>{resource.subject}</td>
                        <td><a href={resource.path} type="*" download>Download</a></td>
                    </tr>
                ))}
                
            </tbody>
        </Table>
        )}
        </Container>
        </>
    )
};

export default Resources;
