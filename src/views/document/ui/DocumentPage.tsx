'use client';

import { useParams } from 'next/navigation';

export default function DocumentPage() {
  const { id } = useParams<{ id: string }>();
  return <p>Document: {id}</p>;
}
