"use client";

import * as C from "@/components";
import axios from "axios";
import * as H from "@/hooks";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import * as yup from "yup";
import { toast } from "react-hot-toast";

import * as React from "react";

interface RegisterModalProps {}

interface LoginInterface {
  name: string;
  email: string;
  password: string;
}

const loginSchema = yup.object<LoginInterface>({
  name: yup.string().required("Name is required").min(2).max(20),
  email: yup.string().required("Email is required").email("Wrong email"),
  password: yup.string().required("Password is required").min(6),
});

const RegisterModal: React.FC<RegisterModalProps> = () => {
  const { isOpen, close } = H.useRegisterModal();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<{
    name: string;
    message: string;
  } | null>(null);

  // @ts-ignore
  const formRef = React.useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      loginSchema.validateSync(data);
    } catch (e: yup.ValidationError) {
      if (e.path) setError({ name: e.path, message: e.message });
      return;
    }

    setIsLoading(true);

    axios
      .post("/api/login", data)
      .then(() => {
        toast("SUCCESS");
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <C.Modal
      close={close}
      isOpen={isOpen}
      onCancel={() => {
        close();
      }}
      onSubmit={onSubmit}
      submitLabel={isLoading ? "LOADING" : "Submit"}
      header={<h1>Register Modal</h1>}
      footer={
        <div className={"flex flex-col gap-2"}>
          <C.Button outlined icon={FcGoogle}>
            Continue with google
          </C.Button>
          <C.Button outlined icon={AiFillGithub}>
            Continue with GitHub
          </C.Button>
        </div>
      }
    >
      <form ref={formRef} className="flex flex-col gap-3">
        <C.Input
          type="text"
          name="name"
          label="Name:"
          defaultValue=""
          required
          onFocus={() => setError(null)}
        />

        <C.Input
          type="email"
          name="email"
          label="E-mail:"
          defaultValue=""
          required
          onFocus={() => setError(null)}
        />

        <C.Input
          type="password"
          name="password"
          label="Password:"
          defaultValue=""
          required
          onFocus={() => setError(null)}
        />

        {error && <span className="text-red-500">{error.message}</span>}
      </form>
    </C.Modal>
  );
};

export default RegisterModal;
