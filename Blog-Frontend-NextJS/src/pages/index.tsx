import { RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import Image from 'next/image'
import Slider from "../components/slider";


export default function Home() {



	return (

		<main className={`min-h-screen bg-slate-900`}>

			<header className="w-full flex justify-center items-center">

				<div className="w-full bg-slate-700 flex justify-between items-center text-3xl text-center text-white px-4 py-2 my-10 rounded 
				
					sm:max-w-xl

					md:max-w-2xl

					lg:max-w-4xl 

					xl:max-w-6xl 

					2xl:max-w-[1400px]

				">
					
					<h2>
						
						<span className="text-[#fb4f69]">Mi</span>
						
						<span className="text-[#2ecbe0]">Pyme</span>
						
					</h2>

					<div className="flex items-center gap-6 text-4xl">

						<h3 className="text-xl">Acceder</h3>

						<h3 className="text-xl">Regístrate</h3>

						<RiTwitterFill fill="#2ecbe0" />

						<RiYoutubeFill fill="#fb4f69" />

					</div>
				
				</div>

			</header>

			<section className="w-full flex justify-center items-center">

				<Slider />

			</section>

			<section className="w-full flex justify-center items-center my-10">

				<div className="w-full

				sm:bg-red-500 sm:max-w-xl

				md:bg-blue-500 md:max-w-2xl

				lg:bg-green-500 lg:max-w-4xl 

				xl:bg-yellow-500 xl:max-w-6xl 

				2xl:bg-purple-500 2xl:max-w-[1400px]

				grid grid-rows-2 grid-cols-4 gap-5 

				">

					<h1 className="bg-white h-80 rounded">b</h1>

					<h1>c</h1>

					<h1>d</h1>
					
					<h1>a</h1>

					<h1>b</h1>

					<h1>c</h1>

					<h1>d</h1>

				</div>

			</section>

		</main>

	)

}
