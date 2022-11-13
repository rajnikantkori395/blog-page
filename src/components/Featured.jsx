import React from 'react'
import Carousel from 'styled-components-carousel';
import { Hr, Row } from '../styles/Featured.style'

const Featured = () => {

    const obj = {
        height: '77vh',
        width: '100%'
    }

    const Slides = () => (<Carousel
        center
        infinite
        showArrows
        showIndicator
        slidesToShow={1}
    >
        <div>
            <span><img style={obj} src="https://static.wanderon.in/wp-content/uploads/2022/10/feature-images.jpg" /></span>
            <Row1><p>places</p> <p>icon</p></Row1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem at minima neque placeat animi reprehenderit ipsum ex? Non ducimus beatae sed accusantium ea voluptate incidunt odit perferendis laudantium repellendus.</p>
        </div>
        <div>
            <span><img style={obj} src="https://static.wanderon.in/wp-content/uploads/2019/09/featured-image.jpg" /></span>
        </div>
        <div>
            <span><img style={obj} src="https://static.wanderon.in/wp-content/uploads/2020/03/features-image.jpg" /></span>
        </div>

    </Carousel>
    )


    return (
        <>
            <Row>
                <Hr marginright={true} />
                <h1>Featured</h1>
                <Hr marginleft={true} />
            </Row>
            <Slides />
        </>

    )
}

export default Featured