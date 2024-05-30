"use client";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleSlider from "./ArticleSlider";
import Container from "@components/Container";

export default function Article() {
  const [profile, setProfile] = useState({
    name: "Manjurul Islam",
    profileImage: "",
    profileUrl: "",
  });
  const [blog, setBlog] = useState({
    items: [],
    isLoading: true,
    error: null,
  });
  const MediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@manjuruldesign";

  useEffect(() => {
    axios
      .get(MediumURL)
      .then((info) => {
        const image = info.data.feed.image;
        const link = info.data.feed.image;
        const blogs = info.data.items;
        setProfile((profile) => ({
          ...profile,
          profileUrl: link,
          profileImage: image,
        }));
        setBlog((blog) => ({ ...blog, items: blogs, isLoading: false }));
      })
      .catch((err) => {
        setBlog((blog) => ({ ...blog, error: err.message }));
      });
  }, []);

  return (
    <section className="bg-white py-[100px]" id="blogs">
      <Container>
        <h2 className="sectionTitle">
          Insights and Inspiration: Explore My Articles
        </h2>
        <p className="sectionDesc">
          Dive Into Thought-Provoking Content on UI/UX Design, SaaS Trends, and
          More.
        </p>
        <div className="flex py-[60px]">
          <ArticleSlider blog={blog} />
        </div>
      </Container>
    </section>
  );
}
