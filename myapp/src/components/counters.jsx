import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onRest, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onRest} className="btn btn-primary btn-sm m-2">
          reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            //value={counter.value}
            //id={counter.id}
            //selected={counter.selected}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
