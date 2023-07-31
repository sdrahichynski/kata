"use client";

import * as React from "react";
import { IoClose } from "react-icons/io5";
import * as C from "@/components";

interface ModalProps {
  isOpen?: boolean;

  onOpen?(): void;

  onClose?(): void;

  onSubmit?(): void;

  submitLabel?: string;

  onCancel?(): void;

  cancelLabel?: string;

  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen: initialIsOpen = true,
  onClose,
  onOpen,
  onSubmit,
  onCancel,
  submitLabel = "Ok",
  cancelLabel = "Cancel",
  header,
  footer,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(initialIsOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit =
    onSubmit &&
    (() => {
      setIsOpen(false);
      onSubmit();
    });

  const handleCancel =
    onCancel &&
    (() => {
      setIsOpen(false);
      onCancel();
    });

  React.useEffect(() => {
    if (!isOpen) {
      onClose?.();
    } else {
      onOpen?.();
    }
  }, [isOpen, onClose, onOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`flex fixed h-full w-full bg-black bg-opacity-50 z-20 top-0 left-0`}
    >
      <div
        className={`mx-auto my-auto bg-white rounded-xl w-[480px] relative p-4`}
      >
        <header className="pb-2 min-h-[18px] text-xl font-bold">
          {header}

          <button className="absolute right-1 top-1 p-1" onClick={handleClose}>
            <IoClose size={12} />
          </button>
        </header>

        {children && <div className="py-2">{children}</div>}

        {footer && <footer className="py-4 pt-2">{footer}</footer>}

        <div className="flex flex-row gap-2 pt-2 items-center">
          {handleCancel && (
            <C.Button outlined onClick={handleCancel}>
              {cancelLabel}
            </C.Button>
          )}

          {handleSubmit && (
            <C.Button onClick={handleSubmit}>{submitLabel}</C.Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
