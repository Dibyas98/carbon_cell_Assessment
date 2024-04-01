import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <MetaMaskProvider
            debug={false}
            sdkOptions={{
                dappMetadata: {
                    name: "Example React Dapp",
                    url: window.location.href,
                },
                
                // Other options
            }}
        >
            <App />
        </MetaMaskProvider>
)
