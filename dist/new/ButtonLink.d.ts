import { AllControlHelpers, ButtonProps } from 'devfractal-ui-core';
import React from 'react';
export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, AllControlHelpers {
    readonly to: string;
    readonly variant?: ButtonProps['variant'];
    readonly size?: ButtonProps['size'];
    readonly state?: ButtonProps['state'];
    readonly fullWidth?: boolean;
    readonly rounded?: boolean;
    readonly inverted?: boolean;
    readonly outlined?: boolean;
}
export declare const ButtonLink: React.FC<ButtonLinkProps>;
//# sourceMappingURL=ButtonLink.d.ts.map