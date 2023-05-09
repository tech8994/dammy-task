"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const drawerWidth = 240;
const navItems = ["Home", "Treat me show", "Schedule visit", "Messages"];
const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                ":hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            position: "relative",
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid #CCCCCC",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src={"/leftarrow.svg"}
                alt="leftarrow"
                width={16}
                height={8}
              />
              <Image src="/zelta.svg" alt="zelta" width={120} height={16} />

              <IconButton
                color="#000"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" }, marginRight: "0px" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              // variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "flex",
                  alignItems: "center",
                  gap: "20px",
                  lineHeight: "24px",
                },
              }}
            >
              {/* <Box> */}
              <Image src={"/arrow.svg"} alt="arrow" width={16} height={8} />
              {/* </Box> */}
              <Image src="/zelta.svg" alt="zelta" width={120} height={16} />
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#1B1B1B",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "24px",
                    letterSpacing: "0.3px",
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
              <Typography component={"div"} sx={{ paddingLeft: "20px" }}>
                <Image src={"/user.png"} alt="user" width={34} height={34} />
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "flex", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            anchor="right"
          >
            {drawer}
          </Drawer>
          <Box></Box>
        </Box>
      </Box>
    </div>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};
export default Header;
