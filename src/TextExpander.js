import { useState } from "react";

export function TextExpander({
  children,
  expanded = false,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(expanded);

  function expandHandler() {
    setIsOpen(() => !isOpen);
  }

  const buttonStyle = {
    color: `${buttonColor}`,
    fontSize: "15px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0",
    marginLeft: "5px",
  };

  const splittedWords = children.split(" ");
  const collapsedText = splittedWords.slice(0, collapsedNumWords).join(" ");

  return (
    <div className={className}>
      <p>
        {isOpen ? children : collapsedText + "..."}
        <button style={buttonStyle} onClick={expandHandler}>
          {isOpen ? collapseButtonText : expandButtonText}
        </button>
      </p>
    </div>
  );
}
