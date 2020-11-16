import dynamic from 'next/dynamic'
import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import  { gql } from 'apollo-boost';
import Layout from '../components/Layout'

import InitPosts from '../components/InitPosts';
import AllPosts from '../components/AllPosts';

import useSWR from 'swr'
const fetcher = query => request('https://api.graph.cool/simple/v1/movies', query);

const metascraper = require('metascraper')([
  require('metascraper-image')(),
])

const got = require('got');

export async function getStaticProps(params) {
  const targetUrl = 'https://research.nccgroup.com/2020/11/11/decrypting-openssh-sessions-for-fun-and-profit/';
  
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  return {
    props: {
      metadata
    },
  }
}

const Index = ({metadata}) => { 

  useEffect(() => {
    metadata
  })

  return (
    <Layout>
        <AllPosts />
    </Layout>
  );

};

export default Index;