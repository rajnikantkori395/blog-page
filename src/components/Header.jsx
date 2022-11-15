
import { Banner, BannerImage, Button, NavButton, Row, Row1, SearchBar, SearchInput } from '../styles/Header.style';
import banner from '../assets/banner.png'
const Header = () => {

    const backgroundColor = '#0a9e88';
    return <>
        <Banner>

            <Row1>
                <h1>Blogs</h1>
                <BannerImage src={banner} />
                <SearchBar>
                <SearchInput type='text' placeholder='search' /><Button>Search</Button>
                </SearchBar>
            </Row1>
        </Banner>
        <Row>
            <NavButton outline={backgroundColor}>Trips</NavButton>
            <NavButton outline={backgroundColor}>Food</NavButton>
            <NavButton outline={backgroundColor}>Hotel</NavButton>
            <NavButton outline={backgroundColor}>Places</NavButton>
            <NavButton outline={backgroundColor}>Adventure</NavButton>
            <NavButton outline={backgroundColor}>Workcation</NavButton>
            <NavButton primary={backgroundColor}>More</NavButton>
        </Row>

    </>


}

export default Header;
