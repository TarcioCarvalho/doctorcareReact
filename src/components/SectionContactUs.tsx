import Image from "next/image";
import Button from "./utils/Button";
import whatsapp from "./../assets/whatsapp.svg";
import location from "./../assets/location.svg";
import email from "./../assets/email.svg";
import Area from "./utils/Area";
import person from "./../assets/person.svg";

export default function SectionContactUs() {
    return (
        <section className="bg-white py-12 md:py-32 md:px-8 ">
            <Area className="gap-8 md:flex-row md:gap-28 justify-center">

                <div className="flex flex-col gap-8">
                    <h3 className="font-bold text-3xl md:text-5xl">Entre em contato com a gente!</h3>

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image src={location} height={24} width={24} alt="Localização" />
                            <span>R. Amauri Souza, 346</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={email} height={24} width={24} alt="e-mail" />
                            <span>contato@doctorcare.com</span>
                        </div>
                    </div>

                    <Button className="uppercase" text="Agende sua Consulta">
                        <Image src={whatsapp} height={24} width={24} alt="What's App" />
                    </Button>
                </div>

                <Image className="lg:w-[575px]" src={person} height={213} width={324} alt="person" />
            </Area>
        </section>
    )
}