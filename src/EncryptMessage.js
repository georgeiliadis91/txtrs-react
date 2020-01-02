import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import {getContract, contract, w3, users_address, getPrivateMessage} from "./Web3Helper"

import ReactDOM from 'react-dom';
const ecies = require('eth-ecies')

export default class EncryptMessage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      message: '',
      sentMessages : [],
      errormessage: ''
    };
  }
  async componentDidMount() {
    //this.setState({sentMessages: response})
  }
  onSendSecretMessage = async (event) => {
    event.preventDefault();
    var private_message = getPrivateMessage(this.props.message.address)
    var public_key = Buffer.from("04"+this.props.message.bob_x.slice(2)+this.props.message.bob_y.slice(2),'hex');
    var account = await  w3.eth.getAccounts()
    var encrypt = ecies.encrypt(public_key, this.state.message);
    var send = await private_message.methods.alice_send_encrypted_message(encrypt.toString()).send({gasPrice:0,from:account[0]});
    return false;
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "message") {
      if (val =="" ) {
        err = <strong>Your message can't be blank</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
            var message = this.props.message;
            return(
<Panel bsStyle="info" key={message.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
										{(() => {
											switch (message.stage) {
												case "1":   return "Key request sent.";
												case "2": return "Recipient has shared one time use encryption keys with you. Time to encrypt and send the message!";
												case "3":  return "Encrypted Message sent to "+message.bob;
												case "4":  return "Encrypted Message received by "+message.bob;
												default:      return "unknown stage ";
											}
										})()}
						</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                  <p>
									{message.bob}
                  </p>
                  <p>
									{message.bob_x}
                  </p>
                  <p>
									{message.bob_y}
                  </p>


        {this.renderForm(message)}

            </Panel.Body>
          </Panel>
          )
  }
  renderForm(message){
    if(message.stage=='2'){
      return (
        <form onSubmit={this.onSendSecretMessage}>
          <label htmlFor="message">Secret Message</label>
          <input
            type='text'
            name='message'
            placeholder="Secret Message"
            onChange={this.myChangeHandler}
          />
          <input
            type='submit'
          />
        </form>
      )
    }else{
      return (<span>Message Sent</span>)
    }
  }
}




