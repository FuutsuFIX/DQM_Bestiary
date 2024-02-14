import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function MainTemplate(props) {
  const { children, footerCourseName, footerCourseLink, navItems, logo } =
    props;
  return (
    <>
      <Header logo={logo} navItems={navItems}></Header>
      <div>{children}</div>

      <Footer
        courseName={footerCourseName}
        courseLink={footerCourseLink}
        navItems={navItems}
      />
    </>
  );
}
