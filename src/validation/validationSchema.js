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

export const registerValidation = yup
    .object({
        name: yup
            .string()
            .required('Name is required.')
            .min(3, 'Name must be at least 3 characters.')
            .max(50, 'Name cannot exceed 50 characters.'),

        email: yup
            .string()
            .required('Email is required.')
            .email('Please provide a valid email address.'),

        password: yup
            .string()
            .required('Password is required.')
            .min(8, 'Password must be at least 8 characters long.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
            ),

        confirmPassword: yup
            .string()
            .required('Please confirm your password.')
            .oneOf([yup.ref('password')], 'Passwords must match.'),
    })
    .required();

export const loginValidation = yup
    .object({
        email: yup
            .string()
            .required('Email is required.')
            .email('Please provide a valid email address.'),

        password: yup
            .string()
            .required('Password is required.')
            .min(8, 'Password must be at least 8 characters long.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
            ),
    })
    .required();