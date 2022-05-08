import { useAccount } from 'wagmi'
import { useIsMounted } from '../hooks'
import Link from 'next/link'

function NavBar() {
  const isMounted = useIsMounted()
  const { data } = useAccount()

  return (
    <>
      <header className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <Link href="/">
            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
              >
                <path stroke="black" d="M82 12v36" />
                <rect width="64" height="64" fill="black" rx="32" />
                <path fill="white" d="M38 41v4H25v-4z" />
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M6 20v21h7c6 0 11-5 11-10s-5-11-11-11H6Zm5 5v12h2c4 0 6-3 6-6s-2-6-6-6h-2Zm30-5v21h7c6 0 11-5 11-10s-5-11-11-11h-7Zm5 5v12h2c4 0 6-3 6-6s-2-6-6-6h-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3 text-xl">Jobs</span>
            </a>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto ">
            <Link href="/about" className="mr-5 hover:text-gray-900">
              <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            {isMounted && data && (
              <>
                <Link href="/profile" className="mr-5 hover:text-gray-900">
                  <a className="mr-5 hover:text-gray-900">Profile</a>
                </Link>
                <Link href="/company" className="mr-5 hover:text-gray-900">
                  <a className="mr-5 hover:text-gray-900">Company</a>
                </Link>
              </>
            )}
          </nav>
          {isMounted && !data ? (
            <Link href="/connect" passHref>
              <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                Connect
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          ) : (
            <Link href="/connect" passHref>
            <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Disconnect
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-1 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          )}
        </div>
      </header>
    </>
  )
}

export default NavBar
