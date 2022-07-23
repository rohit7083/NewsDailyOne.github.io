import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl,author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-warning" style={{left:'90%',zIndex:'1' , color:'black'}}>
    {source}</span>
           <img src={!imageUrl?"https://i.ytimg.com/vi/T-7wke-DhCU/hqdefault.jpg"
                : imageUrl}className="card-img-top" alt="..."  /> 
          {/* <img src={imageUrl}className="card-img-top" alt="..." /> */}
          <div className="card-body">
         
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            {/* for null author to set Unkonwn alternative method  */}
            {/* <p className="card-text"><small className="text-muted">By {!author?"unknown":author} {date}</small></p> */}

            <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-danger"> Read more</a>
          </div>
        </div>
      </div>
    );
  }
}
