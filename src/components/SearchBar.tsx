import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => onSearch(username)}>
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
