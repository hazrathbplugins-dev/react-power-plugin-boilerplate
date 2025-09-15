import { useState, useEffect } from 'react';

function CreateUser() {
    const [userData, setUserData] = useState({});
    const [users, setUsers] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            role: formData.get('role')
        };
        setUserData({ ...userData });
        // Here you would typically send the userData to your server

        jQuery.ajax(
            {
                url: submittedData.ajax_url,
                type: "POST",
                data: {
                    action: 'save_user_data',
                    security: submittedData.nonce,
                    userData: userData
                },
                success: function(response) {
                    if(response.success){
                        console.log(response.message);setUsers(prev => [...prev, { ...userData, id: response.user_id }]);
                    } else {
                        console.log('Error: ' + response.message);
                    }
                },
                error: function(xhr, status, error) {
                    console.error('AJAX error:', status, error);
                }
            }
        );

    }
    useEffect(() => {
        jQuery.ajax({
            url: submittedData.ajax_url,
            type: "POST",
            data: { action: 'get_user_data' },
            success: function(response) {
                if(response.success){
                    setUsers(response.users);
                }
            }
        });
    }, []);
    return (
        <div>
            <h2>Create User Page</h2>
            <form action="" onSubmit={handleSubmit} method="post">
                <input type="text" name="username" id="username" placeholder="User Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="password" name="password" id="password" placeholder="Password" />
                <select name="role" id="role">
                    <option value="administrator">Administrator</option>
                    <option value="author">Author</option>
                    <option value="editor">Editor</option>
                    <option value="subscriber">Subscriber</option>
                </select>
                <button type="submit">Create User</button>
            </form>
            <div className="user-data">
                <h3>All Users</h3>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <strong>{user.username}</strong> ({user.email}) - {user.role}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}
export default CreateUser;