import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AnimeNewForm() {
  let navigate = useNavigate();

  const addAnime = (newAnime) => {
    axios
      .post(`${API}/anime/new`, newAnime)
      .then(
        () => {
          navigate(`/animes`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [anime, setAnime] = useState({
    name: "",
    release: "",
    category: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setAnime({ ...anime, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAnime({ ...anime, is_favorite: !anime.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAnime(anime);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={anime.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Anime"
          required
        />
        <label htmlFor="release">RELEASE:</label>
        <input
          id="release"
          type="text"
          value={anime.release}
          onChange={handleTextChange}
          placeholder="Year Of Release"
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AnimeNewForm;
