import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./buttonComponent";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center gap-10 items-center">
            <div className='h-[200px] w-[300px] relative'>
                <img src={"/developer.png"} alt="image of a developer saying hi" width={300} height={200} className='h-full w-full object-contain' />
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="md:text-4xl text-2xl font-aleo text-[#e26d5c]">My Portfolio</h1>
                <h2 className="font-aleo text-gray-500 font-semibold text-center md:text-xl text-lg">So Secret, Even I Don&apos;t Know What&apos;s Coming Next!</h2>
            </div>

            <div className='max-w-[1000px] text-center mx-auto'>
                <p className="font-nunito font-semibold md:text-base text-sm text-gray-500">My portfolio is currently compiling, optimizing, and probably having an intense philosophical debate about CSS frameworks. It&apos;s a bit of a work in progress, and it needs a moment to get its ducks in a row. If this digital chaos is just too much to bear, and you have an urgent inquiry before my website files a formal complaint, here&apos;s how to connect</p>
            </div>

            <div className="h-[50px] flex w-full gap-2 justify-center">
                <a href="https://www.linkedin.com/in/srijan-gyawali-66103b277/" target="_blank">
                    <Button Icon={<FaLinkedinIn />} text="/srijan-gyawali-66103b277" />
                </a>
                <a href="https://www.instagram.com/srijangyawali_00/" target="_blank">
                    <Button Icon={<FaInstagram />} text="srijangyawali_00" />
                </a>
                <a href="https://x.com/SrijanGyaw64298" target="_blank">
                    <Button Icon={<FaXTwitter />} text="@SrijanGyaw64298" />
                </a>
            </div>
        </div>
    );
}


