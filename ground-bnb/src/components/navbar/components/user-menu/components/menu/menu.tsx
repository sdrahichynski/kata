import * as React from "react";

interface ModalProps {
  onClose(): void;
}

const Menu: React.FC<ModalProps> = ({ onClose }) => {
  const handleLogIn = () => {
    console.log("login");
    onClose();
  };

  const handleSignIn = () => {
    console.log("sign in");
    onClose();
  };

  return (
    <div className="absolute right-0 top-full mt-2 border-[1px] rounded-xl bg-white shadow-sm">
      <ul>
        <li>
          <button
            className="px-4 py-2 pt-3 hover:bg-gray-100 transition-colors rounded-t-xl w-full"
            onClick={handleLogIn}
          >
            Log in
          </button>
        </li>

        <li>
          <button
            className="px-4 py-2 pb-3 hover:bg-gray-100 transition-colors rounded-b-xl w-full"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
