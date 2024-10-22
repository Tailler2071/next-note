import { DocumentsList } from '@@/src/entities/DocumentsList';
import { CreateNewDocument } from '@@/src/features/CreateNewDocument';

export default function TestPage() {
  return (
    <div>
      <CreateNewDocument />
      <DocumentsList />
    </div>
  );
}
