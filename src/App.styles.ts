import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 3rem;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 1.5rem;
  top: 1.5rem;
`;