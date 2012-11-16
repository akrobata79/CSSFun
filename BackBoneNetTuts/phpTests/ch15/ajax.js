(function() {
	
	var table = $("#dataTable");
	var pageLinks = $(".pages a");
	var pageCount = $("#page");
	var form = $("form");
	
	pageLinks.click(function(e) {
		e.preventDefault();
		
		$.ajax({
			url : $(this).attr("href"),
			beforeSend : loadingFunc,
			error : errorFunc,
			success : successFunc
		});
	});
	
	form.submit(function(e) {
		e.preventDefault();
		
		$.ajax({
			url : form.attr("action"),
			type : form.attr("method"),
			data : form.serialize(),
			beforeSend : loadingFunc,
			error : errorFunc,
			success : successFunc
		});
	});
	
	function loadingFunc() {
		var message = $("<div/>", {
			className : "message"
		}).text("Loading \u2026");
		table.find("caption").append(message);
	}
	
	function errorFunc() {
		$(".message").text("Error loading data.");
	}
	
	function successFunc(response) {
		table.find(".message").remove();
		insertJson(response.people);
		updatePageLinks(+response.page);
	}
	
	function insertJson(data) {
		var template = "<tr><td>{name}</td><td>{location}</td><td>{browser}</td></tr>";
		var results = [];
		
		for (var i = 0, l = data.length; i < l; i++) {
			results.push(templatize(template, data[i]));
		}
		
		return table.find("tbody").empty().append(results.join("\n"));
	}
	
	function templatize(template, obj) {
		return template.replace(/\{([^\}]+)\}/g, function(match, subpattern) {
			return obj[subpattern] == null ? "" : obj[subpattern];
		});
	}
	
	function updatePageLinks(pageNum) {
		pageCount.text(pageNum + 1);
		pageLinks.eq(0).attr("href", function(index, value) {
			return value.replace(/\bpage=\-?\d+/, "page=" + (pageNum - 1));
		});
		pageLinks.eq(1).attr("href", function(index, value) {
			return value.replace(/\bpage=\-?\d+/, "page=" + (pageNum + 1));
		});
	}
	
})();