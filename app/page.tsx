import { generateFooBar } from "@/app/lib/foobar";

export default function Home() {
  const sequence = generateFooBar();

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8 bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-4xl">
        <h1 className="text-2xl font-semibold mb-6 text-center text-black dark:text-zinc-50">
          Mini Test — FooBar (100 to 1, primes skipped)
        </h1>
        <p className="text-base leading-7 text-zinc-800 dark:text-zinc-300 break-words">
          {sequence.join(", ")}
        </p>
      </main>
    </div>
  );
}
