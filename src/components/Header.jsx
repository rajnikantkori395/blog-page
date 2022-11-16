
import { Banner, BannerImage, Button, MoreButton, NavButton, Row, Row1, SearchBar, SearchInput } from '../styles/Header.style';
import banner from '../assets/banner.png'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../App';

const Header = () => {
    const apiData = useContext(Context);
    const [category, setCategory] = useState([]);
    const backgroundColor = '#0a9e88';
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const navButtons = category.slice(firstPostIndex, lastPostIndex);

    let cat = [];
    function getAllCategory() {
        let i = 0;
        for (let e of apiData) {
            if (e.categories[i] != null) {
                cat.push({
                    id: e.categories[i].id,
                    category: e.categories[i].slug,
                    name: e.categories[i].name
                })
                i++;
            } else {
                i = 0;
            }
        }
        cat = [...new Map(cat.map((item) => [item["name"], item])).values()];  // getting unique categories name
        return setCategory(cat);
    }

    const MoreButtons = () => {
        const increment = () =>{
            setPostPerPage(postsPerPage + 6);
        } 
        return <MoreButton  onClick={increment} primary={backgroundColor}>More</MoreButton>
    }

    useEffect(() => {
        getAllCategory();
    }, [])

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
            {
                navButtons.length ? navButtons.map((e) => {
                    return <NavButton key={e.id} to={`/${e.category}`} outline={backgroundColor}>{e.name}</NavButton>
                }) : 'getting navigations'
            }
            <MoreButtons />

        </Row>

    </>


}

export default Header;
