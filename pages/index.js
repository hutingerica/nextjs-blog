import Link from 'next/link'
import styled from 'styled-components'

import Date from '../components/date'
import Layout from '../components/layout'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({allPostsData}) {
  return (
    <Layout home>
      <HomeContentWrapper>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}><a>{title}</a></Link>
                <Date dateString={date} />
              </li>
            ))}
        </ul>
      </HomeContentWrapper>
    </Layout>
  )}

  const HomeContentWrapper = styled.section`
    font-size: 1.2rem;
    line-height: 1.5;
    padding-top: 1px;

    h2 {
      font-size: 1.5rem;
      line-height: 1.4;
      margin: 1rem 0;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      display: flex;
      flex-direction: column;
      margin: 0 0 1.25rem;
    }
  `