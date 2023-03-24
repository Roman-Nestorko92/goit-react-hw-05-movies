import Container from 'components/Container';
import gerb from '../../utilities/images/pngegg-min.png';
import {
  FooterWrapper,
  Wrapper,
  Copyright,
  Studios,
  Logo,
} from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright>© Movie.search 2023</Copyright>
          <Logo src={gerb} />
          <Studios>DS</Studios>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
