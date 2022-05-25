import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Blog extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  refreshList() {
    fetch("http://localhost:5183/api/Category")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categories: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>CategoryId</th>
              <th>CategoryName</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat: any) => (
              <tr key={cat.CategoryId}>
                <td>{cat.CategoryId}</td>
                <td>{cat.CategoryName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
