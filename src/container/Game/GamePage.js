import React from 'react';
import { connect } from "react-redux";

import { Board, Card } from '../../components'; 

const GamePage = ({ isActive, onCardClick }) => (
  <Board>
    <Card name="Testing Card" isActive={isActive} onClick={onCardClick} />
  </Board>
);

// class GamePage extends React.Component {
//   state = { isActive: false };

//   handleCardClick = () => {
//     this.setState(prevState => ({
//       isActive: !prevState.isActive
//     }))
//   };

//   render() {
//     return (
//       <Board>
//         <Card name="Testing Card" isActive={this.state.isActive} onClick={this.handleCardClick} />
//       </Board>
//     );
//   }
// }

const mapStateToProps = state => ({
  isActive: state.isActive
});

const mapDispacherProps = dispacher => ({
  onCardClick: () => {
    dispacher({ type: "SELECT_CARD"});
  }
});

export default connect(mapStateToProps, mapDispacherProps)(GamePage);