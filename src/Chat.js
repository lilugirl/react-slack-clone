import React,{useEffect,useState} from 'react';
import "./Chat.css";
import {useParams} from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';
// import db from './firebase';
function Chat() {
  const {roomId }=useParams();

  const [roomDetails,setRoomDetails]=useState(null);
  const [roomMesssages,setRoomMessages]=useState(null);

  useEffect(()=>{
    if(roomId){
      //  db.collection('rooms').document(roomId).
      //  onSnapshot(snapshot=>setRoomDetails(snapshot.data()))

      // db.collection('rooms').doc(roomId).collection('messages')
      // .orderBy('temstamp','asc')
      // .onSnapshot(snapshot=>setRoomMessages(snapshot.docs.map(doc=>doc.data())));

      //fakedata
      setRoomDetails({
        id:roomId,
        name:'mychannel'+new Date().getTime()
      })

      setRoomMessages([{
        message:'cool !!!'+Math.floor(Math.random()*100),
        timestamp:new Date(Math.floor(Math.random()*10000000000000)).toUTCString(),
        user:'liuyi'+Math.floor(Math.random()*100),
        userImage:'https://lh3.googleusercontent.com/ogw/ADGmqu_e9-P2E2ykEOJsOFt3EB4UWtErqCB-bA3XIdqX=s32-c-mo'
      },{
        message:'cool !!!'+Math.floor(Math.random()*100),
        timestamp:new Date(Math.floor(Math.random()*10000000000000)).toUTCString(),
        user:'liuyi'+Math.floor(Math.random()*100),
        userImage:'https://lh3.googleusercontent.com/ogw/ADGmqu_e9-P2E2ykEOJsOFt3EB4UWtErqCB-bA3XIdqX=s32-c-mo'
      },{
        message:'cool !!!'+Math.floor(Math.random()*100),
        timestamp:new Date(Math.floor(Math.random()*10000000000000)).toUTCString(),
        user:'liuyi'+Math.floor(Math.random()*100),
        userImage:'https://lh3.googleusercontent.com/ogw/ADGmqu_e9-P2E2ykEOJsOFt3EB4UWtErqCB-bA3XIdqX=s32-c-mo'
      },{
        message:'cool !!!'+Math.floor(Math.random()*100),
        timestamp:new Date(Math.floor(Math.random()*10000000000000)).toUTCString(),
        user:'liuyi'+Math.floor(Math.random()*100),
        userImage:'https://lh3.googleusercontent.com/ogw/ADGmqu_e9-P2E2ykEOJsOFt3EB4UWtErqCB-bA3XIdqX=s32-c-mo'
      }]);
    }
  },[roomId]);

  console.log(roomMesssages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
             <StarBorderIcon/>
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon/> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
      {roomMesssages?.map(({message,user,userImage,timestamp},index)=>(
         <Message  key={index} message={message} user={user} userImage={userImage} timestamp={timestamp} />
      ))}
      
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id}/>
      
    </div>
  )
}

export default Chat
