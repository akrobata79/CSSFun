<!DOCTYPE html>
<html>
	<head>
		<title>Ajax Test</title>
	</head>
	<body>
		<h1>Ajax Test</h1>
		
		<table id="dataTable">
			<caption>
				People 
				(Page <span id="page"><?php echo $page + 1 ?></span>)
			</caption>
			<thead>
				<tr>
					<th>Name</th>
					<th>Location</th>
					<th>Favorite Browser</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($people as $person) : ?>
				<tr>
					<td><?php echo $person->name ?></td>
					<td><?php echo $person->location ?></td>
					<td><?php echo $person->browser ?></td>
				</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
		
		<p class="pages">
			<a href="index.php?page=<?php echo $page - 1?>">Previous</a> |
			<a href="index.php?page=<?php echo $page + 1 ?>">Next</a>
		</p>
		
		<form action="index.php" method="post">
			<p><label for="name">Name</label><br />
			<input type="text" name="name" value="" id="name" /></p>
			
			<p><label for="location">Location</label><br />
			<input type="text" name="location" value="" id="location" /></p>
			
			<p><label for="browser">Favorite Browser</label><br />
			<input type="text" name="browser" value="" id="browser" /></p>

			<p><input type="submit" value="Submit"></p>
		</form>
		
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js" type="text/javascript"></script>
		<script src="ajax.js" type="text/javascript"></script>
	</body>
</html>