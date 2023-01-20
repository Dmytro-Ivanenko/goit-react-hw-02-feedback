import React, { Component } from 'react';
import Section from '../components/Section/Section';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';

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

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
    );
  }
}

export default App;
