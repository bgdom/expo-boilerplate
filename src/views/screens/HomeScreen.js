import React from 'react'
import { connect } from 'react-redux'

import { View , Text } from 'react-native'

function mapStateToProps(state){
    return {}
}

class MainScreen extends React.Component {
    render(){
        return(
            <View>
                <Text>hello, ici c''est la page home</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps)(MainScreen)