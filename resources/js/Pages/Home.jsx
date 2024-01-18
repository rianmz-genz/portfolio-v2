import Container from "@/Components/Container";
import Navbar from "@/Components/Nav/Navbar";
import BaseLayout from "@/Layouts/BaseLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome(props) {
  return (
    <BaseLayout title={props.title} heading={"Hi, Adrian's in here!"}>
      <article>
        <p>
          I am{" "}
          <span className="px-2 py-1 bg-stone-800 rounded-md mx-1 leading-[35px]">
            Adrian Aji Septa
          </span>
          , a bachelor of computer science student. I have 1 years experience
          work as Fullstack Developer at
          <a
            href="https://tsgitdev.com"
            className="underline ml-1"
            target="_blank"
          >
            PT. Tristar Surya Gemilang
          </a>
          .
        </p>
        {props.paragraphs.map((paragraph, i) => (
          <p key={i} className="leading-[35px] text-justify">
            {paragraph}
          </p>
        ))}
      </article>
    </BaseLayout>
  );
}
