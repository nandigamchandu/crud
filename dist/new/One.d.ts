import { API } from 'devfractal-api';
import React from 'react';
import { ObjC, Props, TypeOf } from 'technoidentity-utils';
export interface OneComponentProps<T> {
    readonly data: T;
}
export interface OneProps<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>> {
    readonly api: API<Opt, Req, ID>;
    readonly path: string;
    readonly id: TypeOf<ObjC<Opt, Req>>[ID];
    readonly view: React.FC<OneComponentProps<TypeOf<ObjC<Opt, Req>>>>;
}
export declare function One<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>>({ path, ...props }: OneProps<Opt, Req, ID>): JSX.Element;
//# sourceMappingURL=One.d.ts.map