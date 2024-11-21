import React from "react";

export default function About() {
  const about = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "When a visitor wants to learn more about you or your business, the About Us page is what they’ll look for. Read on to learn how to craft the perfect About Us page for your business, and get inspired by About Us page examples from successful brands.",
    },
    {
      id: 2,
      title: "Our Story",
      description:
        "Tell shoppers the origin story of your business and why you started it. For the most impact, make it memorable and personal, so customers relate and connect with your brand. If your brand is your name or it was formed based on a personal brand, your company’s story can be one and the same with your founder story.",
    },
  ];

  const team = [

   {
    id: 1,
    name: "John Doe",
    role: "CEO",
    image : "https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220",
   },
   {
    id: 2,
    name: "John Doe",
    role: "CTO",
    image : "https://tse2.mm.bing.net/th?id=OIP.qQDgUP_imfPJZfqlrT_taAHaHa&pid=Api&P=0&h=220",
   },
   {
    id: 3,
    name: "John Doe",
    role: "Head of product",
    image : "https://tse4.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&pid=Api&P=0&h=220",
   },
   {
    id: 4,
    name: "John Doe",
    role: "Lead Designer",
    image : "https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0&h=220",
   },
   


  ]

  return (
    <div className="h-screen bg-gray-800 text-center">
      <h1 className="flex justify-center text-4xl text-white font-bold mb-2">
        About Second Brain
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 p-5 mt-10">
        {about.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between bg-gray-700 p-6 rounded-lg min-h-[150px]"
          >
            <h1 className="text-2xl text-white font-bold mb-0">{item.title}</h1>
            <p className="text-white">{item.description}</p>
          </div>
        ))}
      </div>

       <div className="text-white mt-5">
        <h1 className="flex justify-center text-2xl">Our Team</h1>
        <div className="flex flex-col sm:grid sm:grid-cols-4 sm:gap-10 p-5 mt-10">
            {team.map((member) => (
                <div key={member.id} className="flex flex-col items-center justify-between bg-gray-700 p-6 rounded-lg min-h-[150px]">
                   <img src={member.image} className="w-20 h-20 rounded-full" />
                    <h1 className="text-2xl text-white font-bold mb-0">{member.name}</h1>
                    <p className="text-white">{member.role}</p>
                    </div>

            ))}
            
        </div>
       </div>
    </div>
  );
}
