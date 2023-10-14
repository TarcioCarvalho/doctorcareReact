import Image from "next/image"
import check from "./../../assets/check.svg"

interface cardSectionProps {
    title: string
    text: string
}

export default function CardSection (props:cardSectionProps) {
    return (
        <div className="flex flex-col gap-4 border border-light-green bg-white p-4 rounded-md">
            <Image src={check} height={32} width={32} alt="Check"/>
            <h3 className="font-black text-2xl">{props.title}</h3>
            <p className="text-justify">{props.text}</p>
        </div>
    )
}