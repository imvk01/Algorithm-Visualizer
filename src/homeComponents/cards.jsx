import React, { Component } from "react";
import ImgMediaCard2 from "./card2";
import "./style.css";
import { getDetails } from "./cardDetails";

class Cards extends Component {
  state = {
    cards: [],
    filter: "",
  };

  componentDidMount() {
    this.setState({ cards: getDetails() });
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
          {this.state.cards
            .filter(
              (card) =>
                card.title
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase()) ||
                card.description
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase())
            )
            .map((card) => (
              <div>
                <ImgMediaCard2
                  className="d-flex flex-wrap"
                  key={card.id}
                  card={card}
                />
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
