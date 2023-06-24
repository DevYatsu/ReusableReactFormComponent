export const genericFormInputsData = {
    username: {
        name: "username",
        placeholder: "John",
        minLength: {
            value: 4,
            message: "Username must be at least 3 characters long",
        },
        maxLength: {
            value: 18,
            message: "Username cannot exceed 18 characters long",
        },
        pattern: {
            value: "^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$",
            message: "Invalid username.",
        },
        required: "Username is required",
    },
    email: {
        name: "email",
        placeholder: "john.doe@gmail.com",
        type: "email",
        pattern: {
            value: "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])",
            message: "Invalid email adress.",
        },
        maxLength: {
            value: 320,
            message: "Email cannot exceed 320 characters long",
        },
        required: "Email adress is required",
    },
    password: {
        name: "password",
        type: "password",
        placeholder: "********",
        minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
        },
        pattern: {
            value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
            message: "Password must contain at least one lowercase and uppercase letter, as well as one digit and one special character.",
        },
        required: "Password is required",
    },
    passwordConfirmation: {
        name: "passwordConfirmation",
        type: "password",
        placeholder: "********",
        minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
        },
        pattern: {
            value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
            message: "Password must contain at least one lowercase and uppercase letter, as well as one digit and one special character.",
        },
        isPasswordConfirm: true,
        required: "Please valid your password.",
    },
};
export function getGenericFormInputsData(...params) {
    return [...params].map((name) => genericFormInputsData[name]);
}
//# sourceMappingURL=formFunctions.js.map