import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section className="flex justify-center items-center w-[800px] h-screen mt-6 rounded-lg flex-col">
      {/* Secção do Sobre nós */}
      <div className="flex flex-row items-center text-blue-600 text-xl font-bold font-['Sora'] leading-10 mb-4">
        <Image
          src="/assets/images/Vector.png"
          alt="image"
          width={24}
          height={24}
          className="mr-1"
        />
        Sobre nós
      </div>
      {/* Primeira parte das frases no sobre nós. */}
      <div className="flex justify-between">
        <div className="w-9/20">
          <h2 className="font-bold font-['Sora'] leading-6">
            Mais do que uma agência, somos parceiros na sua jornada digital.
          </h2>
          <div>
            Na LINGO, combinamos{" "}
            <span className="text-green-500">tecnologia</span> e{" "}
            <span className="text-green-500">criatividade</span> para
            impulsionar negócios. A nossa equipa multidisciplinar de{" "}
            <span className="text-green-500">designers</span>,{" "}
            <span className="text-green-500">desenvolvedores</span> e{" "}
            <span className="text-green-500">estrategistas</span> cria soluções
            inovadoras que não apenas impressionam visualmente, mas também geram
            resultados concretos e mensuráveis.
          </div>
        </div>
        <div className="w-9/20">
          <h2 className="font-bold font-['Sora'] leading-6">
            Por que escolher a LINGO?
          </h2>
          <div>
            Somos uma nova empresa, mas com uma visão clara: transformar ideias
            em experiências digitais impactantes. A nossa abordagem combina
            <span className="text-green-500">inovação</span>,{" "}
            <span className="text-green-500">criatividade</span> e{" "}
            <span className="text-green-500">tecnologia</span> para oferecer{" "}
            <span className="text-green-500">soluções sob medida</span> para
            cada cliente.
          </div>
        </div>
      </div>

      {/* Segunda parte do Sobre nós*/}
      <div className="flex justify-between items-center h-full w-full m-4">
        <div className="flex-1">
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <Check className="bg-green-500 rounded-full border-0 outline-0 text-gray-800 stroke-5 size-7 p-1" />
              <h2 className="font-bold mb-2">Compromisso com a Qualidade</h2>
            </div>
            <div>
              Criamos websites e aplicativos modernos que aliam design intuitivo
              e alta performance.
            </div>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <Check className="bg-green-500 rounded-full border-0 outline-0 text-gray-800 stroke-5 size-7 p-1" />
              <h2 className="font-bold">Foco no Cliente</h2>
            </div>
            <div>
              Cada projecto é adaptado às suas necessidades, garantindo soluções
              personalizadas e eficazes.
            </div>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <Check className="bg-green-500 rounded-full border-0 outline-0 text-gray-800 stroke-5 size-7 p-1" />
              <h2 className="font-bold">Processo Transparente</h2>
            </div>
            <div>
              Seguimos uma metodologia ágil, permitindo que acompanhe cada etapa
              do desenvolvimento em tempo real.
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex-1">
          <Image
            alt="TeamImg"
            src={"/assets/images/teamimg.png"}
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
