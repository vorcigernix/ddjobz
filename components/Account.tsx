import { useAccount, useEnsName } from 'wagmi'

export const Account = () => {
  const { data: accountData } = useAccount()
  const { data: ensNameData } = useEnsName({ address: accountData?.address })

  return (
    <div>
      {ensNameData ?? accountData?.address}
      {ensNameData ? ` (${accountData?.address})` : null}
    </div>
  )
}