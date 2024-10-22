import { create } from 'zustand';
import { DocumentType } from '@/shared/types/documentTypes';

type State = {
  documents: DocumentType[];
};

type Action = {
  addDocument: (document: DocumentType) => void;
};

export const useDocumentsStore = create<State & Action>((set) => ({
  documents: [],
  addDocument: (document: DocumentType) =>
    set((state) => ({ documents: [...state.documents, document] })),
}));
