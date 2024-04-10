import { useState, useCallback } from "react";
import TrainUseCallback from "./TrainUseCallback";
const order = [100, 200, 300];
const vehicles = [
  "car",
  "bus",
  "coach",
  "taxi",
  "trolley",
  "bicycle",
  "motorbike",
  "scooter",
  "boat",
  "ship",
  "ferry",
  "barge",
  "lorry",
  "spacecraft",
];

const genders = [
  { id: 0, name: "Male" },
  { id: 1, name: "Female" },
  { id: 2, name: "Other" },
];
const colors = [
  { id: 0, name: "Red" },
  { id: 1, name: "Blue" },
  { id: 2, name: "Yellow" },
  { id: 3, name: "Black" },
  { id: 4, name: "White" },
  { id: 5, name: "Orange" },
];
function TrainUseState() {
  const [counter, setCounter] = useState(0);
  // const handleIncrease = () => {
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  // };
  const handleIncrease = useCallback(() => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
  }, []);

  const [total, setTotal] = useState(order.reduce((total, one) => total + one));
  // const handleDevide = () => {
  //   setTotal((prevState) => prevState / 2);
  // };
  const handleDevide = useCallback(() => {
    setTotal((prevState) => prevState / 2);
  }, []);
  const [info, setInfo] = useState({ name: "Viet", age: 23 });
  const updateInfor = () => {
    setInfo((prevState) => ({
      ...prevState,
      hometown: "NinhBinh",
    }));
  };

  //ss2
  /*random */
  const [vehicle, setVehicle] = useState();
  const handleChangeVehicle = () => {
    setVehicle(vehicles[Math.floor(Math.random() * vehicles.length)]);
  };
  //two way binding
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkGender, setGender] = useState(0);
  const [checkColor, setColor] = useState([]);
  const handleChangeColor = (id) => {
    setColor((prevState) => {
      const isChose = checkColor.includes(id);
      if (isChose) {
        return checkColor.filter((item) => item !== id);
      } else {
        return [...prevState, id];
      }
    });
  };
  const handleShowInfo = () => {
    const arrColor = [];
    checkColor.map((item) => {
      arrColor.push(colors[item].name);
    });
    console.log({
      fullName: fullName,
      age: age,
      phoneNumber: phoneNumber,
      genders: genders[checkGender].name,
      colors: arrColor,
    });
  };

  return (
    <div className="App">
      <div className="ss1">
        <h1>{counter}</h1>
        {/* <button onClick={handleIncrease}>UP</button> */}

        <div className="check-total" style={{ margin: 10 }}>
          <h1>{total}</h1>
          {/* <button onClick={handleDevide}>/2</button> */}
        </div>
        <div className="train-callback" style={{ margin: 50 }}>
          <TrainUseCallback
            onIncrease={handleIncrease}
            onDevide={handleDevide}
          />
        </div>
        <div className="update" style={{ margin: 10 }}>
          <h1>{JSON.stringify(info)}</h1>
          <button onClick={updateInfor}>Update</button>
        </div>
      </div>

      <div className="ss2">
        <div className="vehicles_radom" style={{ padding: "20px" }}>
          <h1>{vehicle || "No vehicle"}</h1>
          <button onClick={handleChangeVehicle}>Change vehicle</button>
        </div>

        <div className="fill-info" style={{ padding: "20px" }}>
          <div className="fullname">
            <span style={{ paddingRight: "20px" }}>Full Name</span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="age">
            <span style={{ paddingRight: "20px" }}>Age</span>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="phoneNumber">
            <span style={{ paddingRight: "20px" }}>Phone Number</span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="gender">
            {genders.map((gender) => (
              <div key={gender.id}>
                <input
                  type="radio"
                  onChange={() => setGender(gender.id)}
                  checked={checkGender === gender.id}
                />
                {gender.name}
              </div>
            ))}
          </div>
          <div className="choose-color" style={{ padding: "20px" }}>
            {colors.map((color) => (
              <div key={color.id}>
                <input
                  type="checkbox"
                  onChange={() => handleChangeColor(color.id)}
                />
                {color.name}
              </div>
            ))}
          </div>

          <button onClick={handleShowInfo}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default TrainUseState;
