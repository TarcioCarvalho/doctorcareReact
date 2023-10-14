import Image from "next/image";
import Area from "./utils/Area";
import Logo from "./utils/Logo";
import facebook from "./../assets/facebook.svg"
import youtube from "./../assets/youtube.svg"
import instagram from "./../assets/instagram.svg"


export default function Footer() {
    return (
        <footer className="bg-dark-green py-10">
            <Area className="flex-col gap-9">
                <Logo className="text-4xl" />

                <div className="flex flex-col gap-2">
                    <span className="text-text-light">©2021 Beautysalon.</span>
                    <span className="text-text-light">Todos os direitos reservados.</span>
                </div>


                <div className="flex gap-8">
                    <Image src={instagram} height={24} width={24} alt="instagram" />
                    <Image src={facebook} height={24} width={24} alt="facebook" />
                    <Image src={youtube} height={24} width={24} alt="youtube" />
                </div>
            </Area>


        </footer>
    )
}