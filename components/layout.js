import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Header from '../components/Header'

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return(
        <LayoutWrapper>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header style={home}/>
            <main>{children}</main>
            {!home && (
                <BackhomeWrapper>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </BackhomeWrapper>
            )}
        </LayoutWrapper>
    )}

const LayoutWrapper = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
`
const BackhomeWrapper = styled.div`
    margin: 3rem 0 0;
`