import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import ourUser_2 from "../assests/images/profile-pic-02.jpg";

import ourUser_5 from "../assests/images/profile-pic-05.jpg";
import ourUser_6 from "../assests/images/profile-pic-06.jpg";
import { Link } from "react-router-dom";
import './sideMenu.css'

function Menuitem() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dotopen, setopen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setopen(!dotopen);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setopen(dotopen);
  };

  return (
   <>
      <Icon
        icon="clarity:notification-line"
        className="fs-6 "
        
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      {dotopen && <span className="dot position-absolute mt-4 me-5 "></span>}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className="col-2 ">
            <img
              src={ourUser_2}
              className="rounded-circle"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="col-7   ">
          <p className="userName">Bavid Kames</p>  
            <p className="useractivity">Assigned you on the call with Sara</p>
          </div>

          <div className="useractivity">2 min ago</div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="col-2 ">
            <img
              src={ourUser_6}
              className="rounded-circle"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="col-7  ">
           <p className="userName mt-2">Alex Marry</p> 
            <p className="useractivity">Marked the task New UI as Done</p>
          </div>
          <div className="col-3 useractivity ">5 min ago</div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="col-2">
            <img
              src={ourUser_5}
              className="rounded-circle"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="col-7  ">
          <p className="userName">Eva Maria</p>  
            <p className="useractivity">Assigned you on the call with Sara</p>
          </div>

          <div className="col-3 useractivity">10 min ago</div>
        </MenuItem>{" "}
        <hr />
      
          <div className="text-center">
            <Link className="notificationShowMore ">Show More</Link>
          </div>
       
      </Menu>
      </>
  );
}

export default Menuitem;
