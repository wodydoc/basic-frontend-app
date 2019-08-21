import React from 'react'

export default function DeckCard(props) {
    const {word, translation} = props.deck;
    return (
        <div className="deck-card">
             <h2>{word}</h2>
             <p>{translation}</p>
           
        </div>
    )
}