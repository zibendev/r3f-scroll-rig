/// <reference path="../types/global.d.ts" />
import { MutableRefObject } from 'react';
import { TrackerOptions, TrackerFrame } from './useTrackerTypes';
/**
 * Returns the current Scene position of the DOM element
 * based on initial getBoundingClientRect and scroll delta from start
 */
declare function useTrackerFrame(track: MutableRefObject<HTMLElement>, options?: TrackerOptions): TrackerFrame;
export { useTrackerFrame };
