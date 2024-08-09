import { useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";

function App() {
  const [data, setData] = useState("");
  const [country, setCountry] = useState([
    {
      name: "IND",
      checked: false,
    },
    {
      name: "PAK",
      checked: false,
    },
    {
      name: "AUS",
      checked: false,
    },
    {
      name: "UK",
      checked: false,
    },
  ]);

  const handleClick = (index) => {
    const newCountry = [...country];
    newCountry[index].checked = !newCountry[index].checked;
    setCountry(newCountry);
  };

  const removeClick = (index) => {
    const newCountry = [...country];
    newCountry.splice(index, 1);
    setCountry(newCountry);
  };

  const addData = () => {
    if (data === "") {
      alert("The data is empty");
      return;
    }

    const newCountry = [...country];
    newCountry.push({
      name: data,
      checked: false,
    });

    setCountry(newCountry);
    setData("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  const handleAllClick = () => {
    const newCountry = [...country];
    newCountry.map((coun) => {
      coun.checked = true;
    });
    setCountry(newCountry);
  };

  const handleUnAllClick = () => {
    const newCountry = [...country];
    newCountry.map((coun) => {
      coun.checked = false;
    });
    setCountry(newCountry);
  };

  const removeAll = () => {
    const newCountry = [...country];
    newCountry.splice(0, newCountry.length);
    setCountry(newCountry);
  };

  const allSelected = country.every((coun) => coun.checked);
  const allEmpty = country
    .map((coun) => coun.name)
    .every((coun) => coun === "");
  return (
    <>
      <h1>app</h1>
      <div
        style={{
          position: "relative",
          padding: "20px",
        }}
      >
        <div>
          {allSelected && !allEmpty ? (
            <button onClick={handleUnAllClick}>Unselect all</button>
          ) : (
            <button onClick={handleAllClick}>Select all</button>
          )}
          <input
            type="text"
            style={{
              padding: "5px",
              height: "25px",
              borderRadius: "20px",
              fontSize: "18px",
            }}
            value={data}
            onChange={(e) => setData(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={addData}>Add</button>
        </div>
        {country.map((coun, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                border: "1px solid black",
                margin: "10px",
              }}
            >
              <input
                type="checkbox"
                checked={coun.checked}
                onChange={() => handleClick(index)}
              />{" "}
              {coun.name}
              <div>
                {coun.checked && (
                  <span onClick={() => removeClick(index)}>&#x2715;</span>
                )}
              </div>
            </div>
          );
        })}
        {allSelected && !allEmpty ? (
          <span
            style={{
              fontSize: "18px",
              position: "absolute",
              top: "0",
              right: "0",
              borderRadius: "20px",
              cursor: "pointer",
              color: "red",
            }}
            onClick={removeAll}
          >
            <MdDelete />
          </span>
        ) : (
          ""
        )}

        {allEmpty ? <p>All Data is Empty </p> : ""}
      </div>
    </>
  );
}

export default App;
