import { useRef } from "react";
import classes from "./NewwMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImg = imgInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescrition = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      img: enteredImg,
      address: enteredAddress,
      description: enteredDescrition,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <>
      <Card>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Meetup title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div>
            <label htmlFor="image">Meetup Img</label>
            <input type="url" required id="image" ref={imgInputRef} />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div>
            <label htmlFor="description">Address</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewMeetupForm;
