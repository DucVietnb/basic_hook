import { useState, useEffect } from "react";
import "./setup.css";
const types = ["posts", "comments", "albums"];
const genders = [
  { id: 0, name: "Male" },
  { id: 1, name: "Female" },
  { id: 2, name: "Other" },
];
function TrainUseEffect() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("");
  const [countdown, setCountdown] = useState(10);
  const [avatar, setAvatar] = useState();
  const [genderId, setGenderId] = useState(0);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const count = setInterval(() => {
      setCountdown((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }, 1000);
    return () => clearInterval(count);
  }, []);
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  return (
    <div className="use-effect">
      {types.map((type) => (
        <button key={type} onClick={() => setType(type)}>
          {type}
        </button>
      ))}
      <ul>
        {posts &&
          posts.map((post) => <li key={post.id}>{post.title || post.name}</li>)}
      </ul>

      <div className="timer-func">
        <h1>{countdown}</h1>
      </div>

      <div className="choose-avt">
        <input type="file" onChange={handleChangeAvatar} />
        {avatar && <img src={avatar.preview} alt="" width={"80px"} />}
      </div>

      <div className="fake-chatbox">
        <ul>
          {genders.map((gender) => (
            <li
              key={gender.id}
              style={{
                color: gender.id === genderId ? "red" : "black",
                cursor: "pointer",
              }}
              onClick={() => setGenderId(gender.id)}
            >
              {gender.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrainUseEffect;
