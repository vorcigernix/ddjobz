import { NextPage } from 'next/types'

const Profile: NextPage = () => {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col px-5 py-24">
          <div className="mx-auto lg:w-4/6">
            <div className="hidden h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="h-full w-full object-cover object-center"
                src="https://dummyimage.com/1200x500"
              />
            </div>
            <div className="mt-10 flex flex-col sm:flex-row">
              <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                <div className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-gray-900 text-gray-400">
                  <img
                    src="http://placeimg.com/120/120/people"
                    className="h-28 w-28 rounded-full"
                    alt="profile picture"
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                    Phoebe Caulfield
                  </h2>
                  <div className="mt-2 mb-4 h-1 w-12 rounded bg-pink-500"></div>
                  <p className="text-base">
                    Senior engineering manager with a passion for building and
                    helping others.
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Summary
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <button className="inline-flex items-center text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font overflow-hidden text-gray-600">
        <div className="container mx-auto flex flex-col px-5 py-24">
          <div className="mx-auto divide-y-2 divide-gray-100 lg:w-4/6">
            <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
              Experience
            </h1>
            <div className="flex flex-wrap py-8 md:flex-nowrap">
              <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                <span className="title-font font-semibold text-gray-700">
                  Google LLC
                </span>
                <span className="mt-1 text-sm text-gray-500">12 Jun 2019</span>
                <span className="mt-1 text-sm text-gray-500">12 Jun 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                  Satoshi Assistant
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap py-8 md:flex-nowrap">
              <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                <span className="title-font font-semibold text-gray-700">
                  Art Collective
                </span>
                <span className="mt-1 text-sm text-gray-500">12 Jun 2018</span>
                <span className="mt-1 text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                  Meditation shaman
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap py-8 md:flex-nowrap">
              <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                <span className="title-font font-semibold text-gray-700">
                  McDonalds
                </span>
                <span className="text-sm text-gray-500">12 Jun 2017</span>
                <span className="text-sm text-gray-500">22 Jun 2017</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                  Icecream specialist
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
