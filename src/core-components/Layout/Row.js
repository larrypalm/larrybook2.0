import Tag from 'clean-tag';
import styled from 'react-emotion';
import {
    display,
    flexDirection
} from 'styled-system';

const Row = styled(Tag)`
    ${display}
    ${flexDirection};
`;

Row.defaultProps = {
    flexDirection: 'row',
    display: 'flex'
};

export default Row;
