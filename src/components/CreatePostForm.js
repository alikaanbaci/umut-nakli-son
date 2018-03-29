import React, { Component } from 'react';
import { TextInput, Alert, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from '../ortak/index';
import { actPostChanged, actPostCreate } from '../actions';

class CreatePostForm extends Component {
    OnClickPost() {
        console.log('onClickPost calisti.');
        const { prPost } = this.props;
        console.log({prPost});
        this.props.actPostCreate({ prPost });
    }
    render() {
        
        const { inputStyle } = styles;
        //console.log('posta tıklandığında gelen post bilgisi' + this.props.clickedPost.prPost);
        console.log('CreatePostForm render oldu: ' + this.props.prPost);
        return (
            //<Text>CreatePostForm</Text>
            <View style={{ /*marginBottom: 50*/ }}>
                <CardSection>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Postunuzu buraya giriniz"
                        style={inputStyle}
                        value={this.props.prPost}
                        onChangeText={degisenPost => this.props.actPostChanged({ stPost: degisenPost })}
                    />
                </CardSection>
               
                <CardSection>
                    <Button onPress={this.OnClickPost.bind(this)}> POST EKLE </Button>
                </CardSection>
            </View>
        );
    }
}
const styles = {
    inputStyle: {
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      flex: 1
    },
};
  const mapStateToProps = ({ postListResponse }) => {
      const { post } = postListResponse;
      const prPost = post;
      console.log('CreatePostFrom mapStateToProps calıştı: ');
      console.log(prPost);
      return { prPost };
  };
export default connect(mapStateToProps, { actPostChanged, actPostCreate })(CreatePostForm);
