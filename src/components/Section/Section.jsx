import React from 'react';
import styles from './section.module.scss';

// class Section extends Component {
//   render() {
//     const { children } = this.props;

//     return (
//       <>
//         <h2 className={styles.title}>{this.props.title}</h2>
//         {children}
//       </>
//     );
//   }
// }

function Section({ children, title }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
}

export default Section;
