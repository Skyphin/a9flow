import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="isolate flex h-dvh">
      <div className="flex flex-col w-full h-full">{children}</div>
    </div>
  );
};
