import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  var today = new Date(),
    dateforstate =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    notes: "",
    add:"",
    medicine: "",
    age: "",
    date: dateforstate,
    gender: "Male",
  });
  const { firstname, lastname, notes, add, medicine, age, date, gender } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("data", JSON.stringify(values));
    navigate("/receipt");
  };

  console.log(firstname);
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 z-10  bg-[#171515] w-screen p-4 text-[#FE595E] text-3xl font-bold cursor-pointer flex justify-between items-start px-8">
        <h1>GagaHealth</h1>
      </div>

      <div className="flex max-w-3xl m-auto mt-20  p-6 justify-center items-center">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                
                type="text"
                placeholder="FirstName"
                value={firstname}
                onChange={handleChange("firstname")}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
               
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                type="text"
                placeholder="Lastname"
                value={lastname}
                onChange={handleChange("lastname")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               
                type="text"
                placeholder="Address"
                value={add}
                onChange={handleChange("add")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                
              >
                Notes
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-notes"
                type="text"
                placeholder="Notes"
                value={notes}
                onChange={handleChange("notes")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
               
              >
                Medicines
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               
                type="text"
                placeholder="Medicines"
                value={medicine}
                onChange={handleChange("medicine")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                
              >
                Age
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                type="text"
                placeholder="Age"
                value={age}
                onChange={handleChange("age")}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                
              >
                Gender
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-date"
                  value={gender}
                  onChange={handleChange("gender")}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                type="text"
                placeholder={date}
                value={date}
                onChange={handleChange("date")}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-8 -mx-6 mb-2">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
              onClick={onSubmit}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
