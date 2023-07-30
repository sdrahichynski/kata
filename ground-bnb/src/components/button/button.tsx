import * as React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean;
  small?: boolean;
}

const variant = {
  default:
    "bg-rose-500 text-white hover:bg-rose-400 border-[2px] border-rose-500 hover:border-rose-400",
  outlined:
    "bg-white text-rose-500 border-[2px] border-rose-500 hover:bg-rose-50",
};

const size = {
  default: "py-2",
  small: "py-1.5 text-sm",
};

const Button: React.FC<ButtonProps> = ({
  outlined,
  small,
  className,
  ...restProps
}) => {
  return (
    <button
      className={`
        w-full
        rounded-md
        px-4
        transition-colors
        hover:bg-rose-200

        ${outlined ? variant.outlined : variant.default}     
        ${small ? size.small : size.default}     
        ${className}
      `}
      {...restProps}
    />
  );
};

export default Button;
