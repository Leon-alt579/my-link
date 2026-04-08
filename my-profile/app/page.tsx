import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 p-6 md:p-12 font-sans overflow-hidden relative">
      {/* Background Decorative Blob 1 */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
      {/* Background Decorative Blob 2 */}
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>

      <main className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/10 dark:bg-black/20 border border-white/20 shadow-2xl rounded-3xl p-8 md:p-10 flex flex-col items-center">
        {/* Profile Avatar */}
        <div className="relative w-28 h-28 mb-6 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
          <div className="relative w-full h-full flex items-center justify-center rounded-full bg-indigo-950 border-2 border-white/30 overflow-hidden z-10">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
              HG
            </span>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
            홍길동
          </h1>
          <p className="text-sm font-medium text-purple-200/80 uppercase tracking-widest">
            Software Developer
          </p>
          <p className="text-base text-gray-200 mt-2 leading-relaxed">
            사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 바이브 코딩으로 멋진 UI를 만들고 있어요 ✨
          </p>
        </div>

        {/* Social Links */}
        <div className="w-full space-y-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-white group shadow-lg"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-purple-500/40 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <span className="font-semibold tracking-wide">GitHub</span>
          </Link>

          <Link
            href="https://blog.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-white group shadow-lg"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-emerald-500/40 transition-colors">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <span className="font-semibold tracking-wide">Developer Blog</span>
          </Link>

          <Link
            href="mailto:contact@example.com"
            className="flex items-center gap-4 w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-white group shadow-lg"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-blue-500/40 transition-colors">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="font-semibold tracking-wide">Email Me</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
