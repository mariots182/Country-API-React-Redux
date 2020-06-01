import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  .content {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 14px;
  }
`;

function Header() {
  function handleClick() {}
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Where in the world?</h1>

          <div className="dark-mode">
            <p onClick={handleClick}>
              <i className="far fa-moon"></i>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
