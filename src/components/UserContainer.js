import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
//import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class userContainer extends Component {
  state = {
    result: {},
    filteredList: {},
    search: ""
  };

  // When this component mounts, search for all
  componentDidMount() {
    this.searchUsers("");
  }

  searchUsers = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }, ()=>console.log(this.state)))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const userList = 
    this.setState({
      [name]: value
    }, ()=>this.filterListUSers());
  };

filterListUSers = () => {
    const filterList = this.state.users.map();
    this.setState({
        users : this.filterListUsers
    })
}
  // When the form is submitted, search the API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            {/* <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}

              {this.state.search ? this.state.result.filter( user => this.state.search === user.lastName).map() (

              )
             {this.state.result.filter().map(
            >
              {this.state.result.Title ? (
                <UserDetail
                  name={this.state.result.name}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card> */}
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default userContainer;
