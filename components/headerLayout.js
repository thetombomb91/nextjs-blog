export default function HeaderLayout() {
  return (
    <>
      <div>
        <header className="text-gray-600 body-font bg-indigo-700">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 no-underline	"
            >
              <span className="ml-3 text-xl text-white">
                {" "}
                <span className="text-white" id="name">Thomas aka</span> TheTomBomb
              </span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center  justify-center flex-col sm:flex-row">
              <a
                href="/"
                className="mr-5 text-white hover:text-gray-900 no-underline"
              >
                🏡 Home
              </a>{" "}
              <a
                href="/posts/bio"
                className="mr-5 ml-5 mt-6 sm:mt-0 text-white hover:text-gray-900 no-underline"
              >
                🧔 Bio
              </a>
              <a
                href="/events"
                className="mr-5 ml-5 mt-6 sm:mt-0 text-white hover:text-gray-900 no-underline"
              >
                🥑 Speaking Events
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
