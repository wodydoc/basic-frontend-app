import React from 'react';

export default function SearchList(props) {
  return (
      <div className="lyrics-list">
        <input className="noteSearch" type="search" placeholder="Search..." onChange={(event) => {
          props.updateShowingSongs(event.target.value)
        }}/>
      </div>
  )
}

