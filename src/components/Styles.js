import styled from "styled-components";

// #background
import background from "./../asserts/bg.jpg";

import { Link } from "react-router-dom";

export const colors = {
	primary: "#fff",
	theme: "#BE185D",
	light1: "#F3F4F6",
	light2: "E5E7E8",
	dark1: "#1F2937",
	dark2: "#4B5563",
	dark3: "#9CA3AF",
	red: "#DC2626",
};

//styled components
export const StyledContainer = styled.div`
	margin: 0;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
		url(${background});
	height: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	position: relative;
`;

//Home
export const StyledTitle = styled.h2`
	font-size: ${(props) => props.size}px;
	text-align: center;
	color: ${(props) => (props.color ? props.color : colors.primary)};
	padding: 5px;
	margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
	font-size: ${(props) => props.size}px;
	text-align: center;
	color: ${(props) => (props.color ? props.color : colors.primary)};
	padding: 5px;
	margin-bottom: 25px;
`;
export const Avatar = styled.div`
	width: 85px;
	height: 95px;
	border-radius: 50px;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
	margin: auto;
`;

export const StyledButton = styled(Link)`
	padding: 10px;
	width: 150px;
	background-color: transparent;
	font-size: 16px;
	border: 3px solid ${colors.primary};
	border-radius: 20px;
	color: ${colors.primary};
	text-decoration: none;
	text-align: center;
	outline: 0;
	transition: ease-in-out 0.3s;

	&:hover {
		background-color: ${colors.primary};
		color: ${colors.theme};
		cursor: pointer;
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	margin-top: 25px;
`;

//Input
export const StyledTextInput = styled.input`
	width: 280px;
	padding: 15px;
	padding-left: 50px;
	font-size: 17px;
	letter-spacing: 1px;
	color: ${colors.dark1};
	background-color: ${colors.light2};
	border: 0;
	outline: 0;
	display: block;
	margin: 2px auto 10px auto;
	transition: ease-in-out 0.3s;
	${(props) =>
		props.invalid &&
		`background-color:${colors.red};
	color : ${colors.primary}
	`}
	&:focus {
		background-color: ${colors.dark2};
		color: ${colors.primary};
	}
`;

export const StyledLabel = styled.p`
	text-align: left;
	font-size: 13px;
	font-weight: bold;
`;

export const StyledFormArea = styled.div`
	background-color: ${(props) => props.bg || colors.light1};
	text-align: center;
	margin-top: 30px;
	padding: 22px 45px;
`;

export const StyledFormButton = styled.button`
	padding: 10px;
	width: 150px;
	background-color: transparent;
	font-size: 16px;
	border: 2px solid ${colors.theme};
	border-radius: 20px;
	color: ${colors.theme};
	transition: ease-in-out 0.3s;
	outline: 0;

	&:hover {
		background-color: ${colors.theme};
		color: ${colors.primary};
		cursor: pointer;
	}
`;

//Icons

export const StyledIcon = styled.p`
	color: ${colors.dark1};
	position: absolute;
	font-size: 21px;
	top: 25px;
	${(props) => props.right && `right : 15px;`}
	${(props) => !props.right && `left : 15px;`}
`;

//display message
export const ErrorMsg = styled.div`
	font-size: 13px;
	color: ${colors.red};
	margin-top: -5px;
	text-align: left;
`;

export const ExtraText = styled.p`
	font-size: ${(props) => props.size}px;
	text-align: center;
	color: ${(props) => (props.color ? props.color : colors.dark2)};
	padding: 2px;
	margin-top: 10px;
`;

export const TextLink = styled(Link)`
	text-decoration: none;
	color: ${colors.theme};
	transition: ease-in-out 0.3s;
	font-weight: 200;
	&:hover {
		text-decoration: underline;
		letter-spacing: 2px;
		font-weight: bold;
	}
`;

//copyright
export const CopyrightText = styled.p`
	padding: 5px;
	margin: 20px;
	text-align: center;
	color: ${colors.light1};
`;
