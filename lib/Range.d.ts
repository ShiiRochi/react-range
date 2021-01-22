import * as React from 'react';
import { IProps, Direction } from './types';
declare class Range extends React.Component<IProps> {
    static defaultProps: {
        step: number;
        direction: Direction;
        rtl: boolean;
        disabled: boolean;
        allowOverlap: boolean;
        draggableTrack: boolean;
        min: number;
        max: number;
    };
    trackRef: React.RefObject<HTMLElement>;
    thumbRefs: React.RefObject<HTMLElement>[];
    markRefs: React.RefObject<HTMLElement>[];
    numOfMarks: number;
    resizeObserver: any;
    schdOnMouseMove: (e: MouseEvent) => void;
    schdOnTouchMove: (e: TouchEvent) => void;
    schdOnEnd: (e: Event) => void;
    state: {
        draggedTrackPos: number[];
        draggedThumbIndex: number;
        thumbZIndexes: number[];
        isChanged: boolean;
        markOffsets: never[];
    };
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IProps, prevState: any): void;
    componentWillUnmount(): void;
    getOffsets: () => {
        x: number;
        y: number;
    }[];
    getThumbs: () => Element[];
    getTargetIndex: (e: Event) => number;
    addTouchEvents: (e: TouchEvent) => void;
    addMouseEvents: (e: MouseEvent) => void;
    onMouseDownTrack: (e: React.MouseEvent) => void;
    onResize: () => void;
    onTouchStartTrack: (e: React.TouchEvent) => void;
    onMouseOrTouchStart: (e: MouseEvent & TouchEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onKeyUp: (e: React.KeyboardEvent) => void;
    /**
     * It moves thumb(-s) to a given clientX and clientY on track
     */
    onMove: (clientX: number, clientY: number) => null | undefined;
    normalizeValue: (value: number, index: number) => number;
    onEnd: (e: Event) => null | undefined;
    fireOnFinalChange: () => void;
    calculateMarkOffsets: () => void;
    render(): React.ReactNode;
}
export default Range;
