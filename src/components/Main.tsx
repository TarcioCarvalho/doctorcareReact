import Button from "./utils/Button";
import Image from "next/image";
import woman from "./../assets/image.svg";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Cards from "./utils/Cards";

export default function Main() {
    return (
        <main className="flex flex-col items-center">
            <div className="lg:flex lg:px-8 md:px-8">
                <div className="flex flex-col gap-4">
                    
                    <h1 className="text-dark-green text-center text-sm md:text-md
                    uppercase lg:mt-24 font-black lg:self-start">
                        BOAS-VINDAS A DOCTORCARE 👋
                    </h1>
                    <h2 className="font-bold text-3xl md:text-5xl lg:text-left text-center
                        mt-4 lg:self-start">
                        Assistência médica simplificada para todos
                    </h2>

                    <p className="text-gray-p text-lg text-center mt-6 lg:self-start lg:text-left">
                        Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.
                    </p>
                    <Button className="bg-dark-green mt-6 text-sm self-center lg:self-start"
                        textClassName="font-semibold" text="Agende sua Consulta">
                        <IconBrandWhatsapp size={18} color="white" />
                    </Button>
                </div>
                <Image className="mt-8 h-72 md:h-96 lg:h-[547px] mx-auto lg:mx-0" src={woman} height={547} width={420} alt="mulher" />
            </div>

            <Cards />

        </main>
    )
}