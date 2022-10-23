import NavBar from "./navbar";
import Footer from "./footer";

function Layout(props: any) {
  return (
    <>
      {/* <div className="sticky top-0 z-10">
        <NavBar />
      </div> */}
      <div className="flex flex-col">
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
