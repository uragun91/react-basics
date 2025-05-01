import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Container fixed>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Container>
  );
}
