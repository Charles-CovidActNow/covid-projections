import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  padding: 0;
  padding: 24px;
  min-height: calc(100vh - 64px);
`;

export const Content = styled.div`
  margin: auto;

  h1,
  h5,
  p {
    margin-bottom: 24px;
  }

  @media (min-width: 600px) {
    width: 900px;
  }
`;

export const Quote = styled.div`
  background-color: white;
  border-radius: 4px;
  margin: 24px 12px;
  padding: 24px;
  display: flex;
  svg {
    width: 28px;
    height: 28px;
    transform: rotate(180deg);
    margin-right: 8px;
    position: relative;
    top: -8px;
    &:after {
      content: '|';
      color: red;
    }
    @media (min-width: 600px) {
      width: 48px;
      height: 48px;
    }
  }
  p {
    margin: 0;
    font-size: 10%;
    font-size: 20px;
    @media (min-width: 600px) {
      font-size: 30px;
    }
  }
`;

export const EndorsersWrapper = styled(Grid)`
  @media (min-width: 600px) {
    width: 900px;
  }
`;

export const MorsEndorsement = styled(Typography)`
  height: 284px;
  background-color: white;
  border-radius: 4px;
  margin: 12px 12px 0 0;
  padding: 28px;
  color: #546e7a;
`;