import React, { useContext } from "react";
import { Managerstudent } from "../Routs/Routers";

const Blogs = () => {
  const {
    handleSearch,
    deleteStudent,
    filterHandle,
    counter,
    filteredStudents,
    addCounter,
  } = useContext(Managerstudent);
  return (
    <>
     
        <div className="bg-amber-200 w-96 rounded-xl p-[30px] mt-20 mr-[450px] ">
          <div className="flex flex-row-reverse justify-around  ">
            <img 
              className="w-[60px] rounded-full relative"
              src="https://dkstatics-public.digikala.com/digikala-products/980895caf4c3569b57bc1ed53922cc590726680d_1690673399.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt="فرم"
            /> <span style={{color:"#00CED1",borderRadius:"100%", width:"20px", textAlign:"center"}} className="absolute mr-[175px] bg-black" >{counter}</span>
            <input
              className="rounded-md p-[5px] h-10 mt-3"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />
          </div>
          <div className="text-center flex flex-row justify-center gap-5">
            <label>
              <input type="checkbox" value="php" onChange={filterHandle} />
              <span>PHP</span>
            </label>
            <label>
              <input type="checkbox" value="react" onChange={filterHandle} />
              <span>React</span>
            </label>
          </div>
          <div className="flex flex-row justify-around">
            <div>
              <ul>
                {filteredStudents.map((student) => (
                  <li
                    className="bg-red-700 rounded-lg mt-2 p-3 flex flex-row justify-between"
                    key={student.id}
                  >
                    {student.name}
                    <div>
                      <button
                        className=" w-10 bg-black p-[10px]"
                        onClick={() => deleteStudent(student.id)}
                      >
                        ❌
                      </button>
                      <button
                        className=" w-10 bg-black p-[10px]"
                        onClick={addCounter}
                      >
                        👍
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default Blogs;
