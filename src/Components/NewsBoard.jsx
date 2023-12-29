import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from './NewsCard';



const NewsBoard = ({category}) => {
    const [article, setArticle] = useState([]);
    const apiKey = import.meta.env.VITE_NEWS_API_KEY
    console.log(apiKey);

    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`


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