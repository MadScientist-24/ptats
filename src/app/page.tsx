"use client"
import { useEffect, useState } from "react";

import Image from "next/image";
import NAV from "./components/nav";
import BNAV from "./components/bottomNav";
import RNAV from "./components/rightNav";
import LNAV from "./components/lefNav";
import MONITOR from "./components/monitor";


const host = window.location.href.replace("http://", "").replace(":3000/", "")

const messages = [
  {
      TITLE: "Operação Segura dos Geradores",
      CONTENT: "Sempre verifique o nível de combustível antes de iniciar os geradores. Utilize o modo automático para garantir que os geradores alternem corretamente com a rede elétrica em caso de falha. Mantenha o ambiente ao redor dos geradores livre de obstruções e materiais inflamáveis para evitar riscos de incêndio."
  },
  {
      TITLE: "Manutenção Preventiva",
      CONTENT: "Realize inspeções regulares nos geradores e nos componentes elétricos para identificar e corrigir problemas antes que causem falhas maiores. Troque o óleo e os filtros conforme as especificações do fabricante para manter os geradores funcionando de forma eficiente. Verifique e aperte todas as conexões elétricas periodicamente para evitar falhas de contato."
  },
  {
      TITLE: "Uso do Sistema de Monitoramento",
      CONTENT: "Utilize o sistema de monitoramento remoto para supervisionar o desempenho dos geradores em tempo real. Configure alertas para notificá-lo de qualquer anomalia, como níveis baixos de combustível ou falhas na alternância de energia. Acompanhe o histórico de desempenho para planejar manutenções preventivas e otimizar a operação dos geradores."
  },
  {
      TITLE: "Segurança e Proteção",
      CONTENT: "Sempre use equipamentos de proteção individual (EPI) ao operar ou realizar manutenção nos geradores. Certifique-se de que todos os dispositivos de proteção, como fusíveis e disjuntores, estão em bom estado e funcionando corretamente. Utilize a portinhola com suporte para cadeado para evitar acesso não autorizado aos componentes críticos do sistema."
  },
  {
      TITLE: "Resolução de Problemas Comuns",
      CONTENT: "Se os geradores não ligarem, verifique se há combustível suficiente e se os disjuntores estão acionados. Para problemas de conexão elétrica, inspecione as conexões e substitua qualquer cabo ou componente danificado. Consulte o manual do CLP para interpretar os códigos de erro e seguir as recomendações de solução de problemas."
  },
  {
      TITLE: "Benefícios do Sistema",
      CONTENT: "O sistema oferece vários benefícios, incluindo a garantia de fornecimento contínuo de energia, redução do tempo de inatividade, e otimização da eficiência operacional dos geradores. O monitoramento remoto permite a supervisão em tempo real e a rápida resposta a quaisquer problemas, enquanto a automação do controle reduz a necessidade de intervenção manual, aumentando a segurança e a confiabilidade."
  },
  {
      TITLE: "Modos de Operação",
      CONTENT: "O sistema possui modos de operação manual e automático, que podem ser selecionados através da chave selectora na portinhola. No modo automático, o sistema gerencia a alternância entre os geradores e a rede elétrica de forma autônoma, assegurando a continuidade do fornecimento de energia. No modo manual, o operador pode controlar diretamente a operação dos geradores, ideal para situações de manutenção ou testes específicos."
  },
  {
      TITLE: "Conhecimentos Básicos sobre o Projeto",
      CONTENT: "Este projeto visa a criação de um sistema didático para controle e monitoramento de dois geradores utilizando autômatos LOGO. A estrutura foi recondicionada a partir de uma existente na escola, adaptada com novos componentes para suportar os geradores e o circuito elétrico. A área de monitoramento inclui sinalizadores e botoeiras para seleção de modos de operação e monitoramento de eventos específicos, garantindo uma operação segura e eficiente dos geradores."
  },
  {
      TITLE: "Configuração do CLP",
      CONTENT: "O CLP (Controlador Lógico Programável) Siemens LOGO é a peça central do sistema de controle. Certifique-se de seguir as instruções de configuração fornecidas no manual do fabricante. Programe o CLP para gerenciar a alternância entre os geradores e a rede elétrica, monitorar os parâmetros operacionais e acionar alarmes em caso de falhas. Use a interface de programação Ladder para criar e ajustar a lógica de controle conforme necessário."
  },
  {
      TITLE: "Monitoramento e Ajustes Remotos",
      CONTENT: "A interface de monitoramento remoto permite supervisionar o sistema em tempo real através de um servidor web integrado ao CLP. Configure o sistema para enviar alertas automáticos por e-mail ou SMS em caso de falhas ou níveis críticos de operação. Utilize o histórico de dados para ajustar parâmetros de operação e melhorar a eficiência do sistema."
  }
];


export default function Home() {

  const [sdata, setSdata] = useState([{}])

  useEffect(() => {
    const intervalId = window.setInterval(() => {

      fetch("http://"+host+":5000/data")
      .then(res => res.json())
      .then(data => {
        setSdata(data)
        // console.log(data.LEITURAS_ARDUINO.CORRENTE)
      })
    }, 1000);
    return () => window.clearInterval(intervalId)
}, [sdata, setSdata])

  return (    
    <>
    {
    (typeof sdata["LEITURAS_ARDUINO"] === "undefined") ? (
      // the load screen goes here
      <>
      <div className="flex justify-around w-screen h-screen text-center animate-pulse animate-infinite animate-duration-1000 animate-ease-linear">
        <div className="self-center text-8xl">PTATS</div>
      </div>
      </>
    ): (
      <>
      <div className="flex flex-col h-screen font-bold text-white">
        <NAV data={sdata}/>
        <div className="flex flex-row bg-slate-200 h-full w-full justify-between ">
          
          {/* <div className="bg-green-100 w-[227px]">
            <LNAV data={sdata}/>
          </div> */}
          <div className="bg-red-400 w-full">
            <MONITOR data={sdata} messages={messages} host={host}/>
          </div>
          <div className="bg-blue-300 w-[87px]">
            <RNAV data={sdata}/>
          </div>
        </div>
        {/* <div className="bg-darkui h-24"> */}
          <BNAV data={sdata}/>
        {/* </div> */}
      </div>
    </>

    )
      }
    
    </>

   );
}
