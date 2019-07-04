import React, { memo } from "react";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export const SpaceshipDetails = memo(props => {
  return (
    <div>
      <h3>Spaceship details</h3>

      <div className="spaceship-details">
        <ReactCSSTransitionGroup
          transitionName="animation"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          {props.spaceshipData !== null
            ? props.spaceshipDataKeys.map(key => {
                return (
                  <div key={key} className="spaceship-details-section">
                    <label>{key}</label>
                    <span>{props.spaceshipData[key]}</span>
                  </div>
                );
              })
            : null}
        </ReactCSSTransitionGroup>
      </div>

      <Link to="/">Go back</Link>
    </div>
  );
});
