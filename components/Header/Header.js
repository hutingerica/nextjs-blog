import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Hello World';
export default function Header({style}) {

    return (
        <ToggleHeader>
            { style ? ( /* Home Page Header*/
                        <>
                            <StyledImage
                                src="/images/profile.jpg"
                                height={144}
                                width={144}
                                alt={name}
                            />
                            <h1>{name}</h1>
                        </>
                    ) : ( /* Other Pages Header*/
                        <>
                            <Link href="/">
                                <a>
                                <StyledImage
                                    src="/images/profile.jpg"
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                                </a>
                            </Link>
                            <h2>
                                <Link href="/">
                                    <a>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )
            }
        </ToggleHeader>
    )
}

const HeaderBase = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ToggleHeader = styled(HeaderBase)`
    h1{
        font-size: 2.5rem;
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: -0.05rem;
        margin: 1rem 0;
    }
    h2 {
        font-size: 1.5rem;
        line-height: 1.4;
        margin: 1rem 0;
    }
    a {
        color: inherit;
    }
`
const StyledImage = styled(Image)`
    border-radius: 9999px;
`
