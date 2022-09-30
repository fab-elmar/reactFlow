import React from 'react';


const NewsPage = (props) => {
    console.log(props)
    return (
        <>
            {props.loading ? (<h1>Loading</h1>) : (props.news.filter(item => item.title).map((item) =>
                <li className="list-none border-b border-orange-200 py-3"
                    key={item.objectID}>
                    <h3 className="px-5 text-gray-800 text-xl font-bold">{item.title}</h3>
                    <p className="px-5 text-gray-400 hover:text-gray-500"><a href={item.url} target="_blank">Read more &#8599;</a></p>
                </li>
            ))}
        </>
    )
}


export default NewsPage


