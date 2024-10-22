'use client';

import Link from 'next/link';
import { useDocumentsStore } from '../model/documentsStore';

export const DocumentsList = () => {
  const documents = useDocumentsStore((state) => state.documents);

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
