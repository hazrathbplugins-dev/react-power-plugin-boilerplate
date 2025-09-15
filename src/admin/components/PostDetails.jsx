import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PostDetails() {
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading user details...</p>;

  return (
    <div>
      <h2>{user.name} ({user.username})</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company?.name}</p>
      <p>Address: {user.address?.street}, {user.address?.city}</p>
    </div>
  );
}

export default PostDetails;
