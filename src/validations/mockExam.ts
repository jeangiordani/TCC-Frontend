import * as yup from "yup";

export const loginSchema = yup
    .object({
        email: yup
            .string()
            .required("Email é obrigatório")
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                "Email inválido",
            ),
    })
    .required();
