<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'phpqrcode/qrlib.php';
$email = $_REQUEST['email'];
$concert = $_REQUEST['concert'];
$filename = $email . $concert . '.png';
QRcode::png("Gratis toegang tot concert $concert bij het tonen van dit QR code", $filename);
$eticket="http://localhost:8888/Flashtix/$filename";

echo $eticket;

