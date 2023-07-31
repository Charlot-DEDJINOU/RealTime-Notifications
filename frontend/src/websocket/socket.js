const Socket = (handleAddNotification , handleAddAllNotification) => {

    const socketUrl = 'ws://localhost:3002';
  
    const socket = new WebSocket(socketUrl);
  
    socket.onopen = () => {
      console.log('WebSocket connection established.');
      
      fetch('http://localhost:3001/api/notifications/user/2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Notifications :', data);
            handleAddAllNotification(data);
        })
        .catch((error) => {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
        });
    };
  
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Message reçu du serveur:', data);
      
    };
  
    socket.onclose = () => {
      console.log('WebSocket connection closed.');
      // Ici, vous pouvez effectuer des actions supplémentaires lorsque la connexion WebSocket se ferme
      // Peut-être essayer de reconnecter automatiquement ou informer l'utilisateur de la déconnexion
    };
  
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
     
    };
  
    const sendWebSocketData = (data) => {
        socket.send(JSON.stringify(data));
      };
    
    const closeWebSocket = () => {
    socket.close();
    };
  
    return {
      sendWebSocketData,
      closeWebSocket,
    };
  };
  
  export default Socket;
  