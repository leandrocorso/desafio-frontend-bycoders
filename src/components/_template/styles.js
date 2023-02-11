import styled from "styled-components";

const StyledTemplate = styled.div`
  width: 1000px;
  margin: ${({ theme }) => theme.spacement} auto;

  .header {
    grid-area: header;
    height: 100px;
    display: grid;
    grid-template-areas:
      "brand search auth-status"
      "brand menu menu";
    grid-template-columns: 2fr 5fr 3fr;

    &__brand {
      grid-area: brand;
      display: flex;
      width: 300px;
      align-items: center;

      .logo {
        width: 190px;
      }

      #yt-icon {
        fill: ${({ theme: { colors } }) => colors.primary};
      }
    }

    &__search {
      grid-area: search;
      position: relative;

      &__form {
        display: flex;

        &__keyword {
          width: 100%;
          border: 1px solid ${({ theme }) => theme.colors.darkGray};
          height: 40px;
          padding: 0 10px;
        }

        &__button {
          background-color: ${({ theme }) => theme.colors.darkGray};
          color: ${({ theme }) => theme.colors.white};
          height: 40px;
          padding: 0 10px;
          cursor: pointer;

          &:disabled {
            cursor: not-allowed;
            background-color: ${({ theme: { colors } }) => colors.gray};
          }
        }
      }

      &__terms {
        position: absolute;
        width: 100%;
        z-index: 1;
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.darkGray};
        border-top: 0;

        &__list {
          &__item {
            padding: ${({ theme }) => theme.spacement};
          }
        }
      }
    }

    &__auth-status {
      grid-area: auth-status;
      display: flex;
      justify-content: flex-end;

      a {
        color: ${({ theme }) => theme.colors.blue};
      }
    }

    &__menu {
      grid-area: menu;
      display: flex;
      justify-content: space-between;

      &__primary,
      &__secondary {
        display: flex;
        gap: ${({ theme }) => theme.spacement};

        &__item {
          a:hover {
            color: ${({ theme }) => theme.colors.primary};
          }

          &--active a {
            color: ${({ theme }) => theme.colors.primary};
            font-size: calc(${({ theme }) => theme.fonts.default.size} * 1.2);
            font-weight: 700;
            text-decoration: none;
          }
        }
      }
    }
  }

  .featured {
    grid-area: featured;
    width: 100%;
    background-color: #ddd;

    &__wrapper {
      display: grid;
      grid-template-columns: 600px auto;
      gap: ${({ theme }) => theme.spacement};
    }

    &__player {
      &__embed {
        width: 600px;
        height: 337.5px;
        margin-bottom: ${({ theme }) => theme.spacement};

        iframe {
          width: 100%;
          height: 100%;
        }
      }

      &__title {
        margin-bottom: calc(${({ theme }) => theme.spacement} / 2);

        h1 {
          margin-bottom: 0;
        }
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .more-videos {
    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;

      &__item__title {
        font-size: 0.9rem;
      }
    }
  }
`;

export default StyledTemplate;
