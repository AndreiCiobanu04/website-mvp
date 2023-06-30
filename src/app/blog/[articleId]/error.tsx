"use client"; // Error components must be Client components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>This article is unavailable! We are working on fixing this issue!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.replace("/blog")
        }
      >
        Go to Blog
      </button>
    </div>
  );
}
