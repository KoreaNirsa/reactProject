import HeaderComponent from "../../components/common/headerComponent"
import NavComponent from "../../components/common/navComponent"
import FooterComponent from "../../components/common/footerComponent"
import PostsComponent from "../../components/board/PostsComponent"
import SearchComponenet from "../../components/board/SearchComponent"

import { useDispatch } from "react-redux"
import { useLocation } from 'react-router-dom'
import { useEffect } from "react"
import { fetchBoardList } from "../../modules/boardListSlice"
import { useState } from "react"
import PageButtonComponent from "../../components/board/PageButtonComponent"

export default function List() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [selectText, setSelectText] = useState('');
    const [selectCategory, setSelectCategory] = useState('title');

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const currentPage = params.get('currentPage') || 1;
        const category = params.get('category') || 'title';
        const text = params.get('text') || '';

        setSelectText(text);
        setSelectCategory(category);

        dispatch(
            fetchBoardList({
                currentPage: currentPage,
                category: selectCategory,
                text: selectText
            })
        )
    }, [location.key, dispatch])

    const handleSearch = () => {
        dispatch(
            fetchBoardList({
                currentPage: 1,
                category: selectCategory,
                text: selectText
            })
        )
    }

    const handlePageButton = (currentPage) => {
        dispatch(
            fetchBoardList({
                currentPage: currentPage,
                category: selectCategory,
                text: selectText
            })
        )
    }

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <NavComponent></NavComponent>
            <section>
                <SearchComponenet
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                    setSelectText={setSelectText}
                    handleSearch={handleSearch}>
                </SearchComponenet>
                <PostsComponent></PostsComponent>
                <PageButtonComponent handlePageButton={handlePageButton}></PageButtonComponent>
            </section>
            <FooterComponent></FooterComponent>
        </>
    )
}