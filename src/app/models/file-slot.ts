export enum FileStatus {
  empty = 'empty',
  loading = 'loading',
  ready = 'ready',
}

export interface FileSlot {
  id: string;
  status: FileStatus;
}
