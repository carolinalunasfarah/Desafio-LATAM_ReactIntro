import Badge from "react-bootstrap/Badge";

const Tags = ({ tagColor, tagText }) => {
    return (
        <>
            <Badge bg={tagColor}>{tagText}</Badge>
        </>
    );
};

export default Tags;
