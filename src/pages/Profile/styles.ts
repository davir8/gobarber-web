import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  > header {
    display: flex;
    width: 100%;
    position: absolute;
    align-items: center;
    height: 144px;
    background: #28262e;

    > div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      text-decoration: none;

      svg {
        color: #999591;
        font-size: 24px;
      }
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  margin-bottom: 32px;
  position: relative;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #ff9000;
    border: 0;
    transition: background 0.2s;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: #312e38;
      font-size: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 auto;

  form {
    margin: 60px 0;
    width: 340px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }
`;
