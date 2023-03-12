import "../assets/css/galeria.css"

import {useContext} from "react"
import Context from "../context"
import Heart from "./Heart"

const Home = () => {
  const {photos, setPhotos} = useContext(Context)

  const fill = (index) => {
    if (photos[index].liked == false) {
      photos[index].liked = true
      setPhotos([...photos])
    } else {
      photos[index].liked = false
      setPhotos([...photos])
    }
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map((element, index) => {
        return (
          <div
            key={index}
            className="foto"
            style={{backgroundImage: `url(${element.src.large})`}}
          >
            <button onClick={() => fill(index)}>
              <Heart filled={element.liked} />
            </button>
            <p>{element.alt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Home
