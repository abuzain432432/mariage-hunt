import { ProtectedRouteProviders } from '@/components/ui/ProtectedRoutesProviders';
import '@/styles/globals.css';
import '@/styles/globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRouteProviders>
      <main className='flex-1'>{children}</main>
    </ProtectedRouteProviders>
  );
}
