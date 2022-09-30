import React from 'react';


const NewsPage = (props) => {
    console.log(props)
    return (
        <>
            {props.news.filter(item => item.title).map((item) =>


                <li className="list-none border-b py-3"
                    key={item.objectID}>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p><a href={item.url} target="_blank">Read more</a></p>

                </li>
            )}
        </>
    )
}

export default NewsPage


