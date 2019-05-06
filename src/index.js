import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Input from 'react-native-input'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  _cancel() {
    this.inputRef.clear()
    this.inputRef.blur()
    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

  render() {
    const {
      style,
      color,
      placeholderColor,
      backgroundColor,
      cancelTextColor,
      ...props
    } = this.props
    return (
      <View style={styles.container}>
        <Input
          color={color}
          placeholderColor={placeholderColor}
          backgroundColor={backgroundColor}
          _ref={ref => this.inputRef = ref}
          {...props}
          style={styles.input}
        />
        <MaterialIcons
          pointerEvents={'none'}
          style={styles.icon}
          name={'search'}
          size={20}
          color={placeholderColor}
        />
        {
          this.props.showCancelButton &&
          <TouchableOpacity style={styles.cancelContainer} onPress={() => this._cancel()}>
            <Text style={[styles.cancelLabel, { color: cancelTextColor }]}>Cancelar</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

SearchBox.propTypes = {
  onCancel: PropTypes.func,
  showCancelButton: PropTypes.bool.isRequired,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  cancelTextColor: PropTypes.string,
}

SearchBox.defaultProps = {
  returnKeyType: 'search',
  placeholder: 'Buscar...',
  clearButtonMode: 'always',
  showCancelButton: false,
  color: '#000',
  borderColor: '#d3d3d3',
  placeholderColor: '#d3d3d3',
  backgroundColor: '#fafafa',
  cancelTextColor: '#a1a1a1',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 27,
    paddingLeft: 22,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  cancelContainer: {
    height: 27,
    width: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cancelLabel: {
    //
  }
})
