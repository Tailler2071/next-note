'use client';

import { DocumentType } from '@/shared/types/documentTypes';
import Link from 'next/link';

export const DocumentsList = () => {
  // вместо этого будет получение документов либо с сервера, либо из store
  const documents: DocumentType[] = JSON.parse(localStorage.getItem('documents') || '[]');

  return (
    <ul>
      {documents.map((document) => {
        return (
          <li key={document.id}>
            <Link href={`/documents/${document.id}`}>{document.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
