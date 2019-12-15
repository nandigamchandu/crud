import { SubmitAction } from 'devfractal-ui-api';
import { Mixed } from 'technoidentity-utils';
declare type CrudOperations = 'list' | 'edit' | 'create' | 'view';
export declare type Paths = Record<CrudOperations, string>;
export declare function base(resource: string, basePath?: string): string;
export declare function paths(resource: string, basePath?: string): Paths;
export declare type Links = Omit<Paths, 'edit' | 'view'> & {
    edit(id: string | number | undefined): string;
    view(id: string | number | undefined): string;
};
export declare function links(resource: string, basePath?: string): Links;
export declare function formProps<Spec extends Mixed>(spec: Spec): import("technoidentity-utils").ObjC<{
    initial: Spec;
}, {
    onSubmit: import("technoidentity-utils").FnC<SubmitAction<Spec["_A"]>>;
}>;
export declare function listProps<Spec extends Mixed>(spec: Spec): import("technoidentity-utils").ObjC<{}, {
    page: import("io-ts").NumberC;
    onPageChange: import("technoidentity-utils").FnC<(page: number) => void>;
    data: import("io-ts").ReadonlyArrayC<Spec>;
}>;
export {};
//# sourceMappingURL=common.d.ts.map