import React, { useEffect, useState } from 'react'
import Twitter from "../assets/Twitter.jpg"
import Facebook from "../assets/Facebook.jpg"
import { BsChevronCompactLeft, BsChevronCompactRight, BsNewspaper } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Slider() {

    let Intervalo: any

    const [AvanceAutomatico, SetAvanceAutomatico] = useState(true)

    const [Indice, SetIndice] = useState(0);

	const Imagenes = [Twitter.src,Facebook.src]

    function DetenerAvanceAutomatico () {

        if(AvanceAutomatico) {

            clearInterval(Intervalo)
    
            SetAvanceAutomatico(false)

        }

    }

	function ImagenAnterior () {

		const EsPrimeraImagen = Indice === 0;

		const NuevoIndice = EsPrimeraImagen ? Imagenes.length - 1 : Indice - 1;

		SetIndice(NuevoIndice);

	};
	
	function ImagenSiguiente ()  {

		const EsUltimaImagen = Indice === Imagenes.length - 1;

		const NuevoIndice = EsUltimaImagen ? 0 : Indice + 1;

		SetIndice(NuevoIndice);

	};
	
	function ImagenSeleccionada (Indice: number) {

		SetIndice(Indice);

	};

    useEffect(() => {

        if(AvanceAutomatico) {

            Intervalo = setInterval(() => {

                ImagenSiguiente()

            }, 7500)

        }

        return () => clearInterval(Intervalo)

    }, [Indice])

    return (

        <div className='w-full 

        sm:max-w-xl  sm:h-[300px]

        md:max-w-2xl  md:h-[400px]

        lg:max-w-4xl lg:h-[450px]

        xl:max-w-6xl  xl:h-[500px]

        2xl:max-w-[1400px] 2xl:h-[600px]
        
        relative group'
        
        onClick={DetenerAvanceAutomatico}>

            <div style={{ backgroundImage: `url(${Imagenes[Indice]})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

                <footer className='absolute bottom-0 w-full text-white p-10 text-5xl font-bold'>

                    <slot className='text-2xl flex gap-3 items-center'>

                        <BsNewspaper /> Relevancia

                    </slot>
                    
                    <h1>

                        Esta es mi primera noticia as hdasj hjkdsa hjkdashjkdsa  dsa dsa dsa dsadsad  ddaaaaaaaaaa sadasdas
                    
                    </h1>
                    
                </footer>

            </div>
            
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>

                <BsChevronCompactLeft onClick={ImagenAnterior} size={30} />

            </div>
            {/* Right Arrow */}

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>

                <BsChevronCompactRight onClick={ImagenSiguiente} size={30} />

            </div>

            <div className='flex justify-center py-2'>

                {Imagenes.map((Imagen, Indice) => (

                    <div key={Indice} onClick={() => ImagenSeleccionada(Indice)} className='text-2xl cursor-pointer text-white'>
                        
                        <RxDotFilled fill='white' />

                    </div>

                ))}

            </div>

        </div>

    )

}
