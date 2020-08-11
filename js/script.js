function updateOutput(){
				
					$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspannel").val() + "</style></head><body>" +$("#htmlpannel").val() + "</body></html>");
					
					document.getElementById("outputpannel").contentWindow.eval($("#javascriptpannel").val());
				}
		
				$(".toggleButton").hover(function() {
				
					$(this).addClass("highlightedButton");
				
				},function(){
						
					$(this).removeClass("highlightedButton");
				
				});
				
				$(".toggleButton").click(function(){
				
					$(this).toggleClass("active");
					
					$(this).removeClass("highlightedButton");
					
					var pannelId=$(this).attr("id") + "pannel";
				
					$("#" +pannelId).toggleClass("hidden");
					
					var numberOfActivePannels=4-$('.hidden').length;
					
					$(".pannel").width(($(window).width() / numberOfActivePannels)-10);
					
				});
				
				$(".pannel").height($(window).height()-$("#header").height()-15);
				
				$(".pannel").width(($(window).width()/2-5));
				
				updateOutput();
				
				$("textarea").on('change keyup paste', function() {
				
					updateOutput();
				
				});