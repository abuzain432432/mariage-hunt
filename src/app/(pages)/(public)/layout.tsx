import '@/styles/globals.css';
import '@/styles/globals.scss';
import { Providers } from '@/components/ui/Providers';
import { Navbar } from '@/components/ui/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const
  return (
    <Providers
      themeProps={{ attribute: 'class', defaultTheme: 'light' }}
    >
      <div className='relative flex flex-col h-screen'>
        <Navbar />
        <main className='flex-1'>{children}</main>
      </div>
    </Providers>
  );
}
