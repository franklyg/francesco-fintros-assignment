import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout'

import AllPosts from '../components/AllPosts';

// const metascraper = require('metascraper')([
//   require('metascraper-image')(),
// ])

// const got = require('got');

// export async function getStaticProps(params) {
//   const targetUrl = 'https://research.nccgroup.com/2020/11/11/decrypting-openssh-sessions-for-fun-and-profit/';
  
//   const { body: html, url } = await got(targetUrl)
//   const metadata = await metascraper({ html, url })
//   return {
//     props: {
//       metadata
//     },
//   }
// }

const Index = ({metadata}) => { 

  return (
    <Layout>
        <AllPosts />
    </Layout>
  );

};

export default Index;