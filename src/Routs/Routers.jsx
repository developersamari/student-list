import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout"; 
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import React, { useState, createContext } from "react";

export const Managerstudent = createContext();

function Routers() {
  const [query, setQuery] = useState("");
  const [filterDeveloper, setFilterDeveloper] = useState([]);
  const [students, setStudents] = useState([
    { id: 1, name: "ahmadzarei", developer: "php" },
    { id: 2, name: "alirezasamari", developer: "react" },
    { id: 3, name: "ayhanmohamadi", developer: "php" },
    { id: 4, name: "atiehdavoodi", developer: "react" },
    { id: 5, name: "maidehkhoshnam", developer: "php" },
    { id: 6, name: "sajedehzereshki", developer: "react" },
    { id: 7, name: "maryambigham", developer: "php" },
    { id: 8, name: "hasankiyan", developer: "react" },
    { id: 9, name: "fariborzsoleimani", developer: "php" },
    { id: 10, name: "tahahamedani", developer: "php" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", developer: "php" });
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter(student => student.id !== id));
  };

  const handleSearch = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const filterHandle = (event) => {
    if (event.target.checked) {
      setFilterDeveloper((prevFilterDeveloper) => [...prevFilterDeveloper, event.target.value]);
    } else {
      setFilterDeveloper((prevFilterDeveloper) =>
        prevFilterDeveloper.filter((filterData) => filterData !== event.target.value)
      );
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent((prevNewStudent) => ({ ...prevNewStudent, [name]: value }));
  };

  const handleAddStudent = (event) => {
    event.preventDefault();
    if (newStudent.name.trim()) {
      setStudents((prevStudents) => [
        ...prevStudents,
        { ...newStudent, id: prevStudents.length + 1 }
      ]);
      setNewStudent({ name: "", developer: "php" });
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query) &&
      (filterDeveloper.length === 0 || filterDeveloper.includes(student.developer))
  );

  return (
    <BrowserRouter>
      <Managerstudent.Provider
        value={{
          handleInputChange,
          filteredStudents,
          handleAddStudent,
          filterHandle,
          handleSearch,
          deleteStudent,
          addCounter,
          query,
          setQuery,
          filterDeveloper,
          setFilterDeveloper,
          students,
          setStudents,
          newStudent,
          setNewStudent,
          counter,
          setCounter
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </Managerstudent.Provider>
    </BrowserRouter>
  );
}

export default Routers;