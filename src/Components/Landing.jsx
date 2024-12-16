import React from "react";
import {
	PrimaryButton,
	SecondaryButton,
	SecondarySubmitButton,
	SubmitButton,
} from "./Elements/Buttons";
import bgimage from "../Assest/Web_Images/Bg Plexus.png";
import portrait from "../Assest/Web_Images/Portrait.png";
import vector from "../Assest/Web_Images/Vector.png";
import bgcardimg from "../Assest/Web_Images/Img Bg.png";

const Landing = () => {
	return (
		<div className="relative min-h-screen flex flex-row  items-center justify-center gap-40 ">
			{/* <PrimaryButton TextContent={"Online Student Portal"} />
			<SubmitButton TextContent={"Submit"} />
			<SecondarySubmitButton TextContent={"Clear"} />
			<SecondaryButton TextContent={"View Time Table"} /> */}
			<img
				src={bgimage}
				alt="Background DNA sample"
				className="absolute left-0 bottom-0 -z-10"
			/>
			<div className="flex flex-col justify-start items-start gap-4">
				<div className="flex items-center justify-center -mb-4 text-primary1 border-2 bg-white border-primary1   rounded-[8px] h-[36px] w-[265px]  transition-all duration-200">
					Conducted in English | Sinhala
				</div>
				<h1 className="w-32 text-[64px] font-semibold">
					DR.CHARITHA MUNASINGHE
				</h1>

				<p className="w-[700px] flex-wrap text-[20px] font-thin mb-6">
					Graduated from the prestigious University of Peradeniya, he found his
					true calling in teaching, empowering countless students to gain
					admission to state universities, particularly into medical faculties.
					With a legacy spanning 10 triumphant years, he is ready to guide you
					towards your goals.
				</p>

				<div className="flex flex-row gap-5">
					<PrimaryButton TextContent={"Online Student Portal"} />
					<SecondaryButton TextContent={"View Time Table"} />
				</div>
			</div>
			<div className="relative flex flex-col gap-5 items-center justify-center">
				<img
					src={portrait}
					alt="Portrait Image"
					className="absolute mb-[60px] z-50 ml-[42px] w-[621px] h-auto"
				/>
				<img
					src={vector}
					alt="vector"
					className="absolute z-20 -ml-20 -top-32"
				/>
				<img
					src={bgcardimg}
					alt="background card image"
					className="z-30 h-[475px] -mb-18 w-[362px]"
				/>

				{/* Glass Effect Cards */}
				<div className="absolute z-50 flex flex-col -top-10 -left-18 justify-center text-primary1 items-center rounded-[8px] w-[140px] h-[90px] bg-[#FFFFFF99] backdrop-blur-[30px] shadow-[0px_4px_34.6px_0px_#0000001A]">
					<h1 className="text-[40px]">+10</h1>
					<h1 className="text-[18px] font-thin mb-2">Experience</h1>
				</div>
				<div className="absolute z-50 flex flex-row items-center justify-center bottom-5 -left-32 text-primary1  rounded-[8px] w-[312px] h-[91px] bg-[#FFFFFF99] backdrop-blur-[30px] shadow-[0px_4px_34.6px_0px_#0000001A]">
					<h1 className="text-[40px]">+4</h1>
					<div className="h-[70%] w-[1.5px] bg-primaryHover1 mx-4"></div>
					<div className="flex flex-col items-center justify-center text-center text-primary1 w-[193px]">
						<h1 className="text-[18px] font-semibold">INSTITUTES</h1>
						<p className="text-[16px] font-thin">
							With the flexible zoom classes
						</p>
					</div>
				</div>

				<div className="absolute z-50 flex flex-col justify-center items-center text-primary1 -right-20 top-36 rounded-[8px] w-[190px] h-[68px] bg-[#FFFFFF99] backdrop-blur-[30px] shadow-[0px_4px_34.6px_0px_#0000001A]">
					<p className="text-[16px] text-center font-thin ">
						Start your journey today!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
