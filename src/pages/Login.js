import React from "react";

import {
	StyledTextInput,
	StyledFormArea,
	StyledFormButton,
	StyledLabel,
	Avatar,
	StyledTitle,
	colors,
	ButtonGroup,
	ExtraText,
	TextLink,
	CopyrightText,
} from "./../components/Styles";
import Logo from "./../asserts/logo.png";
import Loader from "react-loader-spinner";

import { FiMail, FiLock } from "react-icons/fi";

//formik import

import { Formik, Form } from "formik";
import { TextInput } from "../components/Formlib";
import * as Yup from "yup";

//auth & redux
import { connect } from "react-redux";
import { loginUser } from "./../auth/actions/userActions";
import { useHistory } from "react-router-dom";
const Login = ({ loginUser }) => {
	const history = useHistory();
	return (
		<div>
			<StyledFormArea>
				<Avatar image={Logo} />
				<StyledTitle size={30} color={colors.theme}>
					Member Login
				</StyledTitle>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email("Invalid Email address")
							.required("Required"),
						password: Yup.string()
							.min(8, "Password is too sort")
							.max(30, "Password is too long")
							.required("Password is required"),
					})}
					onSubmit={(values, { setSubmitting, setFieldError }) => {
						loginUser(
							values,
							history,
							setFieldError,
							setSubmitting,
						);
					}}>
					{({ isSubmitting }) => (
						<Form>
							<TextInput
								name="email"
								type="text"
								label="Email Address"
								placeholder="sample@gmail.com"
								icon={<FiMail />}
							/>
							<TextInput
								name="password"
								type="password"
								label="Password"
								placeholder="********"
								icon={<FiLock />}
							/>
							<ButtonGroup>
								{console.log(isSubmitting)}
								{!isSubmitting && (
									<StyledFormButton type="sumit">
										Login
									</StyledFormButton>
								)}

								{console.log("data : -<", isSubmitting)}

								{isSubmitting && (
									<Loader
										type="ThreeDots"
										color={colors.theme}
										height={100}
										width={100}
									/>
								)}
							</ButtonGroup>
						</Form>
					)}
				</Formik>
				<ExtraText>
					New Here? <TextLink to="/signup">Signup</TextLink>
				</ExtraText>
			</StyledFormArea>
			<CopyrightText>All rights reserved &copy;2020</CopyrightText>
		</div>
	);
};

export default connect(null, { loginUser })(Login);
