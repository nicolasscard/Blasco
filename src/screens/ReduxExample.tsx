import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { incremented, amountAdded } from '../reduxSlices/counter/counter-slice';
import { useFetchBreedsQuery } from '../reduxSlices/dogs/dogs-api-slice';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Breed } from '../interfaces/dogs';
import { FadeInImage } from '../components';

const ReduxExampleScreen = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching, isError, error } = useFetchBreedsQuery(numDogs); //when change numDog, is fetching again (only if numDogs is diffent of old numDog using old)

  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return <div>{error.message}</div>
    }
  }
  
  function handleClick() {
    console.log(count);
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }

  const renderItem = (item: Breed) => {
    return(
        <View style={ styles.card }>
          <FadeInImage
              source={{ uri: item.image.url }}
              style={styles.image}
          />
        </View>
    );
};

  return (
    <View style={{ flex: 1 }}>

        {/* Feature Counter */}
        <Text>COUNTER SCREEN</Text>
        <Button onPress={handleClick} title={`count is: ${count}`} />
        
        {/* Feature Dog */}
        <TextInput
            style={styles.input}
            placeholder="Elije un limite"
            autoCorrect={ false }
            autoCapitalize="words"
            onChangeText={ (value) => setNumDogs(Number(value)) }
            keyboardType='numeric'
            placeholderTextColor={ 'grey' }
            value={numDogs.toString()}
            selectionColor={'brown'}
        />
        <View>
          <Text>{`Number of dogs fetched: ${data.length}`}</Text>
          <FlatList
                data={data}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                refreshing={isFetching}
                horizontal
            />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: 'brown',
    width: 100,
    height: 140,
    marginRight: 20,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
},
input: {
  borderWidth: 1,
  borderColor: 'brown',
  height: 50,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginVertical: 10,
  fontSize: 20
}
});

export default ReduxExampleScreen;
