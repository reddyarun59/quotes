import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Toaster />
    </main>
  );
};
export default RootLayout;
