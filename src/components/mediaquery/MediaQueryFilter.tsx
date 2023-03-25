import { useViewportSize } from "hooks/UseViewportSize";

export function Desktop({ children }: { children: React.ReactNode }) {
   const { width } = useViewportSize();
   return width >= 1024 ? <>{children}</> : null;
}

export function Mobile({ children }: { children: React.ReactNode }) {
   const { width } = useViewportSize();
   return width < 1024 ? <>{children}</> : null;
}
