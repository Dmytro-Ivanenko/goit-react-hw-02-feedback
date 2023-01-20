import React, { Component } from 'react';
import Section from '../components/Section/Section';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistics from '../components/Statistics/Statistics';
import Notification from '../components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evn => {
    this.setState({
      [evn.target.name]: this.state[evn.target.name] + 1,
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((count, value) => {
      return count + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const result = total > 0 ? (this.state.good / total) * 100 : 0;
    return result;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
