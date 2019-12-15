import { SubmitAction } from 'devfractal-ui-api';
import React from 'react';
import { Mixed, TypeOf } from 'technoidentity-utils';
interface InnerFormProps<T> {
    readonly initial: T;
    readonly edit: boolean;
    readonly onSubmit: SubmitAction<T>;
}
export interface FormProps<T> {
    readonly onSubmit: InnerFormProps<T>['onSubmit'];
    readonly initial?: InnerFormProps<T>['initial'];
}
export declare function formComponent<Spec extends Mixed>(spec: Spec, inner: React.FC<InnerFormProps<TypeOf<Spec>>>): React.FC<FormProps<TypeOf<Spec>>>;
export {};
//# sourceMappingURL=FormComponent.d.ts.map