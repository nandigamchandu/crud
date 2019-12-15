import { FormikActions } from 'formik';
import { ObjectSchema } from 'yup';
export interface EditorViewProps<T extends {}> {
    readonly data: T;
    readonly id?: keyof T;
    readonly schema?: ObjectSchema<T>;
    onSubmit?(values: T, actions: FormikActions<T>): void;
}
export declare function EditorView<T extends {}>({ data, id, schema, onSubmit, }: EditorViewProps<T>): JSX.Element;
export interface EditorProps<T extends {}> {
    readonly data: T | (() => Promise<T>);
    readonly id: keyof T;
    onSubmit?(values: T, actions: FormikActions<T>): void;
}
export declare function Editor<T extends {}>({ data, onSubmit, id, }: EditorProps<T>): JSX.Element;
//# sourceMappingURL=Editor.d.ts.map