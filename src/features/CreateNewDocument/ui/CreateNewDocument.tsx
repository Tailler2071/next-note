'use client';

import { Button } from '@/shared/ui';
import { Plus } from 'lucide-react';
import { createDocument } from '../lib/createDocument';
import { useDocumentsStore } from '@@/src/entities/DocumentsList';

export const CreateNewDocument = () => {
  const addDocument = useDocumentsStore((state) => state.addDocument);

  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={() => addDocument(createDocument())}
    >
      <Plus />
    </Button>
  );
};
