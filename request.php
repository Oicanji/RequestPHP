<?php
    if(isset($_GET)){
        $num = rand(0, 100);
        echo json_encode($num);
    }
    if(isset($_POST['num'])){
        $num = $_POST['num'];
        $myfile = fopen("list.txt", "a");
        $txt = $num . "\n";
        fwrite($myfile, $txt);
        fclose($myfile);

    }