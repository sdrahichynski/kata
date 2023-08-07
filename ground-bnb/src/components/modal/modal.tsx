"use client";

import * as React from "react";
import { IoClose } from "react-icons/io5";
import * as C from "@/components";

interface ModalProps {
  isOpen?: boolean;

  close(): void;

  onSubmit?(): void;

  submitLabel?: string;

  onCancel?(): void;

  cancelLabel?: string;

  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  close,
  onSubmit,
  onCancel,
  submitLabel = "Ok",
  cancelLabel = "Cancel",
  header,
  footer,
  children,
}) => {
  const handleClose = close;
  const handleCancel = onCancel;
  const handleSubmit = onSubmit;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`flex fixed h-full w-full bg-black bg-opacity-50 z-20 top-0 left-0`}
    >
      <div
        className={`relative p-4 mx-auto my-auto bg-white sm:rounded-xl w-full h-full sm:w-[480px] sm:h-auto`}
      >
        <header className="pb-2 min-h-[18px] text-xl font-bold text-center px-4">
          {header}

          <button className="absolute right-1 top-1 p-1" onClick={handleClose}>
            <IoClose size={12} />
          </button>
        </header>

        {children && <div className="py-2">{children}</div>}

        <div className="flex flex-row gap-2 py-2 items-center">
          {handleCancel && (
            <C.Button outlined onClick={handleCancel}>
              {cancelLabel}
            </C.Button>
          )}

          {handleSubmit && (
            <C.Button onClick={handleSubmit}>{submitLabel}</C.Button>
          )}
        </div>

        {footer && <footer className="py-2 border-t-[1px]">{footer}</footer>}
      </div>
    </div>
  );
};

export default Modal;
