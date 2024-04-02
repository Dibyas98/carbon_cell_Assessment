import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { Check } from 'lucide-react';

export default function Wallet() {
  const [account, setAccount] = useState(false);
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();

      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };
  return (
    <div className="wallet">
{ account?<Check style={{color:'green', backgroundColor:'wheat', borderRadius:'50%'}}></Check>:<button className="wallet_btn" onClick={connect}>
        Connect Wallet
      </button>}
      
      {connected ?(
        
        <div style={{width:'100%',textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}>
          <>
          <h4 style={{textAlign:'center'}}>connect Successful</h4>
            {/* {chainId && `Connected chain: ${chainId}`}
            <p style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}></p>
            {account && `Connected account: ${account}`} */}
          </>
        </div>
      ):<></>}
    </div>
  );
}
