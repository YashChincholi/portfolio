import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import Loading from '@/components/Loading';

export function withLoader<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
): ComponentType<any> {
  return dynamic(importFunc, {
    ssr: false,
    loading: () => <Loading />,
  });
}
