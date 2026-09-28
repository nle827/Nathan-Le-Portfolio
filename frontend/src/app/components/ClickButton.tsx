import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ClickButton({ children, className, onClick }: Props) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
