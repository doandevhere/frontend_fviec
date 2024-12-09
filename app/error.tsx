"use client";

import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    // TODO:notify error to private channel in slack or telegram
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center flex-col space-y-4">
      <h3 className="text-3xl font-bold">Something went wrong!</h3>
      <ThemeSwitcher />
    </main>
  );
}
