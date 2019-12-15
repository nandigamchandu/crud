/// <reference types="react" />
export interface ViewerViewProps<T extends {}> {
    readonly data: T;
}
export declare function ViewerView<T extends {}>({ data, }: ViewerViewProps<T>): JSX.Element;
export interface ViewerProps<T extends {}> {
    readonly data: T | (() => Promise<T>);
}
export declare function Viewer<T extends {}>({ data }: ViewerProps<T>): JSX.Element;
//# sourceMappingURL=Viewer.d.ts.map