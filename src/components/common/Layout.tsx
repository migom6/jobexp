import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex h-full min-h-full justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  );
};

export default Layout;
