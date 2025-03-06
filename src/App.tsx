import { useState } from "react";
import axios from "axios";
import { Container, Card, Spinner } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import RepoList from "./components/RepoList";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<{ login: string }[]>([]);
  const [repos, setRepos] = useState<
    {
      name: string;
      description: string;
      stargazers_count: number;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchUsers = async (username: string) => {
    setIsLoading(true);
    setUsers([]);
    setRepos([]);

    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${username}&per_page=5`
        );
        setUsers(response.data.items);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    }, 2000); // Delay 2 detik
  };

  const fetchRepos = async (username: string) => {
    setIsLoading(true);
    setRepos([]);

    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setIsLoading(false);
      }
    }, 2000); // Delay 2 detik
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg border rounded" style={{ width: "30rem" }}>
        <Card.Body>
          <h2 className="text-center mb-3">GitHub User Search</h2>
          <SearchBar onSearch={searchUsers} />
          {isLoading ? (
            <div className="text-center my-4">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2">Loading...</p>
            </div>
          ) : (
            <>
              <UserList users={users} onSelectUser={fetchRepos} />
              <RepoList repos={repos} />
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
