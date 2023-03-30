import React, { useState } from 'react'

const MetamaskReg = () => {
  const [address, setAddress] = useState("")
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = async () => {
    try {
      if(window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_eth_requestAccounts' })
      const account = accounts[0]
      setAddress(account)
      setIsConnected(true)
      } else {
        alert("Please install Metamask")
      }
  } catch (error) {
      alert(error?.message)
  }
}

  return (  
      
    <div>
      <h1>MetamaskReg</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  )
}

export default MetamaskReg