import * as React from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Input = React.forwardRef(({ label, ...restProps }: InputProps, ref) => {
  return (
    <label className="block">
      <span className="block mb-2">{label}</span>
      <input
        ref={ref}
        className="px-4 py-2 block w-full border-[1px] outline-none rounded-md"
        {...restProps}
      />
    </label>
  );
});

Input.displayName = "Input";
export default Input;
