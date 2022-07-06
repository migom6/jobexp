import Header from "components/header";
import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode; hideHeader?: boolean }> = ({
  children,
  hideHeader = false,
}) => {
  return (
    <>
      {!hideHeader && <Header />}
      <main className="flex h-full min-h-full flex-col items-center justify-center bg-slate-50">
        {children}
      </main>
    </>
  );
};

export default Layout;
