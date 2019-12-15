import { RowClickEvent } from 'devfractal-simple';
import { FormikActions } from 'formik';
import React from 'react';
import { Mixed, TypeOf } from 'technoidentity-utils';
interface EditProps<T extends Record<string, any>> {
    readonly data: T | (() => Promise<T>);
    onSubmit?(values: T, actions: FormikActions<T>): void;
}
interface ViewProps<T extends Record<string, any>> {
    readonly data: T | (() => Promise<T>);
}
interface CreateProps<T extends Record<string, any>> {
    onSubmit?(values: T, actions: FormikActions<T>): void;
}
interface ListProps<T extends Record<string, any>> {
    list(): Promise<ReadonlyArray<T>>;
    onCreate?(): void;
    onEdit?(value: RowClickEvent<T>): void;
    onDelete?(value: RowClickEvent<T>): void;
}
export interface CrudViewsResult<T extends Mixed, ID extends keyof T> {
    readonly List: React.FC<ListProps<TypeOf<T>>>;
    readonly Create: React.FC<CreateProps<Omit<TypeOf<T>, ID>>>;
    readonly Edit: React.FC<EditProps<TypeOf<T>>>;
    readonly View: React.FC<ViewProps<TypeOf<T>>>;
}
export declare function Views<RT extends Mixed, ID extends keyof RT>(typeValue: RT, id: keyof RT): CrudViewsResult<RT, ID>;
export {};
//# sourceMappingURL=Views.d.ts.map