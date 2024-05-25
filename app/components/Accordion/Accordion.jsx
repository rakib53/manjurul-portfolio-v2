import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(1); // Initially open the first item

  const items = [
    {
      id: 1,
      isOpen: false,
      title: "How do you ensure the design meets our specific SaaS needs?",
      content:
        "I start by conducting a thorough discovery phase where I delve into understanding your business objectives, target audience, and unique requirements. Throughout the design process, I maintain open communication and gather feedback to tailor our solutions precisely to your SaaS needs, ensuring alignment with your goals.",
    },
    {
      id: 2,
      isOpen: true,
      title:
        "Can you provide examples of your previous SaaS web application projects?",
      content:
        "Certainly! You can explore our portfolio section to view a selection of our past projects, showcasing our expertise in designing SaaS web applications across various industries and use cases.",
    },
    {
      id: 3,
      isOpen: false,
      title:
        "What is your approach to user testing and feedback incorporation?",
      content:
        "I believe in a user-centric design approach. I conduct extensive user testing sessions to gather valuable insights and feedback. This data is then carefully analyzed and incorporated iteratively into the design process, ensuring that the final product not only meets but exceeds user expectations.",
    },
    {
      id: 4,
      isOpen: false,
      title: "How do you handle scalability in your design systems?",
      content:
        "My design systems are built with scalability in mind. I structure them in a modular and flexible way, allowing for easy expansion and adaptation as your SaaS application grows. Additionally, I regularly review and update my design systems to accommodate evolving needs and technological advancements.",
    },
    {
      id: 5,
      isOpen: false,
      title: "Are your UI kits customizable to fit our brand identity?",
      content:
        "Absolutely! My UI kits are designed to be versatile and customizable. They serve as a solid foundation while also providing room for personalization to align with your brand identity. Whether it's color schemes, typography, or visual elements, we ensure that my UI kits can be tailored to reflect your unique brand image.",
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </>
  );
};

export default Accordion;
