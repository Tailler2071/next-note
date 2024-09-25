import type { DocumentType } from '@/shared/types/documentTypes';

// имитация хранилища,
// позже будет сохраняться либо в store и localstorage, либо на сервере
const documents: DocumentType[] = JSON.parse(localStorage.getItem('documents') || '[]');

// функция, которая будет создавать новый документ и помещать его в хранилище
export const createDocument = () => {
  const newDocument: DocumentType = {
    id: String(Math.random() * 10),
    title: 'Untitled',
    text: '',
  };
  //имитация сохранения в хранилище
  documents.push(newDocument);
  localStorage.setItem('documents', JSON.stringify(documents));
};
