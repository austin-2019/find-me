<!DOCTYPE html>

<html lang="en">
<head>
	<!-- Metadata -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">

	<!-- Title -->
	<title>Find Me</title>

	<!-- Thumbnails -->
	<link rel="shortcut icon" href="images/favicon.ico">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">

	<!-- Stylesheets -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../css/screenshot.css">
</head>
<body>

	<% include ../partials/_header.ejs %>

    <main role="main">
		<div class="jumbotron">
			<div class="container">
				<h1 class="display-3">Find Me</h1>
			
				<% hello %>	
			<p><a class="btn btn-primary btn-lg" href="https://www.pbs.org/newshour/nation/81-children-separated-from-families-at-u-s-mexico-border-since-june" role="button">Learn more »</a></p>
			</div>
		</div>

		<div class="container">
			<div class="row">
					<div class="col-md-12">
							<!-- <button class="btn btn-primary btn-lg" onclick="alert(EventSource)">Get Listings</button> -->
		
							<h1>Listings:</h1>
							<div id="displaylat"></div>
							<div id="displaylong"></div>
							<div id="displayhiddenfield"></div>
							<div id="displayname"></div>
							<div id="displayphone"></div>
						
					</div><!-- colmd12 -->		  
 
    </main>
    
	<% include ../partials/_footer.ejs %>

	<!-- Libraries -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
	<!-- Inline Script -->
	<script src="../js/userDataref.js"></script>
	<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
</body>
</html>

