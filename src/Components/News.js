import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {

    const fetchNews = async () => {

      setLoading(true);

      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_KEY}&page=${page}&pageSize=${props.pageSize}`;

      const response = await fetch(url);
      const data = await response.json();

      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
      setLoading(false);
    };

    fetchNews();

  }, [props.category, page, props.country, props.pageSize]);

  const prevPg = () => {
    setPage(prev => prev - 1);
  };

  const nxtPg = () => {
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) return;
    setPage(prev => prev + 1);
  };

  return (
    <div className='container my-3'>

      <h2 className="section-title">
        📰 Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
      </h2>

      {loading && <Loading/>}

      <div className='row'>

        {!loading && articles.map((element) => (

          <div className='col-md-4' key={element.url}>
            <NewsItems
              title={element.title ? element.title.slice(0, 45) : "No Title Available"}
              description={element.description ? element.description.slice(0, 90) : "No Description Available"}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>

        ))}

      </div>

      <div className="container my-3 d-flex justify-content-between">

        <button 
          className="btn btn-dark"
          disabled={page <= 1}
          onClick={prevPg}
        >
          ← Previous
        </button>

        <button 
          className="btn btn-dark"
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          onClick={nxtPg}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

News.defaultProps = {
  country: "us",
  pageSize: 12,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;
