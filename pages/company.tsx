import { NextPage } from 'next/types'

const Company: NextPage = () => {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
              There is no organization
              <br className="hidden lg:inline-block" />
              associated to your account
            </h1>
            <p className="mb-8 leading-relaxed">
              Here you can create your own organization (either yours or one you represent). After you
              create (mint) your organization, you can create a new openings for
              your organization.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded border-0 bg-pink-500 py-2 px-6 text-lg text-white hover:bg-pink-600 focus:outline-none">
                Mint Company
              </button>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                Mint Opening
              </button>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className=" rounded-3xl object-cover object-center"
              alt="hero"
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Company
