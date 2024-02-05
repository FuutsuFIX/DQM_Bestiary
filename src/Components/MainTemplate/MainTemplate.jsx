import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainTemplate(props) {
  const { footerCourseName, footerCourseLink } = props;
  return (
    <>
      <Header></Header>
      <Footer courseName={footerCourseName} courseLink={footerCourseLink} />
    </>
  );
}
