import React,{useState} from 'react';
// import {db} from './firebase';
// import firebase from 'firebase';
import {useStateValue} from './StateProvider';
import './ChatInput.css';

function ChatInput({channelName,channelId}) {
  // const [{user}]=useStateValue();
  const sendMessage=(e)=>{
     e.preventDefault();

     if(channelId){
      //  db.collection('rooms').doc(channelId).collection({
      //    message:input,
      //    timestamp:firebase.firestore.FieldValue.serverTimestamp,
      //    user:user.displayName,
      //    userImage:user.photoURL
      //  });
       alert('added message '+input);
     }
     

  }
  const [input,setInput]=useState('');
  return (
    <div className="chatInput">
      <form>
        <input  value={input} onChange={(e)=>{
           setInput(e.target.value);
        }} type="text"  placeholder={`Message ${channelName}`} />
        <button type="submit" onClick={sendMessage}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
