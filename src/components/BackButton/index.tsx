import { BackButton as Button } from "./styles";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/back-button.svg";

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(-1)}>
            <img src={backIcon} alt="button" className="svg-color" />
            Voltar
        </Button>
    );
};
