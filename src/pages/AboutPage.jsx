import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this page</h1>
        <p>This project is created to leave a feedback on the products</p>
        <p>
          <Link to="/">Go back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
