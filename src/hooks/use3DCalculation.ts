import { useState } from "react";
import { Alert } from "react-native";

const PRECO_FILAMENTO_KG = 100.0;
const TARIFA_KWH = 0.8;
const POTENCIA_IMPRESSORA_W = 200;

export interface CalculationResult {
  custoFilamento: number;
  custoEnergia: number;
  outros: number;
  subtotal: number;
  totalComLucro: number;
}

export function use3DCalculation() {
  const [peso, setPeso] = useState("");
  const [horas, setHoras] = useState("");
  const [minutos, setMinutos] = useState("");
  const [outrosGastos, setOutrosGastos] = useState("");
  const [margemLucro, setMargemLucro] = useState("");

  const [resultado, setResultado] = useState<CalculationResult | null>(null);

  const calcular = () => {
    const pesoG = parseFloat(peso) || 0;
    const tempoH = parseFloat(horas) || 0;
    const tempoM = parseFloat(minutos) || 0;
    const extra = parseFloat(outrosGastos) || 0;
    const margem = parseFloat(margemLucro) || 0;

    if (pesoG === 0 && tempoH == 0 && tempoM == 0) {
      Alert.alert("Aviso", "Por favor insira o peso ou o tempo de impressão.");
      return;
    }

    const tempoTotalHoras = tempoH + tempoM / 60;
    const custoFilamento = (pesoG / 1000) * PRECO_FILAMENTO_KG;
    const custoEnergia =
      (POTENCIA_IMPRESSORA_W / 1000) * tempoTotalHoras * TARIFA_KWH;
    const subtotal = custoFilamento + custoEnergia + extra;
    const totalComLucro = subtotal + subtotal * (margem / 100);

    setResultado({
      custoFilamento,
      custoEnergia,
      outros: extra,
      subtotal,
      totalComLucro,
    });
  };

  const limpar = () => {
    setPeso("");
    setHoras("");
    setMinutos("");
    setOutrosGastos("");
    setMargemLucro("");
    setResultado(null);
  };

  return {
    peso,
    setPeso,
    horas,
    setHoras,
    minutos,
    setMinutos,
    outrosGastos,
    setOutrosGastos,
    margemLucro,
    setMargemLucro,
    resultado,
    calcular,
    limpar,
  };
}
