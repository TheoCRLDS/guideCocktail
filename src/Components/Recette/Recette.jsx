import "./Recette.css";

function Recette(props) {
  return (
    <>
      <div>
        <img src={props.img} alt="Image cocktail" />
        <p>{props.name}</p>
        <p>
          <i>{props.category}</i>
        </p>
        <ul>
          <li>
            {props.mesures1}
            {props.ingredients1}
          </li>
          <li>
            {props.mesures2}
            {props.ingredients2}
          </li>
          <li>
            {props.mesures3}
            {props.ingredients3}
          </li>
          <li>
            {props.mesures4}
            {props.ingredients4}
          </li>
        </ul>
        <p>
          <b>{props.instructions}</b>
        </p>
      </div>
    </>
  );
}

export default Recette;
