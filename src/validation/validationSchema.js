import * as yup from "yup";

export const categoryFormSchema = yup
    .object({
        categoryName: yup.string().required(),
        categoryImage: yup.string().required().url(),
    })
    .required();