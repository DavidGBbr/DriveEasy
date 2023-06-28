import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import DrawerMenu from "../Drawer";

const Header = () => {
  const [value, setValue] = useState(0);
  const isMatch = useMediaQuery("(min-width:600px)");
  return (
    <>
      <AppBar sx={{ background: "#242731", padding: 1 }}>
        <Toolbar>
          <DriveEtaIcon sx={{ fontSize: "3rem" }} />
          {isMatch ? (
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="Home" />
              <Tab label="Cliente" />
              <Tab label="Condutor" />
            </Tabs>
          ) : (
            <DrawerMenu />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
