import React from 'react'

export default function DeckCard(props) {
    const {word, translation} = props.deck;
    return (
        <div className="deck-card">
             <p>{word}</p>
             <p>{translation}</p>
           
        </div>
    )
}