"use client";

import * as C from "@/components";
import * as React from "react";

interface RegisterModalProps {}

const RegisterModal: React.FC<RegisterModalProps> = () => {
  return (
    <C.Modal
      onClose={() => {
        console.log("CLOSE");
      }}
      onOpen={() => {
        console.log("OPEN");
      }}
      onCancel={() => {
        console.log("CANCEL");
      }}
      onSubmit={() => {
        console.log("SUBMIT");
      }}
      submitLabel={"Submit"}
    >
      <h1>Register Modal</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem esse
        molestiae repellendus sequi soluta temporibus veniam! Accusamus amet
        animi, beatae, error esse facere laudantium maxime minima nam quos saepe
        sapiente velit veniam!
      </p>
    </C.Modal>
  );
};

export default RegisterModal;
