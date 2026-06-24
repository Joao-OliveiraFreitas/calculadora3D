import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { use3DCalculation } from "../hooks/use3DCalculation";

export default function HomeScreen() {
  const {
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
  } = use3DCalculation();

  return (
    <ScrollView
      style={styles.Background}
      contentContainerStyle={styles.HomeContainer}
    >
      <View style={styles.HeaderContainer}>
        <Image
          source={require("@/assets/images/android-icon-foreground.png")}
          style={styles.ImageLogo}
          resizeMode="contain"
        />
      </View>

      <Card>
        <View style={styles.InputGroup}>
          <Text style={styles.Label}>Peso Gasto em Filamento</Text>
          <Input
            placeholder="Ex: 150g"
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />
        </View>

        <View style={styles.InputGroup}>
          <Text style={styles.Label}>Tempo de Impressão</Text>
          <View style={styles.PrintTimeContainer}>
            <View style={styles.InputWrapper}>
              <Input
                placeholder="Horas"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={horas}
                onChangeText={setHoras}
              />
            </View>
            <View style={styles.InputWrapper}>
              <Input
                placeholder="Minutos"
                placeholderTextColor="#666"
                keyboardType="numeric"
                maxLength={2}
                value={minutos}
                onChangeText={setMinutos}
              />
            </View>
          </View>
        </View>

        <View style={styles.InputGroup}>
          <Text style={styles.Label}>Outros Gastos</Text>
          <Input
            placeholder="R$ 0,00"
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={outrosGastos}
            onChangeText={setOutrosGastos}
          />
        </View>

        <View style={styles.InputGroup}>
          <Text style={styles.Label}>Margem de Lucro</Text>
          <Input
            placeholder="Ex: 100%"
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={margemLucro}
            onChangeText={setMargemLucro}
          />
        </View>

        <View style={styles.ButtonContainer}>
          <Button label="Calcular Custo" onPress={calcular} />
        </View>
      </Card>

      {resultado && (
        <Card style={styles.ResultCardBorder}>
          <Text style={styles.ResultTitle}>Resumo de Custos</Text>
          <View style={styles.ResultRow}>
            <Text style={styles.ResultText}>Filamento:</Text>
            <Text style={styles.ResultValue}>
              R$ {resultado.custoFilamento.toFixed(2)}
            </Text>
          </View>
          <View style={styles.ResultRow}>
            <Text style={styles.ResultText}>Energia Elétrica:</Text>
            <Text style={styles.ResultValue}>
              R$ {resultado.custoEnergia.toFixed(2)}
            </Text>
          </View>
          <View style={styles.ResultRow}>
            <Text style={styles.ResultText}>Custos Extras:</Text>
            <Text style={styles.ResultValue}>
              R$ {resultado.outros.toFixed(2)}
            </Text>
          </View>
          <View style={styles.Divider} />
          <View style={styles.ResultRow}>
            <Text style={styles.ResultSubtotalLabel}>Valor Gasto:</Text>
            <Text style={styles.ResultSubtotalValue}>
              R$ {resultado.subtotal.toFixed(2)}
            </Text>
          </View>
          <View style={styles.ResultRow}>
            <Text style={styles.ResultTotalLabel}>Preço Sugerido (Venda):</Text>
            <Text style={styles.ResultTotalValue}>
              R$ {resultado.totalComLucro.toFixed(2)}
            </Text>
          </View>
          <View style={styles.ButtonContainerDelete}>
            <Button label="Apagar" onPress={limpar} />
          </View>
        </Card>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: "#2A2525",
  },
  HomeContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 60,
  },
  HeaderContainer: {
    marginBottom: 25,
    alignItems: "flex-start",
  },
  ImageLogo: {
    width: "100%",
    height: 160,
    marginBottom: 5,
  },
  InputGroup: {
    marginBottom: 16,
  },
  Label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E0E0E0",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  PrintTimeContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  InputWrapper: {
    flex: 1,
  },
  ButtonContainer: {
    backgroundColor: "#FF6B00",
    borderRadius: 8,
    marginTop: 10,
  },
  ButtonContainerDelete: {
    backgroundColor: "#C0002A",
    borderRadius: 8,
  },
  ResultCardBorder: {
    borderWidth: 1,
    borderColor: "#FF6B00",
  },
  ResultContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#1E1A1A",
    borderRadius: 16,
    borderWidth: 1,
  },
  ResultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6B00",
    marginBottom: 14,
  },
  ResultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  ResultText: {
    color: "#B0B0B0",
    fontSize: 15,
  },
  ResultValue: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
  },
  Divider: {
    height: 1,
    backgroundColor: "#3D3535",
    marginVertical: 12,
  },
  ResultSubtotalLabel: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  ResultSubtotalValue: {
    color: "#FFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  ResultTotalLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  ResultTotalValue: {
    color: "#FF6B00",
    fontSize: 20,
    fontWeight: "bold",
  },
});
