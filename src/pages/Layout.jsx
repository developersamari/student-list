import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
        <nav  className="bg-amber-200 w-[1278px] h-20 text-balck text-sm py-3 flex flex-row gap-[900px] ">
          <ul className="flex flex-row gap-[40px] mr-8 mt-4" >
            <li>
              <Link className="text-slate-950 size-14" to="/">Add student</Link>
            </li>
            <li>
              <Link className="text-slate-950 size-14" to="/blogs">List student</Link>
            </li>
          </ul>
          <img className="mt-2 w-14 rounded-full" src="https://logowik.com/content/uploads/images/apple-computer-rainbow3650.logowik.com.webp" alt="لگو" />
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;