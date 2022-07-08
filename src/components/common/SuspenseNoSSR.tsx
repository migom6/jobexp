import { FC, ReactNode, Suspense, useEffect, useState } from "react";

const isServer = typeof window === "undefined";

const SuspenseNoSSR: FC<{ children: ReactNode; fallback: ReactNode }> = ({
  children,
  fallback,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (isServer || !isMounted) return <>{fallback}</>;
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default SuspenseNoSSR;
