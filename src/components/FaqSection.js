import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            quaerat.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* break */}
      <div className="question">
        <h4>How do I end?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            quaerat.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* break */}
      <div className="question">
        <h4>How do I new?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            quaerat.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* break */}
      <div className="question">
        <h4>How do I frequent?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            quaerat.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* break */}
      <div className="question">
        <h4>How do I something?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            quaerat.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* break */}
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
