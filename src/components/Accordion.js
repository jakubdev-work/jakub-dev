import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Work Strategy",
    details:
      "I prioritize clarity, efficiency, and innovation, aligning our efforts with client goals to deliver exceptional results.",
  },
  {
    title: "The Process of Our Work",
    details:
      "Our process involves strategic planning, collaborative execution, and iterative improvements, ensuring high-quality outcomes tailored to meet specific needs.",
  },
  {
    title: "Core Value of Development",
    details:
      "Our development is driven by quality, collaboration, and a user-centric mindset, ensuring impactful and efficient solutions.",
  },
  {
    title: "Desire to Work Hard",
    details:
      "We are committed to excellence, driven by a passion to push boundaries and deliver outstanding results through dedication and perseverance.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
