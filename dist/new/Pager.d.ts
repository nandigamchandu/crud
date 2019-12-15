import React from 'react';
export interface PagerProps {
    readonly page: number;
    readonly maxPages?: number;
    onPageChange(n: number): void;
}
export declare const Pager: React.FC<PagerProps>;
//# sourceMappingURL=Pager.d.ts.map