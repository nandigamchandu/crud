import { API, APIQuery } from 'devfractal-api';
import React from 'react';
import { ObjC, Props, TypeOf } from 'technoidentity-utils';
import { AllComponentProps } from './All';
import { paths as resPaths } from './common';
import { EditComponentProps } from './Edit';
export interface CrudRoutesProps<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>> {
    readonly api: API<Opt, Req, ID>;
    readonly form: React.FC<EditComponentProps<TypeOf<ObjC<Opt, Req>>>>;
    readonly list: React.FC<AllComponentProps<TypeOf<ObjC<Opt, Req>>>>;
    readonly paths?: ReturnType<typeof resPaths>;
    readonly redirectTo?: string;
    queryFn?(search: string): APIQuery<TypeOf<ObjC<Opt, Req>>>;
}
export declare function CrudRoutes<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>>({ api, list, form, paths, redirectTo, }: CrudRoutesProps<Opt, Req, ID>): JSX.Element;
//# sourceMappingURL=CrudRoutes.d.ts.map