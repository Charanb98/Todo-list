import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';
import Note from './Note';

export default class App extends React.Component {
  state = {
    noteArray: [ ],
    noteText: '',
  };
  
  addNote() {
    if (this.state.noteArray.length >= 0) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
    console.log(this.state.noteArray);
    
  }
  deleteNote(key) {
    return;
  }

  render() {
    
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          valDate={val.date}
          valNote={val.note}

          deleteMethod={() => this.deleteNote(key)
          }
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NOTER</Text>
        </View>
        
        <ScrollView style={styles.scrollview}>
        
        {notes}
        
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.addNote.bind(this)}
            style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder=">> note"
            placeholderTextColor="#CD5C5C"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:"#E91E63"
  },
  headerText: {
    backgroundColor: '#FFC0CB',
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollview: {
    flex: 1,
    backgroundColor:"#ADDD2F",
  },
  footer: {
    alignItems: 'center',
    left: 0,
    right: 0,
    backgroundColor:"#ADFF2F"
  },
  addButton: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    backgroundColor : "#F08080",
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#258',
    fontSize: 24,
    padding: 30,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopColor: '#ededed',
  },
});
