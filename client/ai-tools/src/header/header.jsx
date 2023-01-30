import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { internalRoutes } from "./internalRoutes";
import { useNavigate } from "react-router-dom";
import { updateName } from "../features/headerTextSlice";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Collapse } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const { name } = useSelector((state) => state.appBarName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [listCollapse, setListCollapse] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleRoute(item) {
    dispatch(updateName(item?.name));
    handleDrawerClose();
    navigate(item?.path);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='static' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <GiHamburgerMenu />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <BsFillArrowLeftCircleFill />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {internalRoutes?.map((item) =>
            !item?.hasNested ? (
              <ListItem
                disablePadding
                key={item?.path}
                onClick={() => handleRoute(item)}
              >
                <ListItemButton>
                  <ListItemText primary={item?.name} />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItemButton
                  onClick={() => setListCollapse(!listCollapse)}
                  key={item?.path}
                >
                  <ListItemText primary={item?.name} />
                  {listCollapse ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </ListItemButton>
                <Collapse in={listCollapse} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {item?.links?.map((li) => (
                      <ListItemButton
                        onClick={() =>
                          handleRoute({
                            name: li?.name,
                            path: `${item?.path}${li?.path}`,
                          })
                        }
                        key={li?.path}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={li?.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            )
          )}
        </List>
        <Divider />
        <List></List>
      </Drawer>
    </Box>
  );
}
