import Container from "@/Components/Container";
import Navbar from "@/Components/Nav/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const BaseLayout = ({ title, heading, children }) => {
  return (
    <>
      <Head title={title} />
      <Container>
        <Navbar />
        <h1 className="text-3xl text-white text-center my-8">{heading}</h1>
        <main className="text-white space-y-5">{children}</main>
        <footer className="text-center text-white mt-12 mb-6">
          2022-PRESENT © Adrian Aji Septa
        </footer>
      </Container>
    </>
  );
};

export default BaseLayout;
