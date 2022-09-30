import React, { useState, useEffect } from 'react'

const NewsFetch = (props) => {
    console.log(props)

    const { page, setPage, hitsPerPage, setHitsPerPage, loading, setLoading, newsType, setNewsType, news, setNews, searchType, setSearchType } = props
    async function request() {
        try {
            const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchType}&page=${page}&hitsPerPage=${hitsPerPage}`)
            const object = await res.json()
            setNews(object.hits)
            setLoading(false)
        } catch {
            console.log("nope it is not working")
        }
    }

    useEffect(() => {

        request()
    }, [searchType, page, hitsPerPage])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchType(newsType)
        console.log(news)
    }
    // function handpagnr.    setHitsPage (value.inputpage)


    return (
        <div className="mt-8 text-center">
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Search…"
                    className="search  rounded border-2 border-black"
                    onChange={event => setNewsType(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            <h5 className='mt-8'>Hits per Page</h5>
            <button
                className="my-2 mx-2 py-2 px-5  border rounded"
                onClick={() => setHitsPerPage(10)}>10</button>
            <button
                className="my-2 mx-2 py-2 px-5 text-lg border rounded"
                onClick={() => setHitsPerPage(20)}>20</button>
            <button
                className="my-2 mx-2 py-2 px-5 text-lg border rounded"
                onClick={() => setHitsPerPage(50)}>50</button>

        </div>

    )
}

export default NewsFetch

