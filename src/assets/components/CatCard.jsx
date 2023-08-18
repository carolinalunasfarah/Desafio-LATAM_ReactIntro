import Card from "react-bootstrap/Card"; /* since is a bootstrap component, we need to import it here, and then our component on App.jsx */

const CatCard = ({ name, image, description }) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                {/* source image goes without "" */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default CatCard;
