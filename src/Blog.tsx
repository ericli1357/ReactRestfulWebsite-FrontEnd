import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Blog extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      articles: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5183/api/Article")
      .then((response) => response.json())
      .then((articles) => {
        this.setState({ articles });
      });
    fetch("http://localhost:5183/api/Category")
      .then((response) => response.json())
      .then((categories) => {
        this.setState({ categories });
      });
  }
  onChangeCategory = (event: any) => {
    this.setState({ value: event.target.value });
    fetch(
      "http://localhost:5183/api/Article/getArticleByCategory/" +
        event.target.value
    )
      .then((response) => response.json())
      .then((articles) => {
        this.setState({ articles });
      });
  };

  render() {
    const { articles } = this.state;
    const { categories } = this.state;
    if (articles.length > 1) {
      return (
        <div>
          <select className="form-control" onChange={this.onChangeCategory}>
            {categories.map((c: any) => (
              <option key={c.categoryId} value={c.categoryName}>
                {c.categoryName}
              </option>
            ))}
          </select>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ArticleId</th>
                <th>Title</th>
                <th>Body</th>
                <th>DatePublished</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a: any) => (
                <tr key={a.articleId}>
                  <td>{a.articleId}</td>
                  <td>{a.title}</td>
                  <td>{a.body}</td>
                  <td>{a.datePublished}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
