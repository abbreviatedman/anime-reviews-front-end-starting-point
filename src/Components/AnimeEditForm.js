import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AnimeEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [anime, setAnime] = useState({
    name: "",
    release: "",
  });

  const updateAnime = (updatedAnime) => {
    axios
      .put(`${API}/anime/${id}`, updatedAnime)
      .then(
        () => {
          navigate(`/animes/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setAnime({ ...anime, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/anime/${id}`).then(
      (response) => setAnime(response.data),
      () => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAnime(anime, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={anime.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="release">RELEASE:</label>
        <input
          id="release"
          type="text"
          value={anime.release}
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/animes/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default AnimeEditForm;
