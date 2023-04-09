import darkKnight from '../assets/dark-knight.jpeg';
import matrix from '../assets/matrix.jpeg';
import fightClub from "../assets/fight-club.jpeg";
import lordOfTheRings from "../assets/lord-of-the-rings.jpeg";
import nachoLibre from "../assets/nacho-libre.jpeg";
import godfather from "../assets/godfather.jpeg";
import pulpFiction from "../assets/pulp-fiction.jpeg";

const Movie = (props) => {
    let image = ""
    switch(props.name) {
        case "Dark Knight":
            image = darkKnight;
            break;
        case "Matrix":
            image = matrix;
            break;
        case "Fight Club":
            image = fightClub;
            break;
        case "Lord of the Rings":
            image = lordOfTheRings;
            break;
        case "Nacho Libre":
            image = nachoLibre;
            break;
        case "Godfather":
            image = godfather;
            break;
        case "Pulp Fiction":
            image = pulpFiction;
            break;
        default:
            image = "";
            
    }

    let cover = {
        backgroundImage: 'url(' + image + ')'
    }

    return (
    <div className="movie-container">
        <div className="movie-image" style={cover}>
        </div>
        <p className="movie-title">{props.name}</p>
        <p className="movie-year">{props.year}</p>
    </div>
)
}

export default Movie