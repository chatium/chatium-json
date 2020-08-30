import { CommonBlockProps } from '../commonTypes';
export interface AudioProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
    title?: string;
    description?: string;
    downloadUrl: string;
    fileHash: string | null;
    durationSeconds?: number;
}
export interface AudioBlock<ExtraBlocks, ExtraActions> extends AudioProps<ExtraBlocks, ExtraActions> {
    type: 'audio';
}
export declare function Audio<ExtraBlocks, ExtraActions>(props: AudioProps<ExtraBlocks, ExtraActions>): AudioBlock<ExtraBlocks, ExtraActions>;
