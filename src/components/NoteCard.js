import React from 'react'

export default function NoteCard(props) {
    const {title, text, link} = props.note;
    return (
        <div className="note-card">
             <p>{title}</p>
             <p>{text}</p>
             <p>{link}</p>
           
        </div>
    )
}