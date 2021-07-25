import React, { useState } from "react";
import { useField } from "formik";

import { StyledTextInput, StyledLabel, StyledIcon, ErrorMsg } from "./Styles";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
	const [field, meta] = useField(props);
	const [show, setShow] = useState(false);

	return (
		<div style={{ position: "relative" }}>
			<StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
			{props.type !== "password" && (
				<StyledTextInput
					invalid={meta.touched && meta.error}
					{...field}
					{...props}
				/>
			)}
			{props.type === "password" && (
				<StyledTextInput
					invalid={meta.touched && meta.error}
					{...field}
					{...props}
					type={show ? "text" : "password"}
				/>
			)}
			<StyledIcon>{icon}</StyledIcon>

			{props.type === "password" && (
				<StyledIcon
					invalid={meta.touched && meta.error}
					onClick={() => setShow(!show)}
					right>
					{show && <FiEye />}
					{!show && <FiEyeOff />}
				</StyledIcon>
			)}

			{meta.touched && meta.error ? (
				<ErrorMsg>{meta.error}</ErrorMsg>
			) : (
				<ErrorMsg style={{ visibility: "hidden" }}> .</ErrorMsg>
			)}
		</div>
	);
};