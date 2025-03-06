import { ListGroup, Button, Container } from "react-bootstrap";

interface UserListProps {
  users: { login: string }[];
  onSelectUser: (username: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSelectUser }) => {
  return (
    <Container className="my-3">
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item
            key={user.login}
            className="d-flex justify-content-between align-items-center"
          >
            {user.login}
            <Button
              variant="primary"
              size="sm"
              onClick={() => onSelectUser(user.login)}
            >
              Select
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UserList;
