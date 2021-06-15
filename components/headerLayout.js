import Link from 'next/link'

export default function HeaderLayout() {
  return (
    <>
      <div>
        <header className="text-gray-600 body-font bg-indigo-700">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <a className="flex title-font font-medium items-center text-xl text-white mb-4 md:mb-0 no-underline">
                Thomas aka TheTomBomb
              </a>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center  justify-center flex-col sm:flex-row">
              <Link href="/">
                <a className="mr-5 text-white hover:text-gray-400 hover:no-underline hover:cursor-pointer">
                  🏡 Home
                </a>
              </Link>
              {" "}
              <Link href="/posts/bio">
                <a className="mr-5 ml-5 mt-6 sm:mt-0 text-white hover:text-gray-400 hover:no-underline hover:cursor-pointer">
                  🧔 Bio
                </a>
              </Link>
              <Link href="/events">
                <a className="mr-5 ml-5 mt-6 sm:mt-0 text-white hover:text-gray-400 hover:no-underline hover:cursor-pointer">
                  🥑 Speaking Events
                </a>
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
