
import { ReactNode } from 'react';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-primary text-white p-2 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Photo Quest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
