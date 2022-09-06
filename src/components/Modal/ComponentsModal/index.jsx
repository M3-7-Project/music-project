import { Motion } from "./styles";

const AnimationDiv = ({ children }) => {
  return (
    <Motion
      initial={{ opacity: 0, y: 60, scale: 0.5 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300 },
      }}
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
