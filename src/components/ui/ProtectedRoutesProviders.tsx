'use client';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function ProtectedRouteProviders({
  children,
  themeProps,
}: ProvidersProps) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <NextUIProvider className='' navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster
            position='top-center'
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
                style: {
                  background: '#1a8d1a',
                },
              },
              error: {
                duration: 5000,
                style: {
                  background: '#ff1a1a',
                  color: 'white',
                },
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '8px 24px',
              },
            }}
          />
        </QueryClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
