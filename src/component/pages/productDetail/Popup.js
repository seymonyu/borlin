import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "../../../stylesheets/ProductDetail.scss";
export const mystyle = {
  color: "white",
  backgroundColor: "black",
  padding: "10px",
  fontFamily: "Arial",
};
const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        className="popup--button"
        style={mystyle}
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        DESCRIPTION
      </button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Popup;
