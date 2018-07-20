
	
	function nonRep () {
		var output = document.getElementById("output");
		var str = document.getElementById("str").value;


		var a=str.split('');
		var count = 0;
		var result = '';

		for(i=0;i<str.length;i++) {
			count = 0;
			for(j=0;j<str.length;j++){
				if (a[i] === a[j]) {
        			count += 1;
				
				}
			}
			if (count < 2) {
     			result = a[i];
      			break;
			}
		}
			output.innerHTML = result;
	}
	

	
