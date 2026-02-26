import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:5001/quizhub")
  .withAutomaticReconnect()
  .build();

export default connection;