import MainNavigation from "../layout/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div>
        <MainNavigation />
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
