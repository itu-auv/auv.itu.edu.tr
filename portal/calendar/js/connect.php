<?php
function myQuery($qry) {
    $hostname = "mysql.itu.edu.tr";
    $username = "db73156";
    $password = "uT7rMLESeW";
    $dbname = "db73156";

    /* OLD CODE

    if (!isset($install) or $install != '1') {
        $connection = mysql_connect($hostname, $username, $password) or die ('Unable to connect to MySQL server.<br ><br >Please make sure your MySQL login details are correct.');
        $db = mysql_select_db($dbname, $connection) or die ('request "Unable to select database."');
    };
    */

    // Create connection
    $conn = new mysqli($hostname, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $result = mysqli_query($conn, $qry);

    if ($GLOBALS['DEBUG_MODE']) {
        echo $qry."<br>";
        echo mysqli_error($conn)."<hr>";
    }
        
    mysqli_close($conn);
    return $result;
}
?>