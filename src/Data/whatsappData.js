import {
chat1,
chat2,
chat3,
chat4,
chat5,
} from "../assets/whatsapp";

export const chatsData = [
{
    id: 1,
    pp: chat1,
    contact: "Albert",
    msg: "Hola?",
    time: "1:15 pm",
    unreadMsgs: null,
},
{
    id: 2,
    pp: chat2,
    contact: "Harry",
    msg: "Necesito hablar contigo",
    time: "12:15 pm",
    unreadMsgs: 2,
},
{
    id: 3,
    pp: chat3,
    contact: "Gordon",
    msg: "No escucho los audios",
    time: "11:11 am",
    unreadMsgs: 4,
},
{
    id: 4,
    pp: chat4,
    contact: "Audrey",
    msg: "Estaba pensando en ti",
    time: "11:04 am",
    unreadMsgs: null,
},
{
    id: 5,
    pp: chat5,
    contact: "Diane",
    msg: "No me interesa",
    time: "10:58 am",
    unreadMsgs: null,
},
]

export const messagesData = [
  {
    msg: "Coop estoy yendo a la comisaria del sheriff",
    time: "10:58 am",
    sent: false,
  },
  {
    msg: "Te espero allí",
    time: "10:58 am",
    sent: false,
  },
  {
    msg: "Por favor, manten discreción",
    time: "10:59 am",
    sent: false,
  },
  {
    msg: "Albert",
    time: "11:15 am",
    sent: true,
  },
  {
    msg: "Estoy en el café",
    time: "11:15 am",
    sent: true,
  },
  {
    msg: "Este pie de cerezas es delicioso",
    time: "11:28 am",
    sent: true,
  },
  {
    msg: "Iré enseguida",
    time: "11:36 am",
    sent: true,
  },
  {
    msg: "Hola?",
    time: "1:15 pm",
    sent: false,
  },
]