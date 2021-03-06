import React, { Component } from "react";
import axios from "axios";
import './style.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeCard from "../RecipeCard";
const api_Key = "fa3502941336b2865937f7efea9a0b60";
const api_ID = "3aaa0d6e";

class Recipes extends Component {
  state = {
    recipeTitle: "",
    recipeDetail: {},
    recipeTwoDetail: {},
    recipeThreeDetail: {},
    gotRecipe: false,
  };

  getRecipe = async event => {
    event.preventDefault();


    try {
      const { data } = await axios.get(
        `https://api.edamam.com/search?q=${this.state.recipeTitle}&app_id=${api_ID}&app_key=${api_Key}`
      );
      if (data.more === false) {
        this.setState({ gotRecipe: false })
        return
      }
      this.setState({
        recipeDetail: data.hits[0],
        recipeTwoDetail: data.hits[1],
        recipeThreeDetail: data.hits[2],
        gotRecipe: true,
      });
    } catch (e) {
      console.log(e);
    }

  };
  handleInput = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg="4">
            <div className="card delta">
              <div className="card-body">
                <h5 className="card-title">Recipe Finder</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  For when you don't know what to make of it.
                </h6>
                <form>
                  <input
                    type="text"
                    name="recipeTitle"
                    value={this.state.recipeTitle}
                    onChange={this.handleInput}
                  />
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    onClick={this.getRecipe}
                    type="button"
                  >
                    Get Recipes
                  </button>
                </form>
                <p>
                  Type in an ingredient or the name something you have in your
                  fridge
                </p>
              </div>
            </div>
          </Col>
          <Col md="auto">
            {this.state.gotRecipe ? (
              <RecipeCard
                image={this.state.recipeDetail.recipe.image}
                address={this.state.recipeDetail.recipe.url}
                food={this.state.recipeDetail.recipe.label}
                type={this.state.recipeDetail.recipe.totalTime}
              />
            ) : null}
          </Col>
          <Col md="auto">
            {this.state.gotRecipe ? (
              <RecipeCard
                image={this.state.recipeTwoDetail.recipe.image}
                address={this.state.recipeTwoDetail.recipe.url}
                food={this.state.recipeTwoDetail.recipe.label}
                type={this.state.recipeTwoDetail.recipe.totalTime}
              />
            ) : null}
          </Col>
          <Col md="auto">
            {this.state.gotRecipe ? (
              <RecipeCard
                image={this.state.recipeThreeDetail.recipe.image}
                address={this.state.recipeThreeDetail.recipe.url}
                food={this.state.recipeThreeDetail.recipe.label}
                type={this.state.recipeThreeDetail.recipe.totalTime}
              />
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recipes;