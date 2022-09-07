import { Motion } from "./styles";

const AnimationDiv = ({ children }) => {
  return (
    <Motion
      exit={{
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      }}
    >
      {children}
    </Motion>
  );
};

export default AnimationDiv;
