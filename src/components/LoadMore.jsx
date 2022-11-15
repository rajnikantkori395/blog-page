import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App';
import { LoadButton, Row5 } from '../styles/LoadMore.style';
import Category from './Category';

const LoadMore = () => {

    const apiData = useContext(Context);
    const [category, setCategory] = useState([]);
    const backgroundColor = '#0a9e88';
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(1);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = category.slice(firstPostIndex, lastPostIndex);
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
        cat = [...new Map(cat.map((item) => [item["name"], item])).values()];
        return setCategory(cat);
    }

    const increment = () => {
        setPostPerPage(postsPerPage + 1);
        console.log('click');
        console.log(currentPosts, category);
    }

    useEffect(() => {
        getAllCategory();
    }, [])
    return (
        <>
            {
                currentPosts.length ? currentPosts.map((e) => {
                    return <Category key={e.id} categoryName={e.name} category={e.category} />
                }) : 'Loading...'
            }
            < Row5 >
                <LoadButton onClick={increment} primary={backgroundColor}>Load More</LoadButton>
            </Row5 >
        </>

    )
}

export default LoadMore