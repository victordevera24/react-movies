

export default function ActorCard({movies}){
    let actorList = []
    for(let i = 0; i<movies.length; i++){
        for(let j=0; j<movies[i].cast.length; j++){
            actorList.push(movies[i].cast[j])
        }
    }
    actorList = [...new Set(actorList)].sort()
    return(
        <div>
            {actorList.map((c, idx) => (
                <div className="actorCard">
                <p>{c}</p>
                </div>
            ))}
        </div>
    )
}