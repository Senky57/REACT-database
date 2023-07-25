import { useParams, Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import "./OneMovie.css"

const OneMovie = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const { movieID } = useParams()

  useEffect( () => {
  projectFirestore.collection("movies").doc(movieID).get().then( (document) => {
    console.log(document);

    if (document.exists){
      setData(document.data())
    } else {
      setError("Nenašli jsme tento film")
    }
  }).catch( (err) => {
    setError(err.message)
  })

}, [movieID])

  return <section className="one-movie-section">
    {error && <p>{error}</p>}
    <h1>{data.title}</h1>
    <p>{data.minage}+</p>
    <p>{data.time} minut</p>
    <Link exact to="/all-movies">Zpět na seznam filmů</Link>
  </section>
}

export default OneMovie