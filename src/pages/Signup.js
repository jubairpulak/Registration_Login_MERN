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

import { FiMail, FiLock, FiCalendar, FiUser } from "react-icons/fi";

//formik import

import { Formik, Form } from "formik";
import { TextInput } from "../components/Formlib";
import * as Yup from "yup";
//auth & redux
import { connect } from "react-redux";
import { signupUser } from "./../auth/actions/userActions";
import { useHistory } from "react-router-dom";
const Signup = ({ signupUser }) => {
	const history = useHistory();
	return (
		<div>
			<StyledFormArea>
				<Avatar image={Logo} />
				<StyledTitle size={30} color={colors.theme}>
					Member Signup
				</StyledTitle>
				<Formik
					initialValues={{
						email: "",
						password: "",
						repeatPassword: "",
						dateOfBirth: "",
						name: "",
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email("Invalid Email address")
							.required("Required"),
						password: Yup.string()
							.min(8, "Password is too sort")
							.max(30, "Password is too long")
							.required("Password is required"),
						name: Yup.string().required("Name Required"),
						dateOfBirth: Yup.date().required("Required"),
						repeatPassword: Yup.string()
							.required("Required")
							.oneOf(
								[Yup.ref("password")],
								"Password must match",
							),
					})}
					onSubmit={(values, { setSubmitting, setFieldError }) => {
						signupUser(
							values,
							history,
							setFieldError,
							setSubmitting,
						);
					}}>
					{({ isSubmitting }) => (
						<Form>
							<TextInput
								name="name"
								type="text"
								label="Full Name"
								placeholder="Jubair Pulak"
								icon={<FiUser />}
							/>
							<TextInput
								name="email"
								type="text"
								label="Email Address"
								placeholder="sample@gmail.com"
								icon={<FiMail />}
							/>
							<TextInput
								name="dateOfBirth"
								type="date"
								label="Date Of Birth"
								placeholder="sample@gmail.com"
								icon={<FiCalendar />}
							/>
							<TextInput
								name="password"
								type="password"
								label="Password"
								placeholder="********"
								icon={<FiLock />}
							/>
							<TextInput
								name="repeatPassword"
								type="password"
								label="Repeat Password"
								placeholder="********"
								icon={<FiLock />}
							/>

							<ButtonGroup>
								{!isSubmitting && (
									<StyledFormButton type="sumit">
										signup
									</StyledFormButton>
								)}

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
					Already have an account?{" "}
					<TextLink to="/login">Login</TextLink>
				</ExtraText>
			</StyledFormArea>
			<CopyrightText>All rights reserved &copy;2020</CopyrightText>
		</div>
	);
};

export default connect(null, {
	signupUser,
})(Signup);
