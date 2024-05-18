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
        "Certainly! You can explore our portfolio section to view a selection of our past projects, showcasing our expertise in designing SaaS web applications across various industries and use cases.",
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
        "Certainly! You can explore our portfolio section to view a selection of our past projects, showcasing our expertise in designing SaaS web applications across various industries and use cases.",
    },
    {
      id: 4,
      isOpen: false,
      title: "How do you handle scalability in your design systems?",
      content:
        "Certainly! You can explore our portfolio section to view a selection of our past projects, showcasing our expertise in designing SaaS web applications across various industries and use cases.",
    },
    {
      id: 5,
      isOpen: false,
      title: "Are your UI kits customizable to fit our brand identity?",
      content:
        "Certainly! You can explore our portfolio section to view a selection of our past projects, showcasing our expertise in designing SaaS web applications across various industries and use cases.",
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
