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
        password: yup
            .string()
            .required("Senha é obrigatória")
            .min(8, "Senha deve ter no mínimo 8 caracteres"),
    })
    .required();
