import { useContext } from "react";
import { ThemeContext } from "./TrainUseContext";
import "../../App.css";

const Paragraph = () => {
  const theme = useContext(ThemeContext);
  return (
    <p className={theme}>
      Here you can find activities to practise your reading skills. Reading will
      help you to improve your understanding of the language and build your
      vocabulary.
    </p>
  );
};
export default Paragraph;
