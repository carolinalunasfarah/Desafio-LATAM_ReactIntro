import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Tags = ({ tagColor, tagText }) => {
    return (
        <Stack direction="horizontal" gap={2}>
            <Badge bg={tagColor}>{tagText}</Badge>
        </Stack>
    );
};

export default Tags;
