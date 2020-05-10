import React from 'react';
import styled, { keyframes } from 'styled-components';

const Transition = (props) => {
	const {
		className,
		fontSize,
		mobileFontSize,
		text,
		transform
	} = props;

    return (
        <Root className={ className }>
			<Marquee>
				<Inner>
					<Text fontSize={ fontSize }
						mobileFontSize={ mobileFontSize }
						transform={ transform }
					>
						{ text }
					</Text>
					<Text fontSize={ fontSize }
						mobileFontSize={ mobileFontSize }
						transform={ transform }
					>
						{ text }
					</Text>
					<Text fontSize={ fontSize }
						mobileFontSize={ mobileFontSize }
						transform={ transform }
					>
						{ text }
					</Text>
					<Text fontSize={ fontSize }
						mobileFontSize={ mobileFontSize }
						transform={ transform }
					>
						{ text }
					</Text>
				</Inner>
			</Marquee>
        </Root>
    );
}

export default Transition;

const marquee = keyframes`
    0% {
        transform: translate3d(calc(-25% + 30vw), 0, 0);
    }

    100% {
        transform: translate3d(calc(-50% + 30vw), 0, 0);
    }
`;

const Root = styled.div`
    width: 100%;
    user-select: none;
`;

const Marquee = styled.div`
	overflow: hidden;
	width: 100vw;
`;

const Inner = styled.div`
    width: fit-content;
	display: flex;
	position: relative;
	animation: ${ marquee } 12s linear infinite;
	animation-play-state: running;
`;

const Text = styled.span`
    white-space: nowrap;
	font-size: ${ ({ fontSize}) => fontSize ? fontSize : '15vw' };
	padding: 20px 1vw 0;
	line-height: 1;
	text-transform: ${ ({ transform }) => transform ? transform : 'uppercase' };

	@media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
		font-size: ${ ({ fontSize }) => fontSize ? fontSize : '50vw' };
		font-size: ${ ({ mobileFontSize }) => mobileFontSize ? mobileFontSize : '50vw' };
    }
`;
