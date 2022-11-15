import React, { useContext, useEffect, useState } from 'react'
import { FeatureTitle, Heading, Hr, NavButton, Row, Row1 } from '../styles/Featured.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShareNodes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { LeftContainer, LImage, Row2, Row3 } from '../styles/Latest.style';
import { Context } from '../App';
import { Button, Section, Row4, NavButton2 } from '../styles/Pagination.style';

const Backpacking = () => {
    const apiData = useContext(Context);
    const [filterData, setFilterData] = useState([]);

    
    function getData() {
        let temp = [];
        let i = 0;
        for (let e of apiData) {
            if (e.categories[i] != null) {
                if (e.categories[i].slug === 'backpacking')
                    temp.push(e);
                i++;
            } else {
                i = 0;
            }
        }
        return setFilterData(temp);
    }
    useEffect(() => {
        getData();
    }, []);

    // pagination.........
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(2);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filterData.slice(firstPostIndex, lastPostIndex);

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
                <Button disabled={currentPage === Math.floor(filterData.length/2) ? true : false} onClick={increment}><FontAwesomeIcon icon={faArrowRight} /> </Button>
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
                <Heading>Backpacking Trips</Heading>
                <Hr marginleft={true} />
            </Row>
            <Row2 spaceBetween>
                {currentPosts.length == 0 ? <h1>No more posts.</h1> : currentPosts.map((post) => {
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
                            <Row1><p>{post.date}</p> <p><FontAwesomeIcon icon={faEye} />10k Viewers</p></Row1>
                        </LeftContainer>
                    )
                })}
            </Row2>
            <Pagination />
        </>
    )
}


export default Backpacking