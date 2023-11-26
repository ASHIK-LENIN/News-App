import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from './NewsCard';

const NewsBoard = ({category}) => {
    const [article, setArticle] = useState([]);

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4888add27524460788d5651177a0f12b`


    useEffect(() => {

        axios.get(url).then((response) => {
            setArticle(response.data.articles);

        });


    }, [category])
console.log(article);

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            {article.map((item, index) => {
                return <NewsCard 
                key={index}  
                title={item.title}  
                description={item.description}
                src={item.urlToImage} 
                url={item.url} />
            } )}

        </div>
    )
}

export default NewsBoard