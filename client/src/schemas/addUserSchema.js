import { mixed, object, string } from "yup";
const addUserSchema = object({
    name: string()
        .min(3, "Name must be great than 3 letters!")
        .max(12, "Name must be less than 12 letters!")
        .required("Name is required!"),
    email: string().email("Invalid email!").required("Email is required!"),
    password: string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
        )
        .required("Password is required"),
    storage: string()
        .oneOf(["multer", "drive"], "You can choose Multer or Google Drive!")
        .required("Choose storage!"),
    file: mixed()
        .required("file is required")
        .test("fileSize", "file is too large", (value) => {
            return value && value.size <= 5 * 1024 * 1024;
        })
        .test("fileType", "Unsupported file format", (value) => {
            return (
                value &&
                ["image/jpeg", "image/png", "image/webp"].includes(value.type)
            );
        }),
});

export default addUserSchema;
