import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`;

export const Column = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const BoxImage = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const LeftImage = styled.img`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      position: absolute;
      width: 168px;
      height: 168px;
      left: 60%;
      top: 20%;
      border-radius: 50%;
      border: solid 5px ${theme.colors.ribonWhite};
      filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      left: 56%;
      top: 22%;
    }
  `}
`;

export const RightImage = styled.img`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      position: absolute;
      width: 168px;
      height: 168px;
      left: 20%;
      top: 20%;
      border-radius: 50%;
      border: solid 5px ${theme.colors.ribonWhite};
      filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      left: 35%;
      top: 22%;
    }
  `}
`;

export const CenterImage = styled.img`
  ${({ theme }) => css`
    z-index: 2;
    width: 256px;
    height: 256px;
    top: 173px;
    border-radius: 50%;
    border: solid 5px ${theme.colors.ribonWhite};
    filter: drop-shadow(0px 20px 40px ${theme.colors.ribonShadow});
  `}
`;

export const BoxBottomImage = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      justify-content: center;
      margin-top: -46px;
    }
  `}
`;

export const BottomImageContainer = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      justify-content: center;
      width: 80px;
      bottom: 10px;
      height: 80px;
      border-radius: 50%;
      background: ${theme.colors.ribonBlue};
      z-index: 3;
    }
  `}
`;

export const BottomImage = styled.img`
  ${() => css`
    width: 56px;
    height: 48px;
    margin: 16px 12px;
  `}
`;