import { useAccount } from 'wagmi'

import { Account } from '../components/Account'
import { Connect } from '../components/Connect'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { useIsMounted } from '../components/hooks'

function ConnectPage() {
  const isMounted = useIsMounted()
  const { data } = useAccount()

  return (
    <>
      <Connect />
      {isMounted && data && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )}
    </>
  )
}

export default ConnectPage
