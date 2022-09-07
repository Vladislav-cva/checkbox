export interface FieldValueProps<T> {
    value?: T;
    onValueChange: (newValue: T) => void;
    onBlur?(event: React.SyntheticEvent<HTMLElement>): void;
}

export interface FieldProps {
    label?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isRequired?: boolean;
    isOptional?: boolean;
    validationMessage?: string;
    info?: string;
    onBlur?(event: React.SyntheticEvent<HTMLElement>): void;
}

export type TPerson = {
    id: string;
    name: string;
    second_name: string;
    age: number;
    status: string;
    child: boolean;
    city: string;
}