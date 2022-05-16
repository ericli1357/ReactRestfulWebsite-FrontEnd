import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./About.css";

export const About = () => (
  <Row>
    <Col sm="6" className="aboutBorder">
      <div className="aboutText">
        <div>My name is Eric Li.</div>
        <div>
          I am a student at UBC majoring in computer science. I build websites
          that do not only looks good on your computers, but are also fully
          responsive on all tablets and smartphones.
        </div>
        <div>
          I am a detail oriented person and enjoy working in a team as I believe
          there is much to be learned from others.
        </div>
      </div>
    </Col>
    <Col sm="6">
      <div className="aboutText">
        <div>
          I developed this mobile first and fully responsive website with Visual
          Studios 2022 and Visual Studios Code.
        </div>
        <div>
          For the front end, I used React, HTML5, CSS3, Bootstrap, JavaScript,
          and JQuery.
        </div>
        <div>
          For the back end, I used C#, ASP.NET Core 6, and MS SQL Server.
        </div>
      </div>
    </Col>
  </Row>
);
