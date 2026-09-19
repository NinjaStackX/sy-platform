"use client";
import { I18nProvider } from "./I18nProvider";
import Queryprovider from "./QueryProvider.tsx";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Queryprovider>
      <I18nProvider>{children}</I18nProvider>
    </Queryprovider>
  );
}
