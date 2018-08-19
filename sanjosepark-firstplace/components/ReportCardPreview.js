import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ReportCardPreview extends Component{
  constructor(props){
    super(props);
  }

  onReportClick(){
    this.props.navigation.navigate('fullReportScreen');
  }

  render(){
    const {image, comment, status, id} = this.props;
    return(
      <div id='report'+{id} className='report'>
        <TouchableOpacity style={width:'50%'} onClick={() => this.onReportClick()}>
          <img src={image} style={height:"35px",width:"35px"}/>
          <Text>{comment.subString(0, 101)}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={width: '25%'}>
          {/* To-Do: Implement modal implementation on the smalle status button */}
          <Text>{status}</Text>
        </TouchableOpacity>
      </div>
    )

  }

}

export default ReportCardPreview;
