import React from 'react';


const NewsPage = (props) => {
    console.log(props)
    return (
        <>
            {props.news.filter(item => item.title).map((item) =>
                <li key={item.objectID}>
                    <h3>{item.title}</h3>
                    <a href={item.url} target="_blank">See More</a>
                </li>
            )}
        </>
    )
}

export default NewsPage


