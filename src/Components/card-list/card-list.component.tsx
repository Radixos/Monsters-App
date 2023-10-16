import { Monster } from "../../App";
import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (

    <div className="card-list">
        {monsters.map((monster, id) => {
            return <Card monster={monster} key={id} />
        })}
    </div>
)

export default CardList;