import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import ecies from 'eth-ecies'
import {getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber, private_message_bob_stage_2} from "./Web3Helper"
import AcceptMessageButton from './AcceptMessageButton'
import SecretMessage from './SecretMessage'





window.db = {}
window.rec_state = {}


const EC = require("elliptic").ec;

export default class ReceivedMessages extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      receivedMessages: [],
      errormessage: '',
      keys:{},
			message:undefined
    };

  }
  
  async fetch(){
    const response = await this.getPrivateMessages()
    this.setState({receivedMessages: response})
  }
  async componentDidMount() {
    await this.setUpListeners();
    await this.fetch();
    window.rec_state = this.state


  }





  async setUpListeners(){
    var block_number = await getBlockNumber()
    var that = this;
    contract.events.allEvents("allEvents",{
    
        fromBlock: 'latest'

    },async function(err,data){
      console.log("event", data);
      await that.fetch();
    });
  }

  async getPrivateMessages() {

      //set up listeners for new received messages





    var messages_count = await contract.methods.get_received_messages_total(users_address).call();
    var messages = []
    for(var index = messages_count-1; index >= 0 ;index-- ){
      var private_message_addr = await contract.methods.get_received_message(users_address,index).call()
			var private_message = getPrivateMessage(private_message_addr)




			var stage = await private_message.methods.stage().call()
      var plaintext=''
			var alice = await private_message.methods.alice().call()
			var bob = await private_message.methods.bob().call()
			var bob_public = await private_message.methods.bob_public().call()
      var encrypted_message = await private_message.methods.encrypted_message().call()

      if (stage == "1"){
        //private_message_bob_stage_2(private_message); // TODO remove
      }
      if(stage == "3"){
        //decrypt using bob eey
        const ec = new EC("secp256k1");
        var pub_key_readable = Buffer.from(bob_public,'hex').toString("hex");
        console.log('should be same kesy bob',bob_public, pub_key_readable)
        var ethPrivKey = window.localStorage[pub_key_readable];
        if(ethPrivKey){
          //try to encrypt and then decrypt (?)
          var pub = Buffer.from(pub_key_readable.slice(2),'hex');
          var encrypt = ecies.encrypt(pub, 'test');
          var pk = ec.keyFromPrivate(ethPrivKey)
          try{
          plaintext = ecies.decrypt(pk , Buffer.from(encrypted_message,'hex')).toString();// XXX REAL ONE
          }catch (e){
          console.log(e);
          }

          console.log('plaintext2',plaintext);
        }

      }

    var message = {plaintext:plaintext,stage:stage,alice:alice,bob:bob, id:index, address: private_message_addr, encrypted_message:encrypted_message, bob_public:bob_public }
      messages.push(message);

      //var sender = await contract.methods.get_public_message_sender(index).call()
    }
    return messages;
  };

  render() {
    return (
<div>
        { 

				this.state.receivedMessages.map(message => 
          <Panel bsStyle="info" key={message.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
										{(() => {
											switch (message.stage) {
												case "1":   return "Incoming Conversation request";
												case "2": return "Waiting on recieving encrypted message ";
												case "3":  return "Encrypted Message received" ;
												case "4":  return "Encrypted Message received and status = Read";
												default:      return "unknown stage ";
											}
										})()}
						</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <p>
        {(() => {
          switch (message.stage) {
            case "1": return "incoming message request from " + message.alice ;
            case "2": return "Waiting on an encrypted message from " + message.alice;
            case "3": return "Secure message from " + message.alice;
            default: return message.alice;
            }
            })()}
            </p>
            <AcceptMessageButton account={message.address} stage={message.stage} />
            <SecretMessage message={message} />
            </Panel.Body>
          </Panel>)
        }
</div>
    );
  }

}


