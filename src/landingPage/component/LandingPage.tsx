import FAQ from "./FAQ";

const LandingPage = () => {
  return (
    <div className="text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">Dew's Bank of India</h1>
          <ul className="flex space-x-6">
            {["About", "Services", "FAQ", "Contact", "Login"].map((item) => (
              <li key={item}>
                <a
                  href={item === "Login" ? "/login" : `#${item.toLowerCase()}`}
                  className={`transition text-lg ${item === "Login" ? "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500" : " hover:text-blue-600 text-black"}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          Welcome to Our Website
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Providing top-notch services for your needs.
        </p>
        <a
          href="#services"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Explore Services
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gray-900 text-white py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-500 mb-4">About Us</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a passionate team dedicated to providing top-notch
              solutions that enhance user experiences and drive innovation. Our
              mission is to deliver quality products and services that make a
              difference.
            </p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center text-gray-400">
                ✅ Quality-driven solutions
              </p>
              <p className="flex items-center text-gray-400">
                ✅ Customer-centric approach
              </p>
              <p className="flex items-center text-gray-400">
                ✅ Innovation & Excellence
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlYW13b3JrJTIwb2ZmaWNlJTIwNTAwKjM1MHxlbnwwfHwwfHx8MA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className=" py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-8 px-6">
            {["Credit Card", "Transactions", "Expence Track"].map(
              (service) => (
                <div
                  key={service}
                  className="p-6 bg-white shadow-lg rounded-lg"
                >
                  <h3 className="text-xl text-black font-semibold">{service}</h3>
                  <p className="mt-2 text-gray-600">
                    High-quality solutions to boost your business.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Have a question or want to work together? Reach out to us!
          </p>

          <div className="mt-10 flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Contact Info Section */}
            <div className="lg:w-1/2 p-8 bg-blue-600 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-4">
                We'd love to hear from you. Here's how you can reach us:
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-map-pin-line text-xl"></i>
                  <p>123 Business Street, City, Country</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line text-xl"></i>
                  <p>contact@dbi.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-xl"></i>
                  <p>+123 456 7890</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                  ></textarea>
                </div>

                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-600 text-center text-white">
        <p>© {new Date().getFullYear()} Dew's Bank of India. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;