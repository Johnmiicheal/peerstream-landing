import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = React.useState(false);
  React.useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
    <>
    <Head>
      <title>
        PeerStream - An ActivityPub-Federated Video Streaming Platform
      </title>
      <link type="image/png" sizes="96x96" rel="icon" href="/peericon.png"></link>
    </Head>
    <Component {...pageProps} />
    
    </>
  )
}
}

export default MyApp;
