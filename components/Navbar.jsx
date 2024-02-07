import React from "react";
export default function Navbar({Location,clear}) {
  const [formData, setFormData] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    Location(formData.searchLocation)
  }
  function handleChange(e) {
    console.log(formData);
    setFormData({ [e.target.name]: e.target.value });
  }
  return (
    <div className="navbar">
      <h1>Weather Dashboard</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="searchLocation"
            placeholder="Enter location"
          />
          <button className="button-30">search</button>
        </form>
      </div>
      <h2 className="or">or </h2>
      <button className="button-30" onClick={clear}>Get current location weather </button>
    </div>
  );
}
