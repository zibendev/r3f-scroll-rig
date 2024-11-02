import React from 'react';
import { ThreeElements } from '@react-three/fiber';
type Props = ThreeElements['orthographicCamera'] & {
    makeDefault?: boolean;
    margin?: number;
};
export declare const OrthographicCamera: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<unknown>>;
export {};
