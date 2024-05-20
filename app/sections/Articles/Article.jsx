import Container from "@/app/components/Container";
import React from "react";
import ArticleCard from "./ArticleCard";
import ArticleSlider from "./ArticleSlider";

export default function Article() {
  return (
    <section className="bg-white py-[100px]">
      <Container>
        <h2 className="sectionTitle">
          Insights and Inspiration: Explore My Articles
        </h2>
        <p className="sectionDesc">
          Dive Into Thought-Provoking Content on UI/UX Design, SaaS Trends, and
          More.
        </p>
        <div className="flex py-[60px]">
          <ArticleSlider />
        </div>
      </Container>
    </section>
  );
}
