import Image from "next/image";

export default function PortosPais({ bandeira, pais, portos }) {
    return (
        <div className={"mt-3"}>
            <div className={"flex items-center"}>
                <div className={"min-w-[181px] flex items-center flex-col"}>
                    <Image
                        priority={true}
                        src={bandeira}
                        alt={`bandeira do ${pais}`}
                        height={148}
                        width={160}
                        layout={"fixed"}
                    />
                    <h4 className={" text-lg text-center"}>{pais}</h4>
                </div>
                <p className={"-mt-8"}>{portos}</p>
            </div>
        </div>
    );
}
