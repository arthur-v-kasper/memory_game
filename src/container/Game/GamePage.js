import React from 'react';
import { connect } from "react-redux";

import { Board, Card } from '../../components'; 

import { selectCard } from "../../store/actions";

const GamePage = ({ cards, onCardClick }) => (
  <Board>
    {cards.map(card => (
      <Card key={card.key} name={card.name} isActive={card.isActive} 
        onClick={() => {
          onCardClick(card.key);
        }} 
      />
    ))}
  </Board>
);

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispacherToProps = {
  onCardClick: selectCard
}

export default connect(mapStateToProps, mapDispacherToProps)(GamePage);