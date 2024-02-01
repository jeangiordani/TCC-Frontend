import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface CustomModalProps {
    isOpen: boolean;
    closeModal: () => void;
    content: JSX.Element;
    title: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
    isOpen,
    closeModal,
    content,
    title,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                content: {
                    width: "80%",
                    height: "80%",
                    margin: "auto",
                    padding: "0",
                    border: "none",
                    borderRadius: "10px",
                },
            }}
        >
            <div
                className="close"
                style={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 auto",
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        fontSize: "1.3rem",
                        fontFamily: "Roboto-Bold, sans-serif",
                        width: "95%",
                        margin: "auto 0",
                        color: "var(--primary)",
                    }}
                >
                    {title}
                </div>
                <div
                    className="close-button"
                    style={{
                        width: "95%",
                        display: "flex",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                        fontSize: "20px",
                        fontFamily: "Roboto-Bold, sans-serif",
                        color: "var(--secondary)",
                        margin: "auto 0",
                    }}
                    onClick={closeModal}
                >
                    X
                </div>
            </div>
            {content}
        </Modal>
    );
};

export default CustomModal;
