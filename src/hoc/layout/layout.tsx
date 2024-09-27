import Header from '@/components/header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
};
export default RootLayout;
