import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return <div className="pt-[160px] px-[108px] w-screen">{children}</div>;
}

export default PageContainer;
