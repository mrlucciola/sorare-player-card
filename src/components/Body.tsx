// react
import { Outlet, Params, Route, Routes, useParams } from "react-router-dom";
// components
import NotFound from "./NotFound";
import PlayerCards from "./PlayerCards";

/** The default layout for the page. To be applied to all routes.
 */
const PageLayout: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        flex: 1,
        overflow: "scroll",
        alignItems: "center",
        height: "100%",
        minHeight: "100%",
        width: "100%",
        maxWidth: "100%",
        background: "grey",
      }}
    >
      <Outlet />
    </div>
  );
};

/** Body: Display Component with React Router
 *
 * Displays the application's content and sits immediately below the navbar.\
 * Scrolling occurs internally. Set in PageLayout component
 */
const Body: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {/* <Route index element={<SampleIndexComponent />} /> */}
        <Route path="cards/:playerSlugs" element={<PlayerCards />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default Body;
