import Bar from "./Bar";

export default function Cards() {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-9 px-20 py-10
         bg-beige rounded-md lg:mt-[-30px] lg:w-full">
            
            <div className="flex flex-col text-center items-center">
                <span className="text-[3rem] font-semibold">+3.500</span>
                <span className="text-sm text-dark-green">Pacientes atendidos</span>
            </div>

            <Bar />

            <div className="flex flex-col text-center items-center">
                <span className="text-[3rem] font-semibold">+15</span>
                <span className="text-sm text-dark-green">Especialistas disponíveis</span>
            </div>

            <Bar />

            <div className="flex flex-col text-center items-center">
                <span className="text-[3rem] font-semibold">+10</span>
                <span className="text-sm text-dark-green">Anos no mercado</span>
            </div>
        </div>
    )
}