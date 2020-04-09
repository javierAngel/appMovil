import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  RadioButton,
  TextInput,
  Text,
  Button,
  Checkbox,
} from "react-native-paper";
import Separator from "../components/Separator";

export default function Cuestionario() {
  const [checkState, setCheckState] = React.useState([]);

  React.useEffect(() => {
    let checkState = [
      { id: 1, text: "Hepática" },
      { id: 2, text: "Inmunológica" },
      { id: 3, text: "Neugológica" },
    ];
    setCheckState(
      checkState.map((d) => {
        return {
          select: false,
          id: d.id,
          text: d.text,
        };
      })
    );
  }, []);
  return (
    <ScrollView>
      <View style={{ alignItems: "stretch" }}>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Nombre(s):</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Escriba el Nombre"
            maxLength={35}
          />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Apellidos:</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Escriba el Apellido"
            maxLength={35}
          />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Edad:</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Escriba la Edad"
            maxLength={3}
            keyboardType="numeric"
          />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Fecha de Nacimiento:</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="DD-MM-AAAA"
            maxLength={10}
            keyboardType="numeric"
          />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Masculino</Text>
          <RadioButton value="Masculino" />
          <Text style={styles.texto}>Femenino</Text>
          <RadioButton value="Femenino" />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>TRIAGE</Text>
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Dificultad para respirar:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0" />
          <Text style={styles.texto}>Sí</Text>
          <RadioButton value="1" />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Dolor Toráctico</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0" />
          <Text style={styles.texto}>Sí</Text>
          <RadioButton value="1" />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Fiebre:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0" />
          <Text style={styles.texto}>Moderada</Text>
          <RadioButton value="1" />
          <Text style={styles.texto}>Alta</Text>
          <RadioButton value="2" />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Dolor de cabeza:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0" />
          <Text style={styles.texto}>Moderada</Text>
          <RadioButton value="1" />
          <Text style={styles.texto}>Alta</Text>
          <RadioButton value="2" />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Tos:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0" />
          <Text style={styles.texto}>Moderada</Text>
          <RadioButton value="1" />
          <Text style={styles.texto}>Alta</Text>
          <RadioButton value="2" />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Text style={styles.texto}>OTROS</Text>
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Checkbox />
          <Text style={styles.texto}>Dolor de Cabeza</Text>
          <Checkbox />
          <Text style={styles.texto}>Conjuntivitis</Text>
          <Checkbox />
          <Text style={styles.texto}>Congestión Nasal</Text>
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Checkbox />
          <Text style={styles.texto}>Dolor Muscular</Text>
          <Checkbox />
          <Text style={styles.texto}>Dolor de Articulaciones</Text>
        </View>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Checkbox />
        <Text style={styles.texto}>Fatiga y debilidad</Text>
        <Checkbox />
        <Text style={styles.texto}>Sudoración</Text>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Checkbox />
        <Text style={styles.texto}>Diarrea, náusea o vómito</Text>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Text style={styles.texto}>¿Hace cuándo se ha sentido enfermo(a)?</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Escriba los días"
          maxLength={2}
          keyboardType="numeric"
        />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Text style={styles.texto}>¿PADECE ALGUNA ENFERMEDAD?</Text>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Checkbox />
        <Text style={styles.texto}>Cáncer</Text>
        <Checkbox />
        <Text style={styles.texto}>Cardiovascular</Text>
        <Checkbox />
        <Text style={styles.texto}>Diabetes 1 y 2</Text>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Checkbox />
        <Text style={styles.texto}>Diabetes gestacional</Text>
        <Checkbox />
        <Text style={styles.texto}>Embarazo</Text>
        <Checkbox />
        <Text style={styles.texto}>Hematológica</Text>
      </View>
      <Separator />
      {checkState.map((d, i) => (
        <View style={styles.fixToText}>
          <Checkbox
            key={d.id}
            status={d.select ? "checked" : "unchecked"}
            onPress={() => {
              setCheckState(
                checkState.map((data) => {
                  if (d.id === data.id) {
                    data.select = !data.select;
                  }
                  return data;
                })
              );
            }}
          />
          <Text style={styles.texto}>{d.text}</Text>
        </View>
      ))}
      <Separator />
      <View style={styles.fixToText}>
        <Checkbox />
        <Text style={styles.texto}>Obesidad</Text>
        <Checkbox />
        <Text style={styles.texto}>Pulmonar</Text>
        <Checkbox />
        <Text style={styles.texto}>Renal</Text>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Checkbox />
        <Text style={styles.texto}>Tratamiento inmunosupresor</Text>
        <Checkbox />
        <Text style={styles.texto}>VIH</Text>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Text style={styles.texto}>Otra(s)</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Especifique"
          maxLength={35}
        />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Button color="red" icon="send" mode="contained">
          Enviar...
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: "#F17C63",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  texto: {
    marginVertical: 9,
  },
});
