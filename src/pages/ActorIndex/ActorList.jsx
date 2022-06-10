import React from 'react';
import ActorListItem from './ActorListItem';

function ActorList({cast}){
    
    return(
        <ul>
            {cast.map((c, idx) => (
                <ActorListItem cast={c} index={idx}/>
            ))}
        </ul>
    )
}

export default ActorList;