import { Link } from 'react-router-dom';
import Avatar from "../../shared/components/UI/Avatar/Avatar";
import "./UserItem.css";
import Card from '../../shared/components/UI/Card/Card';

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
        <div className="user-item__image">
          <Avatar image={process.env.REACT_APP_ASSET_URL + `/${props.image}`} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placesCount} {props.placesCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
