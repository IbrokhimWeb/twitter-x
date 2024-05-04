import React, { FC, ReactElement } from "react";
import { Dialog, DialogContent } from "./dialog";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  body?: ReactElement;
  footer?: ReactElement;
  step?: number;
  totalStep?: number;
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, onClose, body, footer, step, totalStep = 2 } = props;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black p-1">
        <div className="flex items-center gap-6">
          <button className="p-1 border-none text-white hover:opacity-70 transition w-fit">
            <X size={28} onClick={onClose} />
          </button>
          {step ? (
            <div className="text-xl font-bold">
              Step {step} of {totalStep}
            </div>
          ) : null}
        </div>
        <div className="mt-4">{body}</div>
        {footer ? <div>{footer}</div> : null}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
