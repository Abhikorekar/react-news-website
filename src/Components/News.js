import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {

    static defaultProps =
    {   
      country :  "us",
      pageSize: 12,
      category: 'general',

    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }


  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0
    };
  }

  async updateNews()
  {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a38f811d308c427dbdc83a5bc2c43d44&page=${this.state.page}&pageSize=12`;
    const data = await fetch(url);
    const parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults
    });
  }




  async componentDidMount() {
      this.updateNews();
  }

  prevPg = async () => {
      this.setState({page: this.state.page - 1});
      this.updateNews();
  }

  nxtPg = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
      return;
    } else {
      this.setState({page: this.state.page + 1});
      this.updateNews();
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Headlines</h2>
        {this.state.loading && <Loading/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => (
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
          <button type="button" onClick={this.prevPg} className="btn btn-dark" disabled={this.state.page <= 1}>
            &larr; Previous
          </button>

          <button type="button" onClick={this.nxtPg} className="btn btn-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
