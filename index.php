<html>
    <head>
    <link rel="stylesheet" href="index.css">
        <title>Black Jack</title>
        <script src = "index.js"></script>
    </head>
    <body>
        <h1>Black Jack</h1>
        <h2>How about a game?</h2>
        <p id = "cards"></p>
        <p id = "drawCard"></p>
        <p id = "total">Your total:</p>
        <p id = "message-el"></p>

        <p><button id = "start" onclick = "startGame();">Start Game</button>
        <button id = "draw" onclick = "draw();">Draw a new card </button></p>

        <h1 id = "prizePot">£</h1>
        <h1 id = "alert"></h1>

       <!-- TEST FOR QUERY SELECTOR 
        <p id = "test-el"></p>-->
    </body>
</html>