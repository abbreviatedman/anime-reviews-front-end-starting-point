import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function AnimeDetails() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/anime/${id}`)
      .then((response) => setAnime(response.data))
      .catch((error) => console.warn(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/anime/${id}`)
      .then(
        () => {
          console.log("did it");
          navigate(`/animes`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <h4>{anime.name}</h4>
      <p>{anime.release}</p>
      <div className="showNavigation">
        <div>
          <Link to="/animes">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/animes/${anime.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default AnimeDetails;
