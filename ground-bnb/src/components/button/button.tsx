import * as React from "react";
import { IconType } from "react-icons";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean;
  small?: boolean;
  icon?: IconType;
}

const variant = {
  default:
    "bg-rose-500 text-white hover:bg-rose-400 border-[2px] border-rose-500 hover:border-rose-400",
  outlined:
    "bg-white text-gray-800 border-[2px] border-gray-800 hover:bg-gray-200",
};

const size = {
  default: "py-2",
  small: "py-1.5 text-sm",
};

const Button: React.FC<ButtonProps> = ({
  outlined,
  small,
  className,
  children,
  icon: Icon,
  color = "rose",
  ...restProps
}) => {
  return (
    <button
      className={`
        relative
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
    >
      {Icon && (
        <Icon size={24} className="absolute left-4 top-1/2 -translate-y-1/2" />
      )}
      {children}
    </button>
  );
};

export default Button;
