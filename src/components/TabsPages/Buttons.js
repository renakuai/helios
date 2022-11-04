import { useEffect, useState } from 'react';
import './_tabs-pages.scss';
import uuid from 'react-uuid';
import { useOutletContext } from "react-router-dom";
import Btn from '../foundations/Button/Button'


function Buttons() {
  const { semanticColorTokens, setActiveTab, radius } = useOutletContext();

  const icon = 'M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z'

  useEffect(() => {
    setActiveTab('Buttons');
  })

  return (
    <div className="Page" >

      <div className="Row">
        <h5>Types</h5>
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

          <div className="Item">
            <h6>Disabled</h6>

            <Btn
              type="disabled"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>

          <div className="Item">
            <h6>Danger</h6>

            <Btn
              type="danger"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>
        </div>
      </div>

      <div className="Row">
        <h5>Sizes</h5>
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
            <h6>Small (Default)</h6>

            <Btn
              type="secondary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
            >Button</Btn>
          </div>

        </div>
      </div>

      <div className="Row">
        <h5>Icon Positioning</h5>
        <div className="Row-horizontal">
          <div className="Item">
            <h6>Right</h6>

            <Btn
              type="primary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
              iconRight={icon}
            >Button</Btn>
          </div>

          <div className="Item">
            <h6>Left</h6>

            <Btn
              type="primary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
              iconLeft={icon}
            >Button</Btn>
          </div>

          <div className="Item">
            <h6>Left and Right</h6>

            <Btn
              type="primary"
              semanticColorTokens={semanticColorTokens}
              radius={radius}
              iconRight={icon}
              iconLeft={icon}
            >Button</Btn>
          </div>

          <div className="Item">
            <h6>None (Default)</h6>

            <Btn
              type="primary"
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