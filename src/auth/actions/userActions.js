import axios from "axios";

import { sessionService } from "redux-react-session";

export const loginUser = (
	credentials,
	history,
	setFieldError,
	setSubmitting,
) => {
	return async () => {
		try {
			//Make check and get some data
			const response = await axios.post(
				"https://safe-bastion-95651.herokuapp.com/user/signin",
				credentials,
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);

			console.log("data here =>0", response.data);
			const { data } = response;

			if (data.status === "FAILED") {
				const { message } = data;
				if (message.includes("credentials")) {
					setFieldError("email", message);
					setFieldError("password", message);
				} else if (message.includes("password")) {
					setFieldError("password", message);
				}
			} else if (data.status === "SUCCESS") {
				const userData = data.data;

				const token = userData._id;
				sessionService
					.saveSession(token)
					.then(() => {
						sessionService
							.saveUser(userData)
							.then(() => {
								history.push("/dashboard");
							})
							.catch((err) => console.error(err));
					})
					.catch((err) => console.error(err));
			}
			//complete submission
			setSubmitting(false);
		} catch (error) {
			console.log(error);
		}
	};
};

export const signupUser = (
	credentials,
	history,
	setFieldError,
	setSubmitting,
) => {
	return async (dispatch) => {
		const response = await axios.post(
			"https://safe-bastion-95651.herokuapp.com/user/signup",
			credentials,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		const { data } = response;
		console.log("here : .>", data.status);

		if (data.status == "FAILED") {
			const { message } = data;
			if (message.includes("Email")) {
				setFieldError("email", message);
			}
			//complete submission
			setSubmitting(false);
		} else if (data.status == "SUCCESS") {
			//login user after signup

			console.log("hy ai im amhre");
			const { email, password } = credentials;
			console.log("from signup=>", email, password);

			dispatch(
				loginUser(
					{ email, password },
					history,
					setFieldError,
					setSubmitting,
				),
			);
		}
	};
};

export const logoutUser = (history) => {
	return () => {
		sessionService.deleteSession();
		sessionService.deleteUser();
		history.push("/");
	};
};
