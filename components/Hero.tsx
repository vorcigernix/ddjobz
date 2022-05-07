import Link from 'next/link'

export const Hero = () => {
  return (
    <>
      <div className="relative -z-10 w-full max-w-lg">
        <div className="absolute top-12 -left-4 h-96 w-96 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-2000 absolute top-12 -right-4 h-96 w-96 animate-blob rounded-full bg-indigo-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-4000 absolute top-12 left-20 h-96 w-96 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      </div>
      <section className="mt-8 hidden rounded-3xl bg-pink-50 p-8 text-gray-900 md:flex opacity-70">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <h2 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl md:w-2/5">
            Developer DAO Job Board - change the market to conversation
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="text-base leading-relaxed">
              Developer DAO Job Board is a platform for developers and web3
              organizations to start conversations about the openings and
              opportunities to contribute. Developers are not goods, they don't
              belong on "job market" - starting a new position is starting a new
              relationship for both parties and this is more of a dating app
              than a job market.
            </p>
            <div className="mt-6 flex md:mt-4">
              <Link href="/connect">
                <button className="inline-flex rounded border-0 bg-pink-500 py-1 px-4 text-white hover:bg-pink-600 focus:outline-none">
                  Create profile
                </button>
              </Link>
              <Link href="/about">
                <a className="ml-4 inline-flex items-center text-pink-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
