'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log to an error reporting service here (Sentry, etc.)
        console.error(error);
    }, [error]);

    return (
        <div style={{ padding: 24 }}>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}