import * as yup from "yup";

const MIN_CHARACTERS_NAME = 3;
const MAX_CHARACTERS_NAME = 20;
const MAX_CHARACTERS_DESC = 100;
const MIN_NUMBER = 1;
const MAX_NUMBER = 90;

export const mockExamSchema = yup
    .object({
        name: yup
            .string()
            .required("Nome é obrigatório")
            .min(
                MIN_CHARACTERS_NAME,
                `Nome deve ter no mínimo ${MIN_CHARACTERS_NAME} caracteres`,
            )
            .max(
                MAX_CHARACTERS_NAME,
                `Nome deve ter no máximo ${MAX_CHARACTERS_NAME} caracteres`,
            ),
        description: yup
            .string()
            .optional()
            .max(
                MAX_CHARACTERS_DESC,
                `Descrição deve ter no máximo ${MAX_CHARACTERS_DESC} caracteres`,
            ),
        quantity: yup
            .number()
            .required("Quantidade é obrigatória")
            .min(MIN_NUMBER, `Quantidade deve ser no mínimo ${MIN_NUMBER}`)
            .max(MAX_NUMBER, `Quantidade deve ser no máximo ${MAX_NUMBER}`),
        disciplineId: yup.number().optional().default(0),
    })
    .required();
