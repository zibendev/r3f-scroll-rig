import React, { ReactNode } from 'react';
import { Props } from '@react-three/fiber';
interface IGlobalCanvas extends Omit<Props, 'children'> {
    children?: ReactNode | ((globalChildren: ReactNode) => ReactNode);
    as?: any;
    orthographic?: boolean;
    onError?: (props: any) => void;
    camera?: any;
    debug?: boolean;
    scaleMultiplier?: number;
    globalRender?: boolean;
    globalPriority?: number;
    globalClearDepth?: boolean;
    useWebGPU?: boolean;
}
export declare const GlobalCanvas: ({ children, onError, ...props }: IGlobalCanvas) => React.JSX.Element;
export {};
