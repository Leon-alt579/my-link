import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col p-6 sm:p-12 lg:p-24 overflow-hidden relative font-sans">
      
      {/* Decorative Neo-brutalist Elements */}
      <div className="hidden lg:block absolute top-10 right-10 w-32 h-32 bg-pink-400 border-4 border-black rounded-full shadow-[8px_8px_0px_#000]"></div>
      <div className="hidden md:block absolute bottom-20 left-10 w-24 h-24 bg-blue-400 border-4 border-black shadow-[8px_8px_0px_#000] rotate-12"></div>

      <main className="w-full max-w-7xl mx-auto flex flex-col gap-16 mt-8 sm:mt-12 lg:mt-24 z-10">
        
        {/* Intro / Hero Section */}
        <section className="flex flex-col gap-6">
          <div className="inline-block border-4 border-black bg-lime-400 shadow-[8px_8px_0px_#000] px-6 py-2 w-fit mb-4 -rotate-2">
            <span className="font-extrabold text-xl sm:text-2xl uppercase tracking-widest text-black">
              Software Developer
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-fuchsia-600 leading-none drop-shadow-[6px_6px_0px_#000] tracking-tighter">
            홍길동
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black max-w-3xl leading-relaxed mt-4 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_#000]">
            사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 바이브 코딩으로 멋진 UI를 만들고 있어요.
          </p>
        </section>

        {/* Social Links Section */}
        <section className="mt-12 w-full">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-8 underline decoration-8 decoration-pink-400 underline-offset-8">
            Connect With Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* GitHub */}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-4 bg-purple-400 border-4 border-black p-8 shadow-[8px_8px_0px_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_#000] active:translate-y-2 active:translate-x-2 active:shadow-none transition-all duration-200"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white border-4 border-black rounded-full group-hover:rotate-12 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <span className="font-black text-2xl text-black">GitHub</span>
            </Link>

            {/* Blog */}
            <Link
              href="https://blog.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-4 bg-lime-400 border-4 border-black p-8 shadow-[8px_8px_0px_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_#000] active:translate-y-2 active:translate-x-2 active:shadow-none transition-all duration-200"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white border-4 border-black rounded-full group-hover:-rotate-12 transition-transform duration-300">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="font-black text-2xl text-black">Dev Blog</span>
            </Link>

            {/* Email */}
            <Link
              href="mailto:contact@example.com"
              className="group flex flex-col items-center justify-center gap-4 bg-cyan-400 border-4 border-black p-8 shadow-[8px_8px_0px_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_#000] active:translate-y-2 active:translate-x-2 active:shadow-none transition-all duration-200"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white border-4 border-black rounded-full group-hover:scale-110 transition-transform duration-300">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="font-black text-2xl text-black">Email Me</span>
            </Link>
            
          </div>
        </section>
        
      </main>
    </div>
  );
}
