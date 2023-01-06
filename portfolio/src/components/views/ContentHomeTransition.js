import React, { useState, useEffect, useRef } from 'react'
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";

import ContentHome from './ContentHome'

const ContentHomeTransition = (props) => {

    const { started, onClickResume, finished } = props

    return (
        <Transition in={started} timeout={150}>
            {state => (
                <ContentHome className={`fade fade-${state}`} />
            )}
        </Transition>
    )
    
}


function App() {
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key="line1"
          timeout={500}
          classNames="fade"
          onEnter={() => {
            setTimeout(() => {
              console.log("line1 entered");
            }, 500);
          }}
        >
          <p>Line 1</p>
        </CSSTransition>
        <CSSTransition
          component={null}
          key="line2"
          timeout={500}
          classNames="fade"
          onEnter={() => {
            setTimeout(() => {
              console.log("line2 entered");
            }, 1000);
          }}
        >
          <p>Line 2</p>
        </CSSTransition>
        <CSSTransition
          component={null}
          key="line3"
          timeout={500}
          classNames="fade"
          onEnter={() => {
            setTimeout(() => {
              console.log("line3 entered");
            }, 1500);
          }}
        >
          <p>Line 3</p>
        </CSSTransition>
        <CSSTransition
          component={null}
          key="line4"
          timeout={500}
          classNames="fade"
          onEnter={() => {
            setTimeout(() => {
              console.log("line4 entered");
            }, 2000);
          }}
        >
          <p>Line 4</p>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default ContentHomeTransition