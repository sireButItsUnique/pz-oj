import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default () => {
	const [type, setType] = useState(true); // true = login & false = register
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<>
			<Head>
				<title>PZOJ</title>
				<link rel="icon" href="/images/favicon.png" />
			</Head>

			<Navbar
				links={[
					{ text: "Home", url: "/" },
					{ text: "Problems", url: "/problems" },
					{ text: "Learn", url: "/learn" },
					{ text: "Recommended", url: "/recommended" },
				]}
			/>

			<main className="bg-dark-0 w-full pt-[4.18rem] flex flex-col justify-center items-center">
				<div className="px-6 py-8 bg-dark-1 border border-border rounded mt-[10rem] mb-[6rem]">
					<div className="text-center">
						<Image
							src="/images/pzoj.png"
							width={50}
							height={50}
							className="m-auto mb-[0.3rem]"
						/>
						<h1 className="mb-[2rem] text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-sky-500 font-bold text-3xl">
							PZOJ
						</h1>
					</div>

					<div>
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="text-grey-1 bg-dark-2 px-4 py-2 border border-border flex flex-row justify-center items-center rounded-lg">
								<FontAwesomeIcon
									icon={faUser}
									className="text-xl inline-block w-[1.2rem] mr-4"
								/>

								<input
									type="text"
									className="w-full outline-none bg-dark-2"
									placeholder="Username"
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
								/>
							</div>

							<div className="my-[1rem] text-grey-1 bg-dark-2 px-4 py-2 border border-border flex flex-row justify-center items-center rounded-lg">
								<FontAwesomeIcon
									icon={faUnlockKeyhole}
									className="text-xl inline-block w-[1.2rem] mr-4"
								/>

								<input
									type="password"
									className="w-full outline-none bg-dark-2"
									placeholder="Password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
							</div>

							{!type && (
								<div className="my-[1rem] text-grey-1 bg-dark-2 px-4 py-2 border border-border flex flex-row justify-center items-center rounded-lg">
									<FontAwesomeIcon
										icon={faUnlockKeyhole}
										className="text-xl inline-block w-[1.2rem] mr-4"
									/>

									<input
										type="password"
										className="w-full outline-none bg-dark-2"
										placeholder="Confirm Password"
										value={confirmPassword}
										onChange={(e) => {
											setConfirmPassword(e.target.value);
										}}
									/>
								</div>
							)}

							<div className="m-auto text-center w-full">
								<PrimaryButton
									link="/"
									text={type ? "Login" : "Register"}
									target="_self"
									bgColor="dark-1"
									fullWidth={true}
									submit={true}
									onClick=""
								/>
							</div>

							<div className="flex fler-row justify-center items-center mt-[2rem] mb-[1.5rem]">
								<hr className="w-full border-b border-border" />
								<span className="text-grey-1 mx-4">OR</span>
								<hr className="w-full border-b border-border" />
							</div>

							<div className="text-grey-1 w-full text-center">
								{type ? "Need an account?" : "Have an account?"}
								<Link
									href="/account"
									className="ml-1 text-blue-1 transition duration-200 hover:text-blue-0"
									onClick={(e) => {
										e.preventDefault();
										setType((prev) => !prev);
									}}>
									{type ? "Register" : "Login"}
								</Link>
							</div>
						</form>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};
