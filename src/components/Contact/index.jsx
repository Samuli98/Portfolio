import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.4158380458612!2d25.134323816108576!3d60.223496181980614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920f76f28a10ad%3A0xbd8bb5c73370b65f!2sKallvikintie%2093%2C%2000960%20Helsinki!5e0!3m2!1sfi!2sfi!4v1620638678749!5m2!1sfi!2sfi"
        frameBorder="0"
        allowFullScreen=""
        tabIndex="0"
        aria-hidden="false"
      ></iframe>
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
