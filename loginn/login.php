<?php
// Function to read the Excel document and check if the credentials are valid
function validateCredentials($username, $password) {
    $file = "users.xlsx"; // Replace this with the path to your Excel document
    // Use a library like PhpSpreadsheet to read the Excel file (Install it using Composer: composer require phpoffice/phpspreadsheet)
    require 'vendor/autoload.php';
    
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($file);
    $worksheet = $spreadsheet->getActiveSheet();
    $highestRow = $worksheet->getHighestRow();
    
    for ($row = 2; $row <= $highestRow; ++$row) {
        $cellUsername = $worksheet->getCell('A' . $row)->getValue();
        $cellPassword = $worksheet->getCell('B' . $row)->getValue();
        
        // Validate the username and password
        if ($cellUsername === $username && $cellPassword === $password) {
            return true;
        }
    }
    
    return false;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Call the function to validate the credentials
    if (validateCredentials($username, $password)) {
        return true;
        // Add code here to redirect to the desired page after successful login
    } else {
        return false;
    }
}
?>
