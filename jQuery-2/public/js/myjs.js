function form(){
	$(".create").on("click",function(){
		//console.log("hi");
		$.ajax({
			type:"post",
		dataType: "json",
		url: "http://localhost:8010/posts",
		data:{"name":"vishal"},
		success: function(data)
		{ 
		
		}
		});
		
	
	})
	
	$(".submit").on("click",function(){
		
		$.ajax({
		dataType: "json",
		url: "http://localhost:8010/posts",
	  
		success: function(data)
		{ 
			//$('button').remove();
			//$("span").empty();
			var arr=data;
			//console.log(arr);
			for(var i=0;i<arr.length-1;i++)
			{
				
		$("<button></button>",{
			
			 height:"50px",
			 text:"Delete",
			 class:"col-lg-1 col-sm-1 col-md-1 col-xs-1"
		 }).insertAfter(".headingss");
		 
		 
		 $("<button></button>",{
			 height:"50px",
			 text:"Update",
			 class:"col-lg-1 col-sm-1 col-md-1 col-xs-1"
		 }).insertAfter(".headingss");
		 
		 
		 
		 
		 $("<span></span>",{
			 height:"50px",
			 text:arr[i].age,
			 class:"col-lg-2 col-sm-2 col-md-2 col-xs-2"
		 }).insertAfter(".headingss");
		 
		 
		
		 
		 $("<span></span>",{
			 height:"50px",
			 text:arr[i].phone,
			 class:"col-lg-2 col-sm-2 col-md-2 col-xs-2"
		 }).insertAfter(".headingss");
		 
		 
		 
		 
		 
		 $("<span></span>",{
			 height:"50px",
			 text:arr[i].gender,
			 class:"col-lg-2 col-sm-2 col-md-2 col-xs-2"
		 }).insertAfter(".headingss");
		 
		 
		 
		
		 
		 $("<span></span>",{
			 height:"50px",
			 text:arr[i].location,
			 class:"col-lg-2 col-sm-2 col-md-2 col-xs-2"
		 }).insertAfter(".headingss");
		 
		 
		 
		 
		 $("<span></span>",{
			 height:"50px",
			 text:arr[i].name,
			 class:"col-lg-2 col-sm-2 col-md-2 col-xs-2"
		 }).insertAfter(".headingss");
		 
		 
		 
		 
				
				
			}
			
			
		}});
		
	
	})
	
	
}