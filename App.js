import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RadioButton,TextInput, Text, Button, Checkbox } from 'react-native-paper';


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Triage</Text>
      <Button color="red" icon="ballot-outline" mode="contained" onPress={() => navigation.navigate('Test Triage')}>
        Iniciar Cuestionario
      </Button>
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

function cuestionario(state){
  state = {
    checked: 'first',
  };
  return(
    <ScrollView>
      <View style={{alignItems: 'stretch'}}>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Nombre(s):</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Escriba el Nombre"
            maxLength={35}
          />
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Apellidos:</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Escriba el Apellido"
            maxLength={35}
          />
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Edad:</Text>
          <TextInput
              style={{height: 40}}
              placeholder="Escriba la Edad"
              maxLength={3}
              keyboardType="numeric"
            />
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Fecha de Nacimiento:</Text>
          <TextInput
              style={{height: 40}}
              placeholder="DD-MM-AAAA"
              maxLength={10}
              keyboardType="numeric"
            />
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Masculino</Text>
          <RadioButton value="Masculino"/>
          <Text style={styles.texto}>Femenino</Text>
          <RadioButton value="Femenino"/>
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>TRIAGE</Text>
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Dificultad para respirar:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0"/>
          <Text style={styles.texto}>Sí</Text>
          <RadioButton value="1"/>
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Dolor Toráctico</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0"/>
          <Text style={styles.texto}>Sí</Text>
          <RadioButton value="1"/>
        </View> 
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Fiebre:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0"/>
          <Text style={styles.texto}>Moderada</Text>
          <RadioButton value="1"/>
          <Text style={styles.texto}>Alta</Text>
          <RadioButton value="2"/>
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Dolor de cabeza:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0"/>
          <Text style={styles.texto}>Moderada</Text>
          <RadioButton value="1"/>
          <Text style={styles.texto}>Alta</Text>
          <RadioButton value="2"/>
        </View> 
        <Separator/> 
        <View style={styles.fixToText}>
          <Text style={styles.texto}>Tos:</Text>
          <Text style={styles.texto}>No</Text>
          <RadioButton value="0"/>
          <Text style={styles.texto}>Moderada</Text>
          <RadioButton value="1"/>
          <Text style={styles.texto}>Alta</Text>
          <RadioButton value="2"/>
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Text style={styles.texto}>OTROS</Text>
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Checkbox/>
          <Text style={styles.texto}>Dolor de Cabeza</Text>
          <Checkbox/>
          <Text style={styles.texto}>Conjuntivitis</Text>
          <Checkbox/>
          <Text style={styles.texto}>Congestión Nasal</Text>
        </View>
        <Separator/>
        <View style={styles.fixToText}>
          <Checkbox/>
          <Text style={styles.texto}>Dolor Muscular</Text>
          <Checkbox/>
          <Text style={styles.texto}>Dolor de Articulaciones</Text>
        </View>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Checkbox/>
        <Text style={styles.texto}>Fatiga y debilidad</Text>
        <Checkbox/>
        <Text style={styles.texto}>Sudoración</Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Checkbox/>
        <Text style={styles.texto}>Diarrea, náusea o vómito</Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Text style={styles.texto}>¿Hace cuándo se ha sentido enfermo(a)?</Text>
        <TextInput
              style={{height: 40}}
              placeholder="Escriba los días"
              maxLength={2}
              keyboardType="numeric"
            />
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Text style={styles.texto}>¿PADECE ALGUNA ENFERMEDAD?</Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Checkbox/>
        <Text style={styles.texto}>Cáncer</Text>
        <Checkbox/>
        <Text style={styles.texto}>Cardiovascular</Text>
        <Checkbox/>
        <Text style={styles.texto}>Diabetes 1 y 2</Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Checkbox/>
        <Text style={styles.texto}>Diabetes gestacional</Text>
        <Checkbox/>
        <Text style={styles.texto}>Embarazo</Text>
        <Checkbox/>
        <Text style={styles.texto}>Hematológica</Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Checkbox status={checked ? 'checked' : 'unchecked'}/>
        <Text style={styles.texto}>Hepática</Text>
        <Checkbox/>
        <Text style={styles.texto}>Inmunológica</Text>
        <Checkbox/>
        <Text style={styles.texto}>Neugológica</Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Checkbox/>
        <Text style={styles.texto}>Obesidad</Text>
        <Checkbox/>
        <Text style={styles.texto}>Pulmonar</Text>
        <Checkbox/>
        <Text style={styles.texto}>Renal</Text> 
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Checkbox/>
        <Text style={styles.texto}>Tratamiento inmunosupresor</Text>
        <Checkbox/>
        <Text style={styles.texto}>VIH</Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Text style={styles.texto}>Otra(s)</Text>
        <TextInput
              style={{height: 40}}
              placeholder="Especifique"
              maxLength={35}
            />
      </View><Separator/>
      <View style={styles.fixToText}>
        <Button color="red" icon="send" mode="contained">
          Enviar...
        </Button>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MS-CoV19" component={HomeScreen} />
        <Stack.Screen name="Test Triage" component={cuestionario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: '#F17C63',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  texto:{
    marginVertical: 9
  },
});

export default App;