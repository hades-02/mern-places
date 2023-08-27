import Button from "../../shared/components/FormElements/Button/Button";
import Card from "../../shared/components/UI/Card/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          {!props.isLoggedUserPlaces && <h2>Not added any places yet. Comeback later!</h2>}
          {props.isLoggedUserPlaces && <h2>No places found. Maybe create one?</h2>}
          {props.isLoggedUserPlaces && <Button to="/places/new">Share Place</Button>}
        </Card>
      </div>
    );
  }

  

  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creator={place.creator}
            coordinates={place.location}
            onPlaceDelete={props.onPlaceDelete}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
