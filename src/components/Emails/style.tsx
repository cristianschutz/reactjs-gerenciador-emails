import styled from "styled-components";
import { colors } from "../../styles/global";

const Container = styled.div`
  .email-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* list item */
  .email-item {
    padding: 15px 10px;
    border-bottom: 1px solid ${colors.gray};
    position: relative;
    display: flex;
    background: rgba(255, 255, 255, 0.5);
    border-left: 3px solid ${colors.gray};

    &:hover {
      background: transparent;
      .email-col-owner {
        label {
          opacity: 1;
        }

        .email-user {
          opacity: 0;
        }
      }

      .email-actions {
        opacity: 1;
      }
    }

    &.active {
      border-left: 0;

      .email-col-owner {
        label {
          opacity: 1;
        }

        .email-user {
          opacity: 0;
        }
      }
    }
  }

  /* left col */
  .email-col-owner {
    width: 50px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin-right: 15px;

    label {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }

  .email-user {
    align-items: center;
    align-self: center;
    background: ${colors.green};
    border-radius: 50%;
    color: #fff;
    display: flex;
    cursor: pointer;
    font-size: 10px;
    font-weight: 700;
    height: 30px;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    width: 30px;
    transition: all 0.3s ease-in-out;
  }

  /* right col */
  .email-col-data {
    width: 100%;
  }

  .email-datetime {
    font-size: 12px;
    color: ${colors.black};
  }
  .email-subject {
    margin: 0;
    font-size: 12px;
  }

  .email-name {
    margin: 0 0 8px;
    display: block;
    font-size: 15px;
    padding-right: 35px;
  }

  .email-users {
    display: flex;
    list-style: none;
    position: absolute;
    right: 10px;
    bottom: 10px;

    .email-user {
      margin-left: -13px;
      width: 20px;
      height: 20px;
      font-size: 8px;
      transition: all 0.2s ease-in-out;

      &:hover {
        margin-top: -10px;
      }
    }

    &:hover {
      .email-user {
        margin-left: 2px;
      }
    }
  }

  .email-actions {
    display: flex;
    position: absolute;
    right: 15px;
    top: 17px;
    transition: all 0.3s ease-in-out;
    opacity: 0;

    button {
      padding: 0;
      background: none;
      border: 0;
      cursor: pointer;
    }

    svg {
      width: 11px;
      margin-left: 5px;
    }
  }
`;

export { Container };
