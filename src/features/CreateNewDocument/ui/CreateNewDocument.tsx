'use client';

import { Button } from '@/shared/ui';
import { Plus } from 'lucide-react';
import { createDocument } from '../lib/createDocumet';

export const CreateNewDocument = () => {
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={createDocument}
    >
      <Plus />
    </Button>
  );
};
