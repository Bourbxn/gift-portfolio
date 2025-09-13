import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return <div className="pt-[160px]">{children}</div>;
}

export default PageContainer;
