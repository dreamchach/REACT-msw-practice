import React, { useState } from "react";

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json";

const TestMoking = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  console.log("data", data);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        setError(`something wrong: ${error}`);
      });
  };

  const handleClick2 = () => {
    fetch("/login")
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기</button>
      {data && (
        <ul>
          {data.people.map((person) => {
            return <Item key={person.name} name={person.name} age={person.age} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default TestMoking;
