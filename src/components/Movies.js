import React from 'react'

export  function Movies(props) {
    return (
        <div>
            {props.movie.map((mov, i) => {
                return(
                    <div key = {i} className="movie-div"> 
                    <div style={{margin:"0 auto", width:"100%", textAlign:"center"}}>
                    <span> Film Adı: </span> <p> {mov.fullTitle}</p><br></br>
                    <span>IMDB Sırası:  </span> <p>{mov.rank} </p><br></br>
                    <span>Vizyon Tarihi:  </span>  <p> {mov.year} </p><br></br>
                    <span>Ekip:  </span> <p> {mov.crew} </p><br></br>
                    <span>IMDB Rating:   </span>  <p>{mov.imDbRating} </p><br></br>
                     <img src={mov.image} alt={mov.fullTitle} width="250px" height="250px"/>
                     </div>
                    </div>
                )
            })}
        </div>
    )
}
