export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-white p-12 text-center shadow-sm transition-all hover:shadow-md dark:bg-zinc-900">
        {/* Profile Initial Placeholder */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          홍
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            홍길동
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-100 w-full dark:border-zinc-800">
          <button className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
            Contact Me
          </button>
        </div>
      </main>
    </div>
  );
}
