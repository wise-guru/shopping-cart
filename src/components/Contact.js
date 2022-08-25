import Email from "../Assets/icons/email.svg";
import Instagram from "../Assets/icons/instagram.svg";
import Twitter from "../Assets/icons/twitter.svg";

function Contact() {
  return (
    <main className="contact">
      <div className="content">
        <h1>Contact Us</h1>
        <div className="icons">
          <img src={Email} alt="letter icon" className="email icon" />
          <img src={Twitter} alt="twitter icon" className="twitter icon" />
          <img
            src={Instagram}
            alt="instagram icon"
            className="instagram icon"
          />
        </div>
      </div>
    </main>
  );
}

export default Contact;
