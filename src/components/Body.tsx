// react
import { Outlet, Route, Routes } from "react-router-dom";
// mui
import { Box, Container, useTheme } from "@mui/material";
// components
import NotFound from "./NotFound";
import PlayerCards from "./PlayerCards";

/** The default layout for the page. To be applied to all routes.
 */
const PageLayout: React.FC = () => {
  // hooks
  const theme = useTheme();

  return (
    <Box
      flexDirection="column"
      sx={{
        flex: 1,
        overflow: "scroll",
        alignItems: "center",
        display: "flex",
        flexFlow: "column",
        "& > div": {
          height: "100%",
          minHeight: "100%",
          width: "100%",
          maxWidth: { xs: "100%", lg: theme.breakpoints.values.lg },
        },
        background: "grey",
      }}
    >
      <Outlet />
    </Box>
  );
};

/** Body: Display Component with React Router
 *
 * Displays the application's content and sits immediately below the navbar.\
 * Scrolling occurs internally. Set in PageLayout component
 */
const Body: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          {/* <Route index element={<SampleIndexComponent />} /> */}
          <Route path="cards/:playerSlugs" element={<PlayerCards />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
export default Body;
