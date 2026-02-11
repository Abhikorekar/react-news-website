import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {

    let { title, description, imgUrl, newsUrl } = this.props;

    return (
      <div className="news-card">

        <img
          src={!imgUrl 
            ? "https://techcrunch.com/wp-content/uploads/2024/03/JPM-hero-GettyImages-1492413753.jpg?resize=1200,800"
            : imgUrl}
          alt="news"
        />

        <div className="news-content">
          <h5>{title}</h5>

          <p>{description}</p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-read"
          >
            Read More →
          </a>
        </div>

      </div>
    )
  }
}

export default NewsItems
