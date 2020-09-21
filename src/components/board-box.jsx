import React from 'react';

export const Box = (props) => {
	return (
     <button className="board_box" onClick={props.onClick}>
       {props.value}
     </button>
     )
}