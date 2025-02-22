import React from "react";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: "/assets/ourteam-1.jpg",
  },
  {
    name: "Amit Verma",
    role: "Head of Product Development",
    image: "/assets/ourteam-2.jpg",
  },
  {
    name: "Priya Meheta",
    role: "Marketing & Sales Manager",
    image: "/assets/ourteam-3.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Customer Support Lead",
    image: "/assets/ourteam-4.jpg",
  },
];

const OurTeam = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto mb-4 object-cover border-4 border-gray-200 shadow-lg rounded-full"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
