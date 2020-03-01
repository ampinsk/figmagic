import styled from 'styled-components';

import HeadingSCss from './HeadingSCss.mjs'

// Then do your regular imports like:
// import fontSizes from 'tokens/fontSizes.mjs';

// TODO: Set element with code, now it's hardcoded as a button
const HeadingSStyled = styled.button`
	${HeadingSCss};
  width: 100%;
`;

export default HeadingSStyled;