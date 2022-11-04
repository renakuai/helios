import { useEffect, useState } from 'react';
import './_tabs-pages.scss';
import uuid from 'react-uuid';
import { useOutletContext } from "react-router-dom";
import Btn from '../foundations/Button/Button'


function Buttons() {
  const { semanticColorTokens, setActiveTab, radius } = useOutletContext();

  useEffect(() => {
    setActiveTab('Buttons');
  })

  return (
    <div className="Page" >

      <div className="Row">
        <h5>Button Types</h5>
        <div className="Row-horizontal">
          <div className="Item">
            <h6>Primary</h6>

            <Btn
              type="primary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>

          <div className="Item">
            <h6>Secondary</h6>

            <Btn
              type="secondary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>

          <div className="Item">
            <h6>Tertiary</h6>

            <Btn
              type="tertiary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>
        </div>
      </div>

      <div className="Row">
        <h5>Button Sizes</h5>
        <div className="Row-horizontal">
          <div className="Item">
            <h6>Large</h6>

            <Btn
              size="large"
              type="primary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>

          <div className="Item">
            <h6>Small</h6>

            <Btn
              type="secondary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>

        </div>
      </div>

    </div >
  );
}

export default Buttons;