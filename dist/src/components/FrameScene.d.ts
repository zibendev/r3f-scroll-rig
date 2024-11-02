import React, { MutableRefObject, ReactNode } from 'react';
import { Scene } from 'three';
import type { ScrollState } from '../hooks/useTrackerTypes';
export interface FrameSceneChildProps {
    track: MutableRefObject<HTMLElement>;
    margin: number;
    priority: number;
    scale: vec3;
    scrollState: ScrollState;
    inViewport: boolean;
    scene: Scene;
}
interface IFrameScene {
    track: MutableRefObject<HTMLElement>;
    children: (state: FrameSceneChildProps) => ReactNode;
    margin?: number;
    inViewportMargin?: string;
    inViewportThreshold?: number;
    visible?: boolean;
    hideOffscreen?: boolean;
    scissor?: boolean;
    debug?: boolean;
    as?: string;
    priority?: number;
    scene?: Scene;
}
/**
 * Generic THREE.js Scene that tracks the dimensions and position of a DOM element while scrolling
 * Scene is positioned and scaled exactly above DOM element
 *
 * @author david@14islands.com
 */
declare function FrameScene({ track, children, margin, // Margin outside scissor to avoid clipping vertex displacement (px)
inViewportMargin, inViewportThreshold, visible, hideOffscreen, scissor, debug, as, priority, scene, ...props }: IFrameScene): React.JSX.Element;
export { FrameScene };
