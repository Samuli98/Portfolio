import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <form name="contact" action="https://formsubmit.co/slahtela98@gmail.com" method="POST" data-netlify="true">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="text" name="message" placeholder="write here">
        <button type="submit">Send</button>
   </form>
    </div>
  );
};

export default About;
