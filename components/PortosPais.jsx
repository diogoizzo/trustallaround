import Image from "next/image";

export default function PortosPais({ bandeira, pais, portos }) {
    return (
        <div className={"mt-3"}>
            <div className={"flex flex-col md:flex-row items-center"}>
                <div className={"min-w-[181px] flex items-center flex-col"}>
                    <Image
                        priority={true}
                        src={bandeira}
                        alt={`bandeira do ${pais}`}
                        height={148}
                        width={160}
                        layout={"fixed"}
                    />
                    <h4
                        className={
                            "text-lg text-center font-semibold text-brand-blue"
                        }
                    >
                        {pais}
                    </h4>
                </div>
                <p className={"md:-mt-8 text-brand-blue"}>{portos}</p>
            </div>
        </div>
    );
}
