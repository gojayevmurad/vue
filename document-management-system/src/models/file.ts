interface IFile {
  _id: string;
  isPublic: boolean;
  name: string;
  size: number;
  updatedAt: string;
  createdAt: string;
  type: string;
  sharedWith?: string[];
}

export type { IFile };
