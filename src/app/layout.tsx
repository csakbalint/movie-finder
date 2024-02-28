import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ReactNode } from 'react';

import theme from '../theme';

export const metadata: Metadata = {
  title: 'Movie Finder',
  description:
    'The app utilizes The Movie Database (TMDb) API to fetch movie data and display it to users.',
};
import CssBaseline from '@mui/material/CssBaseline';

import ReactQueryProvider from '@/providers/ReactQueryProvider';

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ReactQueryProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <body>{children}</body>
          </ThemeProvider>
        </ReactQueryProvider>
      </AppRouterCacheProvider>
    </html>
  );
};

export default RootLayout;
