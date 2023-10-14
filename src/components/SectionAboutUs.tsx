import Image from "next/image";
import doctor from "./../assets/doctor.svg"
import Area from "./utils/Area";

export default function SectionAboutUs() {
    return (
        <section className="bg-beige py-12 md:px-8 md:py-24">
            <Area className="gap-10 md:flex-row-reverse">
                <div className="flex flex-col gap-2">
                    <h2 className="uppercase text-sm text-dark-green font-semibold">Sobre nós</h2>
                    
                    <h3 className="text-3xl font-bold md:text-5xl">Entenda quem somos e por que existimos</h3>
                    
                    <p className="text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>

                <Image className="self-center" src={doctor} height={282} width={327} alt="Doutor" />
            </Area>
        </section>
    )
}