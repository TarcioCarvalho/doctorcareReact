import Image from "next/image";
import menuButton from "./../assets/menuButton.svg"
import Logo from "./utils/Logo";

export default function Header() {
    return (
        <header className='text-dark-green flex items-center justify-between md:px-8 lg:px-0'>
            <Logo pointer textDark />

            <nav className="xl:w-[350px] lg:w-[350px] md:w-[350px]">
                <ul className="flex justify-between ">
                    <li><a className="hidden lg:block cursor-pointer">Inicío</a></li>
                    <li><a className="hidden lg:block cursor-pointer">Sobre</a></li>
                    <li><a className="hidden lg:block cursor-pointer">Serviços</a></li>
                    <li><a className="hidden lg:block cursor-pointer">Depoimentos</a></li>
                </ul>
            </nav>

            <div className="hidden lg:block text-center uppercase px-6 py-2 text-md
                            hover:bg-dark-green hover:text-text-light
                            border border-dark-green rounded-3xl cursor-pointer">
                Agendar Consulta
            </div>

            <Image src={menuButton} height={40} width={40} alt="Botão"
                className="lg:hidden"
            />


        </header>
    )
}