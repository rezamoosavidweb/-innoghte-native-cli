import React from 'react';

import Card from '@/components/base/card/Card';

import CardHeader from './CardHeader';

type Props = {
  readonly children: React.ReactNode;
  readonly imageUrl: string;
  readonly title: string;
};

export default function MyProductCard({ children, imageUrl, title }: Props) {
  return (
    <Card>
      <CardHeader imageUrl={imageUrl} title={title} />
      {children}
    </Card>
  );
}
