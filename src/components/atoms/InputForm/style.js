import styled from 'styled-components';

export const ContainerDiv = styled.div`
	div {
		display: flex;
		width: 100%;
	}
`;
export const ContainerInput = styled.div`
	input {
		height: 100%;
		width: 100%;
    margin: 8px 0px;
		padding: 12px 32px 12px;
		font-size: 14px;
		outline: none;
		border: 1px solid ${(props) => props.theme.colors.gray[700]};
		border-radius: 8px;
		background: ${(props) => props.theme.colors.white};

		&:hover {
			box-shadow: 0px 3px 6px rgba(17, 101, 186, 0.6);
			input {
				border: 1px solid ${(props) => props.theme.colors.blue[400]};
			}
		}

		&:focus-within {
			border-radius: 8px;
			-moz-border-radius: 8px;
			-webkit-border-radius: 8px;
			-webkit-box-shadow: 0px 0px 15px 1px
				${(props) => props.theme.colors.blue[700]};
			-moz-box-shadow: 0px 0px 15px 1px
				${(props) => props.theme.colors.blue[700]};
			box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.blue[700]};
			border: ${(props) => props.theme.colors.blue[700]};
			outline: none;
		}
	}
`;

export const ContainerError = styled.div`
	.error-message {
		color: ${(props) => props.theme.colors.error};
		font-size: 12px;
		margin-bottom: 8px;
	}
`;

export const StyledLabel = styled.label`
	color: ${(props) => props.theme.colors.gray[700]};
`;

export const StyledLabelError = styled(StyledLabel)`
	color: ${(props) => props.theme.colors.error};
`;
