import Area from "./utils/Area";
import CardSection from "./utils/CardSection";

export default function SectionServices() {
    return (
        <section className="bg-text-light mt-[-200px] md:pt-60 lg:pt-60 pt-60 md:px-8">
            <Area>
                <h2 className="text-md font-semibold text-dark-green text-center uppercase">Serviços</h2>
                <h3 className="text-3xl mt-4 px-2 font-bold text-center">
                    Como podemos ajudá-lo a se sentir melhor?
                </h3>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3  mt-8 gap-4">
                    <CardSection
                        title="Problemas digestivos"
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                    />

                    <CardSection
                        title="Saúde Hormonal"
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                    />

                    <CardSection
                        title="Bem-estar mental"
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                    />

                    <CardSection
                        title="Cuidados Pediátricos"
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                    />

                    <CardSection
                        title="Autoimune e Inflamação"
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                    />

                    <CardSection
                        title="Saúde do Coração"
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                    />
                </div>

            </Area>
        </section>
    )
}