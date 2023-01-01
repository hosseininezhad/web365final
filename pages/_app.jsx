
import React from 'react';


import Layout from '../components/Layout'

import ContextProvider from '../context/index';
import '../styles/globals.css'
import '../styles/font-awesome.css'
import "swiper/css";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {




  return (
    <>
      <ContextProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  )
}

export default MyApp