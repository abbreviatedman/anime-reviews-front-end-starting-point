import { Link } from "react-router-dom";

function Anime({ anime }) {
  return (
    <tr>
      <td>{anime.name}</td>
      <td>
        <Link to={`/animes/${anime.id}`}>🔎</Link>
      </td>
    </tr>
  );
}

export default Anime;
