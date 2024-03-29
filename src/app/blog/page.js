import Link from "next/link";

export default function Blog() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>
            Blog Women in Teach
          </h1>
          <div>
            <h3>
              Запущен новый курс по Next.js в рамках нашего проекта
            </h3>
          </div>
          <div>
            <h3>
              Отзывы на next.js курс великолепные!
            </h3>
          </div>
        </div>

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Link href='/'>Menu</Link>
        </p>
        
      </main>
    );
  }
  