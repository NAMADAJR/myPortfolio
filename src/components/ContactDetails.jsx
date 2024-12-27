import React from "react";

const ContactDetails = () => {
  return (
    <div className="text-center">
      <p className="text-gray-400 text-2xl ">or reach out to me directly:</p>
      
      
      <div className="mt-4 flex justify-center gap-6 ">
        {/* Social Media Icons */}
        <a
          href="https://www.linkedin.com/in/namada-junior-75139a2b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ8wZIvq6SI2RSaiWrXE9Ug%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 text-rust-brown hover:text-sand-tan"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/NAMADAJR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 text-rust-brown hover:text-sand-tan"
        >
          GitHub
        </a>
        <a
          href="https://dev.to/namjr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 text-rust-brown hover:text-sand-tan"
        >
          DEV
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
