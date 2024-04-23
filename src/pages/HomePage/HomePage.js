import { DescriptionInfo } from 'components/DescriptionInfo/DescriptionInfo';
import { Container } from './HomePage.styled';
import { Footer } from 'components/Footer/Footer';

export const HomePage = () => {
  return (
    <>
      <Container>
        <DescriptionInfo />
      </Container>
      <Footer />
    </>
  );
};
