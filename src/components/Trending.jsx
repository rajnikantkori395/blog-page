import React, { useContext, useState } from 'react'
import { FeatureTitle, Heading, Hr, NavButton, Row, Row1 } from '../styles/Featured.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShareNodes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { LeftContainer, LImage, Row2, Row3 } from '../styles/Latest.style';
import { Context } from '../App';
import { Button, Section, Row4, NavButton2 } from '../styles/Pagination.style';

const Trending = () => {
    const apiData = useContext(Context);
    const randomIndex = Math.floor(Math.random() * apiData.length);
    const temp = apiData.slice(randomIndex, randomIndex + 20);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(2);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = temp.slice(firstPostIndex, lastPostIndex);

    const Pagination = () => {
        const decrement = () => {
            setPostPerPage(2);
            setCurrentPage(currentPage - 1);
        }
        const increment = () => {
            setPostPerPage(2);
            setCurrentPage(currentPage + 1);
        }
        const seeMore = () => setPostPerPage((prev) => prev + 2);
        return (<>
            <Section>
                <Button disabled={currentPage === 1 ? true : false} onClick={decrement}><FontAwesomeIcon icon={faArrowLeft} /> </Button>
                <Button disabled={currentPage === 10 ? true : false} onClick={increment}><FontAwesomeIcon icon={faArrowRight} /> </Button>
            </Section>
            <Row4>
                <NavButton2 onClick={seeMore}>See More</NavButton2>
            </Row4>
        </>
        )
    }

    return (
        <>
            <Row>
                <Hr marginright={true} />
                <Heading>Trending</Heading>
                <Hr marginleft={true} />
            </Row>
            <Row2 spaceBetween>
                {currentPosts.length && currentPosts.map((post) => {
                    return (
                        <LeftContainer key={post.id} >
                            <LImage src={post.featuredImage.link} />
                            <Row1><p>Places</p> <p><FontAwesomeIcon icon={faShareNodes} /></p></Row1>
                            <FeatureTitle>{post.title}</FeatureTitle>
                            <p>{post.meta.description}</p>
                            <Row3>
                                <NavButton>New year celebration...</NavButton>
                                <NavButton marginleft>New year celebration...</NavButton>
                            </Row3>
                            <Row1><p>{post.date}</p>  <p><FontAwesomeIcon icon={faEye} />10k Viewers</p></Row1>
                        </LeftContainer>
                    )
                })}
            </Row2>
            <Pagination />
        </>
    )
}

export default Trending