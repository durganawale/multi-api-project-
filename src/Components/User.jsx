import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading users...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Users List</h2>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card h-100 shadow-sm p-3">
              <img
                src={user.image}
                alt={user.firstName}
                className="card-img-top"
                style={{ height: "180px", objectFit: "contain" }}
              />

              <div className="card-body">
                <h5>
                  {user.firstName} {user.lastName}
                </h5>

                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Age: {user.age}</p>
                <p>City: {user.address.city}</p>
                <p>Company: {user.company.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
