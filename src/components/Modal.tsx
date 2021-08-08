import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, ModalOverlay } from '~styles/components';

type ModalProps = {
    visible: boolean | (() => void);
    toggle: () => void;
    children: React.ReactChild[];
};

const Modal = ({ toggle, visible, children }: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            toggle();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return visible
        ? ReactDOM.createPortal(
              <ModalOverlay className="modal">
                  <ModalContainer
                      ref={ref}
                      className="modal-pop"
                      role="dialog"
                      aria-modal="true"
                  >
                      {children}
                  </ModalContainer>
              </ModalOverlay>,
              document.body
          )
        : null;
};

export default Modal;
