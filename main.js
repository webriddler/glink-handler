function linkbar() {
		document.getElementById("errorMessage").innerHTML = "";
		var originalLink = document.getElementById("driveLink").value;
		if (originalLink){
			if (originalLink.includes("drive.google.com")){
				var link_parts = originalLink.split('/')
				if (link_parts.length >= 6){
					document.getElementById("webOpenLink").innerHTML = "https://drive.google.com/uc?id="+link_parts[5];
					document.getElementById("downlaodLink").innerHTML = "https://drive.google.com/uc?export=download&id="+link_parts[5];
					document.getElementById("linkWindow").style += "display : block;"
					document.getElementById("driveLink").value = "";
				}
				else{
					document.getElementById("errorMessage").innerHTML = "Provided Link is Invalid";
				}
			}
			else{
				document.getElementById("errorMessage").innerHTML = "Google Drive shared link not found";
			}
		}
		
	}

	function copyDownloadLink(pathId) {
		var link = document.getElementById(pathId).innerHTML;
		link = link.replace(/&amp;/g,'&');
		console.log(link);
		navigator.clipboard
	      .writeText(link)
	      .then(() => {
	        alert("Link successfully copied!");
	        })
	      .catch(() => {
	        alert("Something went wrong");
	       });
	  }