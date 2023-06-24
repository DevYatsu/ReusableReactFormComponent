import { FormInput } from "../../@types/input";
export declare const genericFormInputsData: {
    username: {
        name: string;
        placeholder: string;
        minLength: {
            value: number;
            message: string;
        };
        maxLength: {
            value: number;
            message: string;
        };
        pattern: {
            value: string;
            message: string;
        };
        required: string;
    };
    email: {
        name: string;
        placeholder: string;
        type: string;
        pattern: {
            value: string;
            message: string;
        };
        maxLength: {
            value: number;
            message: string;
        };
        required: string;
    };
    password: {
        name: string;
        type: string;
        placeholder: string;
        minLength: {
            value: number;
            message: string;
        };
        pattern: {
            value: string;
            message: string;
        };
        required: string;
    };
    passwordConfirmation: {
        name: string;
        type: string;
        placeholder: string;
        minLength: {
            value: number;
            message: string;
        };
        pattern: {
            value: string;
            message: string;
        };
        isPasswordConfirm: boolean;
        required: string;
    };
};
export declare function getGenericFormInputsData(...params: (keyof typeof genericFormInputsData)[]): FormInput[];
