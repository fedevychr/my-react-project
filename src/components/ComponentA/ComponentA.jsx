import { useToggle } from '../../hooks/useToggle.js';

const ComponentA = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentA;
