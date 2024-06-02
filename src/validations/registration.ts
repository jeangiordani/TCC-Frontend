import * as yup from "yup";

export const registrationSchema = yup
    .object({
        name: yup
            .string()
            .required("Nome é obrigatório")
            .min(3, "Nome deve ter no mínimo 3 caracteres"),
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
        role: yup.string().optional()
    })
    .required();
