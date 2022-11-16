import React from 'react'
import { Box, BoxDesc, BoxTitle, List, Section2 } from '../styles/About.style'

const About = () => {
    return (
        <Section2>
            <Box>
                <List>
                    <BoxTitle>About Us</BoxTitle>
                    <BoxDesc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non quod
                        accusamus necessitatibus molestias laboriosam nostrum, blanditiis nesciunt adipisci, perferendis et ipsa
                        autem labore corrupti, quae voluptatibus nam? Sit facere consequatur neque expedita architecto quibusdam
                        at delectus sequi fugiat.
                    </BoxDesc>
                </List>
            </Box>
            <hr />
            <Box>
                <List>
                    <BoxTitle>Weakend Trips</BoxTitle>
                    <BoxDesc>
                        <li>Bir Billing</li>
                        <li>Chopta Tungunath</li>

                    </BoxDesc>
                    <BoxTitle>Himalayan Escapades</BoxTitle>
                    <BoxDesc>
                        <li>Bir Billing</li>
                        <li>Chopta Tungunath</li>
                    </BoxDesc>
                </List>
            </Box>

            <hr />
            <Box>
                <List>
                    <BoxTitle>Backpacking Trips</BoxTitle>
                    <BoxDesc>
                        <li>Himachal Backpacking</li>
                        <li>Spiti Valley Trips</li>
                    </BoxDesc>
                    <BoxTitle>Blogs</BoxTitle>
                    <BoxDesc>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ad.
                    </BoxDesc>
                </List>
            </Box>
            <hr />
            <Box>
                <List>
                    <BoxTitle>Quick Links</BoxTitle>
                    <BoxDesc>
                        <li>Privacy Policy</li>
                        <li>Cancellation Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Disclaimer</li>
                        <li>About Us</li>
                    </BoxDesc>
                </List>
            </Box>

        </Section2>


    )
}

export default About