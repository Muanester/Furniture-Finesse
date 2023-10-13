import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (100)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          unde adipisci reiciendis itaque dignissimos quo saepe ut, aut delectus
          possimus, minima molestias provident, similique cum nihil recusandae
          doloremque accusantium tempora nulla? Praesentium corporis repellat
          excepturi consectetur quo saepe voluptatum provident dolorum quasi,
          sit atque totam necessitatibus iusto? Necessitatibus, quod quia?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          inventore quasi architecto dolores aliquid natus doloremque
          perferendis, repudiandae dolorem error?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
