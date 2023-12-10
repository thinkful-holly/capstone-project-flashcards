import React from "react";

function CardStudyButtons({ handleNext, handleFlip, nextButton }) {
  return (
    <div className="btn-group pl-2" role="group" aria-label="Study Card Buttons group">
      <button
        type="button"
        onClick={handleFlip}
        className="btn btn-secondary mr-2"
        style={{ maxWidth: "150px", backgroundColor: "green", color: "white" }}
      >
        Flip
      </button>

      {nextButton && (
        <button
          type="button"
          onClick={handleNext}
          className="btn btn-primary"
          style={{ maxWidth: "150px", backgroundColor: "blue", color: "white" }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default CardStudyButtons;