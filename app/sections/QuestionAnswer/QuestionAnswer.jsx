"use client";
import React from "react";
import Button from "@components/Button";
import { rightArrow } from "@utils/SVG";
import Container from "@components/Container";
import Accordion from "@components/Accordion/Accordion";

export default function QuestionAnswer() {
  return (
    <section className="w-full bg-[#F5F5F5] py-[120px]">
      <Container>
        <div className="flex justify-between gap-[50px]">
          <div className="flex flex-col justify-between items-start">
            <h3 className="text-gray900 text-[36px] leading-[44px] font-rocGroteskBold text-left">
              Answers to Your Questions
            </h3>

            <Button
              label="Have other question?"
              labelClass="text-lg leading-7 font-rocGroteskMid text-gray900"
              className="white_btn flex items-center gap-[10px] py-2 px-4"
              icon={rightArrow}
              iconPosition="right"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Accordion />
          </div>
        </div>
      </Container>
    </section>
  );
}
