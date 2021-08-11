<?php


    $serverName = "localhost";
    $userName = "root";
    $password = "root";
    $databaseName = "produce";

    //create connection 
    $connection = new mysqli($serverName, $userName, $password, $databaseName);

    //what do you want to grab?
    $sql = mysqli_query($connection,"SELECT * FROM items_stock");

    //store that in a variable
    $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);



    exit(json_encode($result)) ;
