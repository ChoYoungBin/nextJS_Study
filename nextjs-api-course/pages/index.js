import { useRef } from "react";

const HomePage = () => {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeebback = feedbackInput.current.value;

    fetch(); //{email : 'test@mail.com', text:'some feedback'}
    //handler();
  };

  return (
    <>
      <div>
        <h1>The Home Page</h1>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email">Your Email Address</label>
            <input type="email" id="email" ref={emailInput} />
          </div>

          <div>
            <label htmlFor="feedback">Your FeedBack</label>
            <textarea id="feedback" rows="5" ref={feedbackInput} />
          </div>
          <button>Send Button </button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
