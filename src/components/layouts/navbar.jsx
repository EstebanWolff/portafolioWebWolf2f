import React from "react";

const MENU =[
    {
      name:"Wolf2f",
      href:"https://www.wolf2f.com",
      translate:false,
    },
    {
      name:"Instagram",
      href:"https://www.wolf2f.com",
      translate:false,
    },
    {
      name:"Contact",
      href:"#contact",
      translate:true,
    },

]

const Home = () => {
  return (
    <nav className="navbar bg-[#000000] py-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="navbar-start"></div>
        <div className="navbar-center flex justify-center items-center">
          {MENU.map((menuItem)=> (<a
            translate={menuItem.translate ?'yes':'no'}
            className="text-[#FCFFDE]  transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white m-2"
            href= {menuItem.href}
          >
            {menuItem.name}
          </a>))  }
        </div>
        <div className="navbar-end"></div>
      </div>
    </nav>
  );
};

export default Home;
