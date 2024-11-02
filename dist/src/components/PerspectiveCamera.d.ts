import React from 'react';
import { ThreeElements } from '@react-three/fiber';
type Props = ThreeElements['perspectiveCamera'] & {
    makeDefault?: boolean;
    margin?: number;
};
export declare const PerspectiveCamera: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<unknown>>;
export {};
