import React, { Component } from 'react';
import styles from './feedbackOptions.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div className={styles.optionsWrapper}>
        {this.this.props.title.map(type => {
          return (
            <button
              key={type}
              type="button"
              className={styles.button}
              onClick={onLeaveFeedback(String.toLowerCase(type))}
            >
              {type}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
