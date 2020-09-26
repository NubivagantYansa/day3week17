import React, { Component } from 'react';

export default class TodaySFoodContainer extends Component {
  render() {
    const totalCalories = this.props.todayFood.reduce(
      (acc, element) => acc + element.calories,
      0
    );
    return (
      <div>
        <h1> Today's food</h1>
        <ul>
          {this.props.todayFood.map((element, index) => {
            return (
              <div>
                <li key={index}>
                  {element.quantity} {element.name} = {element.calories} Cal
                </li>
                <div>
                  <button
                    className="button is-danger"
                    onClick={() => this.props.deleteTodaySFood(element.name)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
          <p> Total: {totalCalories} calories</p>
        </ul>
      </div>
    );
  }
}
