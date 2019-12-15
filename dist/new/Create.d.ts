import { API } from 'devfractal-api';
import { SubmitAction } from 'devfractal-ui-api';
import React from 'react';
import { ObjC, Props, TypeOf } from 'technoidentity-utils';
export interface CreateProps<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>> {
    readonly path: string;
    readonly redirectTo?: string;
    readonly form: React.FC<{
        readonly onSubmit: SubmitAction<TypeOf<ObjC<Opt, Req>>>;
    }>;
    readonly api: API<Opt, Req, ID>;
}
export declare function Create<Opt extends Props, Req extends Props, ID extends keyof TypeOf<ObjC<Opt, Req>>>({ path, ...props }: CreateProps<Opt, Req, ID>): JSX.Element;
//# sourceMappingURL=Create.d.ts.map