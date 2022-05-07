import { useConnect, useDisconnect, useAccount, useEnsName } from 'wagmi'

import { useIsMounted } from './hooks'

export const Connect = () => {
  const isMounted = useIsMounted()
  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
  } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: accountData } = useAccount()
  const { data: ensNameData } = useEnsName({ address: accountData?.address })

  return (
    <div>
      <div>
        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-20 flex w-full flex-col text-center">
              {isMounted && accountData ? (
                <>
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-pink-500">
                    {ensNameData ?? accountData?.address}
                    {ensNameData ? ` (${accountData?.address})` : null}
                  </h2>
                  <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
                    CONNECTED
                  </h1>
                </>
              ) : (
                <>
                 <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-pink-500">
                    PLEASE USE A SAME WALLET EVERY TIME
                  </h2>
                  <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
                    CONNECT
                  </h1>
                </>
              )}
            </div>
            <div className="-m-4 flex flex-col items-center justify-center space-y-4 text-black  ">
              {activeConnector && (
                <button
                  onClick={() => disconnect()}
                  className="inline-flex w-52 items-center rounded-lg bg-pink-100 py-3 px-5 hover:bg-gray-200 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-4 flex flex-col items-start leading-none">
                    <span className="mb-1 text-xs text-gray-600">
                      DISCONNECT
                    </span>
                    <span className="title-font font-medium">
                      from {activeConnector.name}
                    </span>
                  </span>
                </button>
              )}
              {connectors.map(
                (x) =>
                  x.id !== activeConnector?.id && (
                    <button
                      className="inline-flex w-52 items-center rounded-lg bg-white py-3 px-5 outline outline-pink-100 hover:bg-gray-200 focus:outline-none"
                      key={x.id + x.name}
                      onClick={() => connect(x)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-4 flex flex-col items-start leading-none">
                        <span className="mb-1 text-xs text-gray-600">
                          Connect
                        </span>
                        <span className="title-font font-medium">
                          {x.name}
                          {isConnecting &&
                            x.id === pendingConnector?.id &&
                            ' (connecting)'}
                        </span>
                        <span className="title-font font-medium">
                          {error && <div>{error.message}</div>}
                        </span>
                      </span>
                    </button>
                  )
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
