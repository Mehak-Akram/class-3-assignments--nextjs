

let Contact = () => {
  return (
    <div>
      <div className="contact-section" id="contact-us">
        <div className="container">
          <div className="contact-left">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <br />
              <textarea name="message" placeholder="Your Message"></textarea>
              <br />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;
