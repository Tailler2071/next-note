import type { DocumentType } from '@/shared/types/documentTypes';

export const createDocument = () => {
  const newDocument: DocumentType = {
    id: String(Math.random() * 10),
    title: 'Untitled',
    text: '',
  };

  return newDocument;
};
