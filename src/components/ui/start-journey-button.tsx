"use client";

import React from 'react';
import styled from 'styled-components';

const StartJourneyButton = () => {
  return (
    <StyledWrapper>
      <button className="button">
        {/* <span>Start your Journey</span> */}
        <span>Apply Now</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
          <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
          <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
          <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --main-size: 1em;
    @media (min-width: 768px) {
      --main-size: 1.5em;
    }
    --color-text: #ffffff;
    --color-background: rgb(var(--accent-primary));
    --color-background-hover: rgb(var(--accent-secondary));
    --color-outline: rgba(var(--accent-primary), 0.4);
    --color-shadow: rgba(0, 0, 0, 0.4);
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    border-radius: calc(var(--main-size) * 100);
    padding: 0.5em 1.5em;
    font-family: inherit;
    font-weight: 700;
    font-size: var(--main-size);
    color: var(--color-text);
    background: var(--color-background);
    box-shadow: 0 0 0.5em 0 var(--color-background);
    transition: 0.5s;
    position: relative;
    overflow: hidden;
  }

  .button:active {
    transform: scale(0.95);
  }

  .button:hover {
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 1.5em 0 var(--color-background);
    animation:
      ripple 1s linear infinite,
      colorize 1s infinite;
    transition: 0.5s;
  }

  .button span {
    margin-right: 0.5em;
    transition: 0.5s;
    white-space: nowrap;
  }

  .button:hover span {
    text-shadow: 2px 2px 4px var(--color-shadow);
  }

  .button:active span {
    text-shadow: none;
  }

  .button svg {
    height: 1em;
    fill: var(--color-text);
    margin-right: -0.5em;
    position: relative;
    transition: 0.5s;
  }

  .button:hover svg {
    margin-right: 0;
    transition: 0.5s;
    filter: drop-shadow(2px 2px 2px var(--color-shadow));
  }

  .button:active svg {
    filter: none;
  }

  .button svg polygon:nth-child(1) {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  .button svg polygon:nth-child(2) {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .button:hover svg polygon:nth-child(1) {
    transform: translateX(0%);
    animation: opacity 1s infinite 0.6s;
  }

  .button:hover svg polygon:nth-child(2) {
    transform: translateX(0%);
    animation: opacity 1s infinite 0.4s;
  }

  .button:hover svg polygon:nth-child(3) {
    animation: opacity 1s infinite 0.2s;
  }

  @keyframes opacity {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes colorize {
    0% {
      background: var(--color-background);
    }
    50% {
      background: var(--color-background-hover);
    }
    100% {
      background: var(--color-background);
    }
  }

  @keyframes ripple {
    0% {
      outline: 0em solid transparent;
      outline-offset: -0.1em;
    }
    50% {
      outline: 0.2em solid var(--color-outline);
      outline-offset: 0.2em;
    }
    100% {
      outline: 0.4em solid transparent;
      outline-offset: 0.4em;
    }
  }
`;

export default StartJourneyButton;
