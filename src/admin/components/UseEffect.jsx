import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import SinglePhoto from "./SinglePhoto";
import SingleComment from "./SingleComment";
import SinglePost from "./SinglePost";
function UseEffect() {
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState('users');
    const [limit, setLimit] = useState(5);
    useEffect(
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/${dataType}?_limit=${limit}`)
            .then((response)=>response.json())
            .then((data)=>{setData(data)});
        },
    [dataType, limit]);

    const renderItem = (item) => {
        switch (dataType) {
        case "users":
            return <SingleUser key={item.id} user={item} />;
        case "posts":
            return <SinglePost key={item.id} post={item} />;
        case "comments":
            return <SingleComment key={item.id} comment={item} />;
        case "photos":
            return <SinglePhoto key={item.id} photo={item} />;
        default:
            return null;
        }
    };
    return (
        <div>
            <form>
                <label htmlFor="data-select">Select Data Type: </label>
                <select
                id="data-select"
                value={dataType}
                onChange={(e) => setDataType(e.target.value)}
                >
                <option value="users">Users</option>
                <option value="posts">Posts</option>
                <option value="comments">Comments</option>
                <option value="todos">Todos</option>
                <option value="photos">Photos</option>
                <option value="albums">Albums</option>
                </select>
                <label htmlFor="limit" style={{ marginLeft: "10px" }}>
                    Limit:
                </label>
                <input
                type="number"
                id="limit"
                value={limit}
                min="1"
                onChange={(e) => setLimit(Number(e.target.value))}
                />
            </form>
            {data.map((item) => renderItem(item))}
        </div>
    )
}
export default UseEffect;