import React, { useContext } from 'react'
import Carousel from 'styled-components-carousel';
import { FeatureTitle, FImage, Heading, Hr, NavButton, Row, Row1 } from '../styles/Featured.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../App';

const Featured = () => {
    
    const apiData = useContext(Context);
    let randomIndex = Math.floor(Math.random() * apiData.length);
    const filterData = apiData.slice(randomIndex, randomIndex + 5);   
    
    const Slides = () => (<Carousel
        center
        infinite
        showArrows={true}
        showIndicator
        // centerPadding={false}
        slidesToShow={1}
    >
        {
            filterData.length && filterData.map((e) => {
                return <div key={e.id}>
                    <span><FImage  src={e.featuredImage.link} alt={e.featuredImage.altText} /></span>
                    <Row1><p>Places</p> <p><FontAwesomeIcon icon={faShareNodes} /></p></Row1>
                    <FeatureTitle>{e.title}</FeatureTitle>
                    <p>{e.meta.description}</p>
                    <NavButton>New year celebration...</NavButton>
                    <NavButton marginleft>New year celebration...</NavButton>
                    <Row1><p>{e.date}</p>  <p> <FontAwesomeIcon icon={faEye} />10k Viewers</p></Row1>
                </div>
            })
        }
    </Carousel>
    )
    return (
        <>
            <Row>
                <Hr marginright={true} />
                <Heading>Featured</Heading>
                <Hr marginleft={true} />
            </Row>
            <Slides />
        </>

    )
}

export default Featured