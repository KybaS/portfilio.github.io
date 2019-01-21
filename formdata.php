<?php
$result = mail("sergeykiba2012@gmail.com","Message for my site","Messege: \nFirst Name: $_POST[name] \nLast Name: $_POST[last] \nEmail: $_POST[mail] \nText: $_POST[text] ");

if ($result) {
echo "<p>Successful!</p>";
}
else {
echo "<p>Message not sent!</p>";
}
?>