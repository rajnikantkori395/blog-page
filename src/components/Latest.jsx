import React, { useContext, useState } from 'react'
import { FeatureTitle, Heading, Hr, NavButton, Row, Row1 } from '../styles/Featured.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShareNodes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LeftContainer, LImage, Row2, Row3 } from '../styles/Latest.style';
import { Context } from '../App';
import { Button, NavButton2, Row4, Section } from '../styles/Pagination.style';

const Latest = () => {
    const apiData = useContext(Context);
    const tempData = apiData.sort((a, b) => new Date(b) - new Date(a)).slice(0, 20);
    //pagination...
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(2);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = tempData.slice(firstPostIndex, lastPostIndex);

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
                <Heading>Latest</Heading>
                <Hr marginleft={true} />
            </Row>
            <Row2 spaceBetween>
                {currentPosts.length && currentPosts.map((post,index) => {
                    return (
                            <LeftContainer key={post.id}>
                                <LImage src={post.featuredImage.link} />
                                <Row1><p>Places</p> <p><FontAwesomeIcon icon={faShareNodes} /></p></Row1>
                                <FeatureTitle>{post.title}</FeatureTitle>
                                <p>{post.meta.description}</p>
                                <Row3>
                                    <NavButton>New year celebration...</NavButton>
                                    <NavButton marginleft>New year celebration...</NavButton>
                                </Row3>
                                <Row1><p>{post.date}</p> <p><FontAwesomeIcon icon={faEye} />10k Viewers</p></Row1>
                            </LeftContainer>
                    )
                })}
            </Row2>
            <Pagination/>
        </>
    )   
}

export default Latest