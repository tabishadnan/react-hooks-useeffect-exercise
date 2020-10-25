import React, { useEffect, useState } from 'react';

const GetRequest = () => {

    const [size, setSize] = useState(window.innerWidth);

    var digit = size;

    var firstDigit = ('' + digit)[0];

    var firstInt = parseInt(firstDigit);

    const [type, setType] = useState("posts");

    const handleChange = (e) => {
        setType(e.target.value);
    }

    const [data, setData] = useState(null);

    useEffect(() => {

        const handleResize = () => {
            setSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        fetch(`https://jsonplaceholder.typicode.com/${type}/${firstInt}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [size, type]);


    return (
        <div>
            <h1>REACT HOOKS USEEFFECT</h1>
            <h1>Window Width is : {size}</h1>
            <div id="wrapper">
                <p>
                    <label htmlFor="id">First Int : </label>
                    <input type="text" value={firstInt} disabled />
                </p>
                <p>
                    <label htmlFor="type">Type : </label>
                    <select onClick={handleChange}>
                        <option value="posts">Posts</option>
                        <option value="comments">Comments</option>
                        <option value="users">Users</option>
                    </select>
                </p>
            </div>
            <div>
                <p>{JSON.stringify(data)}</p>
            </div>
        </div>
    );
}

export default GetRequest;