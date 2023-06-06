import React from "react";
import { BsGithub, BsWhatsapp, BsLinkedin, BsDownload } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import cv from "./assets/nicoaroyo_cv.pdf";
import { MdDownloadForOffline } from "react-icons/md";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="txt">Contact details:</div>
      <div>
        <a href="https://wa.me/+972545540493?text=urlencodedtext">
          <BsWhatsapp /> +972545540493{" "}
        </a>
      </div>
      <div>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=nico.aroyo%40gmail.com&su=RE%3A+Job+inquiry&body=Hi+Nico&tf=cm">
          {" "}
          <SiGmail /> nico.aroyo@gmail.com{" "}
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/nico-aroyo-a4b4ab218">
          {" "}
          <BsLinkedin /> Linkedin
        </a>
      </div>
      <div>
        <a href={cv} download>
          <BsDownload />
          Download CV
        </a>
      </div>
    </>
  );
}

export default Contact;
