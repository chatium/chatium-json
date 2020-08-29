import { CommonBlockProps } from '../commonTypes';
export interface AudioProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
    title?: string;
    description?: string;
    downloadUrl: string;
    fileHash: string | null;
    durationSeconds?: number;
}
export interface AudioBlock<ExtraActions> extends AudioProps<ExtraActions> {
    type: 'audio';
}
export declare function Audio<ExtraActions>(props: AudioProps<ExtraActions>): AudioBlock<ExtraActions>;
