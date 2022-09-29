import React from 'react'
import { useState, useEffect } from 'react'

const NewsFetch = (props) => {
    console.log(props)

    const { loading, setLoading, newsType, setNewsType, news, setNews, searchType, setSearchType } = props
    async function request() {
        try {
            const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchType}`)
            const object = await res.json()
            setNews(object.hits)
            setLoading(false)
        } catch {
            console.log("nope it is not working")
        }
    }

    useEffect(() => {

        request()
    }, [searchType])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchType(newsType)
        console.log(news)
    }



    return (
        <div className="mt-8 text-center">
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Search…"
                    className="search"
                    onChange={event => setNewsType(event.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>

    )
}

export default NewsFetch

