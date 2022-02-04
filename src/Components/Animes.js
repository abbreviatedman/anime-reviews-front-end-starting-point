import axios from "axios";
import { useState, useEffect } from "react";
import Anime from "./Anime";

function Animes() {
  const API = process.env.REACT_APP_API_URL;
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/anime`)
      .then((response) => setAnimes(response.data))
      .catch((error) => console.warn(error));
  }, [API]);

  return (
    <div className="Animes">
      <section>
        <table>
          <thead>
            <tr>
              <th>Anime</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {animes.map((anime) => {
              return <Anime key={anime.id} anime={anime} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Animes;
