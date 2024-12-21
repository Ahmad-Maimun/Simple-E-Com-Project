import * as yup from "yup";

export const categoryFormSchema = yup
    .object({
        categoryName: yup.string().required(),
        categoryImage: yup.string().required().url(),
    })
    .required();

export const productFormSchema = yup
    .object({
        productName: yup.string().required(),
        productPrice: yup.number().required(),
        productImage: yup.string().required().url(),
    })
    .required();