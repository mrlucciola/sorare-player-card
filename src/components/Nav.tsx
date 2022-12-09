type Props = React.FC<{}>;

/**
 * Navigation bar
 */
const Nav: Props = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        width: "100%",
        height: "50px",
      }}
    >
      <div style={{ display: "flex" }}>Sorare</div>
      <div style={{ display: "flex", width: "80%" }}></div>
      Nav
    </div>
  );
};

export default Nav;
