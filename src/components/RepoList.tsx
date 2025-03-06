import React from "react";
import { Card, ListGroup } from "react-bootstrap";

interface RepoListProps {
  repos: { name: string; description: string; stargazers_count: number }[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <Card className="p-3">
      <ListGroup variant="flush">
        {repos.map((repo) => (
          <ListGroup.Item key={repo.name} className="position-relative">
            {/* Title + Star di Pojok Kanan Atas */}
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-truncate" title={repo.name}>
                {repo.name}
              </h5>
              <span className="position-absolute top-0 end-0 mt-2 me-2 text-muted">
                ⭐ {repo.stargazers_count}
              </span>
            </div>

            {/* Description */}
            <p className="mb-1 text-secondary">
              {repo.description || "No description provided."}
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default RepoList;
