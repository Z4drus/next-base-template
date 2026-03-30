"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Une erreur est survenue
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        {error.message || "Quelque chose s'est mal passé."}
      </p>
      <button
        onClick={reset}
        className="cursor-pointer px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all"
      >
        Réessayer
      </button>
    </div>
  );
}
