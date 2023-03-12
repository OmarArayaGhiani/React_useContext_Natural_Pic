import "../assets/css/galeria.css"

import {useContext, useState} from "react"
import Context from "../context"

const Favoritos = () => {
  const {photos} = useContext(Context)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-4 p-3">
        {photos.map((element, index) => {
          if (element.liked == true)
            return (
              <div
                key={index}
                className="foto"
                style={{backgroundImage: `url(${element.src.large})`}}
              >
              </div>
              
            )
        })}
      </div>
    </div>
  )
}

export default Favoritos
