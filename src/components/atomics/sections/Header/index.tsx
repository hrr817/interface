import Logo from "assets/icons/logo.svg";
import * as S from "./styles";

export type Props = {
  sideLogo?: string;
};
function Header({ sideLogo }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Logo src={Logo} alt="logo" />
      <S.Divider>|</S.Divider>
      <S.Logo src={sideLogo} />
    </S.Container>
  );
}

export default Header;
