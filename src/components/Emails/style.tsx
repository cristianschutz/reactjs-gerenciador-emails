import styled from 'styled-components';

const Container = styled.div`
  .email-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* list item */
  .email-item {
    padding: 15px 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray};
    position: relative;
    display: flex;
    border-left: 3px solid ${(props) => props.theme.colors.gray};

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
    background: ${(props) => props.theme.colors.green};
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

  .email-infos {
    display: flex;
    align-items: center;
    margin: 0 0 8px;
  }

  .email-name {
    font-size: 15px;
    margin-right: 5px;
  }

  .email-datetime {
    font-size: 12px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.black};
  }

  .email-tags {
    display: flex;

    span {
      padding: 2px 5px;
      background: rgba(0, 0, 0, 0.2);
      font-size: 9px;
      color: #fff;
      margin-right: 5px;
      border-radius: 2px;
    }
  }

  .email-subject {
    margin: 0;
    font-size: 12px;
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
      ${(props) =>
        props.theme.title === 'dark'
          ? `
          color: #fff;
        `
          : ``}
    }
  }
`;

export { Container };
