import Tag from 'clean-tag';
import styled from 'react-emotion';
import {
    display,
    flexDirection
} from 'styled-system';

const Column = styled(Tag)`
    ${display}
    ${flexDirection};
`;

Column.defaultProps = {
    flexDirection: 'column',
    display: 'flex'
};

export default Column;
