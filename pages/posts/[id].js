import Head from 'next/head'
import styled from 'styled-components'

import { getAllPostIds, getPostData } from '../../lib/posts'

import Layout, { siteTitle } from '../../components/layout'
import Date from '../../components/date'


export default function Post({ postData }) {
    return (
    <Layout>
        <Head>
            <title>{postData.title} | { siteTitle } </title>
        </Head>
        <ArticleWrapper>
            <h1>{postData.title}</h1>
            <Date dateString={postData.date} />
            <ContentWrapper dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </ArticleWrapper>
    </Layout>
    )
  }

const ArticleWrapper = styled.article`
  h1{
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }
`
const ContentWrapper = styled.div`
    line-height: 1.75;
`

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }