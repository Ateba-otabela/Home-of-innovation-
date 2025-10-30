import React from "react";
import TeamMember1 from "../assets/webApp1.jpg";
import TeamMember2 from "../assets/webApp.jpg";
import TeamMember3 from "../assets/ContactImg.jpg";
import TeamMember4 from "../assets/Innovationteam.jpg";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Lead Developer",
    image: TeamMember1,
    linkedin: "https://linkedin.com/in/alicejohnson",
    twitter: "https://twitter.com/alicejohnson",
    email: "alice@company.com",
  },
  {
    name: "Michael Smith",
    role: "UI/UX Designer",
    image: TeamMember2,
    linkedin: "https://linkedin.com/in/michaelsmith",
    twitter: "https://twitter.com/michaelsmith",
    email: "michael@company.com",
  },
  {
    name: "Emma Brown",
    role: "Project Manager",
    image: TeamMember3,
    linkedin: "https://linkedin.com/in/emmabrown",
    twitter: "https://twitter.com/emmabrown",
    email: "emma@company.com",
  },
  {
    name: "James Williams",
    role: "Marketing Lead",
    image: TeamMember4,
    linkedin: "https://linkedin.com/in/jameswilliams",
    twitter: "https://twitter.com/jameswilliams",
    email: "james@company.com",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#03040C] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our team combines creativity, technology, and business expertise to deliver impactful solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#0D0D0F] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105"
          >
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-400 font-medium mb-4">{member.role}</p>
              <div className="flex justify-center space-x-6 text-xl">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-400 hover:text-blue-500 transition duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
