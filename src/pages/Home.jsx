import React, { useContext } from "react";
import { Managerstudent } from "../Routs/Routers";

const Home = () => {
  const { handleAddStudent, newStudent, handleInputChange } =
    useContext(Managerstudent);

  return (
    <>
      <div  className="flex flex-row-reverse justify-center mt-24 ">
        <div>
            <img className="w-96 rounded-xl" src="https://www.poonehmedia.com/images/site-record-photos-on-internet.jpg" alt="عکس" />
        </div>
        <div >
          <form className="flex flex-col gap-[32px]" onSubmit={handleAddStudent}>
            <input
            className="p-[10px] border-slate-300 border-solid border-2 rounded-xl"
              type="text"
              name="name"
              placeholder="New Student Name"
              value={newStudent.name}
              onChange={handleInputChange}
            />
            <select
            className="p-[10px] border-slate-300 border-solid border-2 rounded-xl"
              name="developer"
              value={newStudent.developer}
              onChange={handleInputChange}
            >
              <option value="php">PHP</option>
              <option value="react">React</option>
            </select>
            <button className="bg-slate-400" type="submit">Add Student</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
