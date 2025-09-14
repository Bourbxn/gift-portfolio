import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return (
    <div className="md:pt-[160px] pt-[90px] md:px-[108px] px-[16px] w-screen">
      {children}
    </div>
  );
}

export default PageContainer;
