<?php

// post form handler
$errors = [];

$first_name = '';
$last_name = '';
$message = '';

// first name
if (isset($_POST['first_name']) && !empty($_POST['first_name'])) {
    $first_name = trim(strip_tags($_POST['first_name']));
} else {
    $errors['first_name'] = 'Name is required';
}

// last name
if (isset($_POST['last_name']) && !empty($_POST['last_name'])) {
    $last_name = trim(strip_tags($_POST['last_name']));
} else {
    $errors['last_name'] = 'Surname is required';
}

// message
if (isset($_POST['message']) && !empty($_POST['message'])) {
    $message = trim(strip_tags($_POST['message'], '<br>'));
} else {
    $errors['message'] = 'Message is required';
}

if (!$errors) {
    echo json_encode([
        'success' => 'Yehoooo! All fields are filled'
    ]);
} else {
    echo json_encode(compact('errors'));
}
