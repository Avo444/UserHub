import { mixed, object } from "yup";
const setAvatarSchema = object({
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

export default setAvatarSchema;
