import styled from 'react-emotion';
import Tag from 'clean-tag';
import {
    space,
    fontSize,
    color,
    textAlign,
    lineHeight,
    fontWeight,
    letterSpacing,
    fontFamily,
    width,
    display,
} from 'styled-system';
import defaultProps from 'recompose/defaultProps';

const Text = styled(Tag)`
    ${space};
    ${width};
    ${fontSize};
    ${color};
    ${textAlign};
    ${lineHeight};
    ${fontWeight};
    ${letterSpacing};
    ${fontFamily};
    ${display};
`;

Text.propTypes = {
    ...space.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes,
    ...textAlign.propTypes,
    ...lineHeight.propTypes,
    ...fontWeight.propTypes,
    ...letterSpacing.propTypes,
    ...fontFamily.propTypes,
    ...width.propTypes,
    ...display.propTypes,
};

export default defaultProps({ is: 'span' })(Text);
