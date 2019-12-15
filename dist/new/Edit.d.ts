import { API } from 'devfractal-api';
import { SubmitAction } from 'devfractal-ui-api';
import React from 'react';
import { ObjC, Props, TypeOf } from 'technoidentity-utils';
export interface EditComponentProps<T> {
    readonly initial?: T;
    readonly onSubmit: SubmitAction<T>;
}
export interface EditProps<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>> {
    readonly api: API<Opt, Req, ID>;
    readonly path: string;
    readonly redirectTo?: string;
    readonly form: React.FC<EditComponentProps<TypeOf<ObjC<Opt, Req>>>>;
}
export declare function Edit<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>>({ path, ...props }: EditProps<Opt, Req, ID>): JSX.Element;
//# sourceMappingURL=Edit.d.ts.map