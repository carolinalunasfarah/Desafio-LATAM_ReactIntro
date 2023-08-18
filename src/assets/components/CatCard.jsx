import Card from "react-bootstrap/Card"; /* since is a bootstrap component, we need to import it here, and then our component on App.jsx */
import Tags from "./Tags";

const CatCard = ({ name, image, description, tagColor, tagText }) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                {/* source image goes without "" because is a local file not a link*/}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Tags tagColor={tagColor} tagText={tagText} />
                </Card.Body>
            </Card>
        </>
    );
};

export default CatCard;
