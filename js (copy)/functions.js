// JavaScript Document

var fast = 400;
var verFast = 200;
var SuperFast = 100;
	
	/* COMMON */

	// TOGGLE VIEW
	
	function toggleView(){
	
		var ThisIsToggled = $('#main').hasClass('vertical');

		if (ThisIsToggled == false){
			$('#main').addClass('vertical');
			verticalScreensSliderRender();
		} else if (ThisIsToggled == true){
			$('#main').removeClass('vertical');	
			screensSliderRender();
		}
		
	}
	
	// expand collapse user interface menus
	
	function expandCollapseUiMenu(This){
	
		var thisIsClosed = This.hasClass('closed');
		var thisArrow = This.find('.title').find('span.arrow');
		var thisList = This.find('.list');
		var thisListFullHeight = thisList.attr('rel');
		
		if (thisIsClosed == false){
			var ThisListFullHeight = thisList.height();
			thisList.attr('rel',ThisListFullHeight)
			This.addClass('closed');
			thisArrow.removeClass('down');
			thisList.stop().animate({opacity:'0',height:'0px'},fast);			
		}
		
		else {
			This.removeClass('closed');
			thisArrow.addClass('down');
			thisList.stop().animate({opacity:'1',height:thisListFullHeight},fast);
		}
		
	}
	
	/* TOOLS */

	function toolsMenuRender(){
		
		$('.tools').each(function(){
			
			var toolMenu =  $(this);
			var toolItemHeight = toolMenu.find('.tool').height();
			var toolItemNumber = toolMenu.find('.tool').size();
			var toolOverviewHeight = toolItemHeight * toolItemNumber;
			
			toolMenu.find('.overview').height(toolOverviewHeight);
			
			toolMenu.find('.scroller').jScrollPane();
			
			var pane = toolMenu.find('.scroll-pane');
			var api = pane.data('jsp');
	
			// arrows click function
	
			toolMenu.find('a.arrow').on('click',function(){
				
				var ThisIsUp = $(this).hasClass('up');
				var ThisIsDown = $(this).hasClass('down');
				
				if (ThisIsUp == true){
					api.scrollBy('0px','-' + toolItemHeight,'swing',fast);	
				}
				
				else if (ThisIsDown == true){
					api.scrollBy('0px',toolItemHeight,'swing',fast);
				}
				
			});
		
		});
				
	}

	/* SCREENS */
	
	function screensSliderRender(){
		
		var screensSlider = $('.screens');
		var screensWidth = $('.screens').find('.screen').width();
		var screensWidth = screensWidth + 26 + 25 + 2 // adding right / left padding pixel width
		var screensNumber = screensSlider.find('.screen').size();
		
		var screensOverviewWidth = screensWidth * screensNumber;	
		
		screensSlider.find('.overview').removeAttr('style').width(screensOverviewWidth);
				
		screensSlider.find('.scroller').jScrollPane();
		
		var pane = screensSlider.find('.scroll-pane');
		var api = pane.data('jsp');
		
		api.destroy();
		screensSlider.find('.scroller').jScrollPane();
		
		var pane = screensSlider.find('.scroll-pane');
		var api = pane.data('jsp');			
							
		screensSlider.find('a.arrow').on('click',function(){
			
			var ThisIsRight = $(this).hasClass('right');
			var ThisIsLeft = $(this).hasClass('left');
			
			if (ThisIsRight == true){
				api.scrollBy(screensWidth,'0px','swing',fast);	
			}
			
			else if (ThisIsLeft == true){
				api.scrollBy('-' + screensWidth,'0px','swing',fast);
			}
			
		});
		
	}
	
	// vertical 
	
	function verticalScreensSliderRender(){
	
			var screensSlider = $('.screens');
			var screensHeight = $('.screens').find('.screen').height();
			var screensHeight = screensHeight + 15 // adding right / left padding pixel width
			var screensNumber = screensSlider.find('.screen').size();
			
			var screensOverviewWidth = screensHeight * screensNumber;	
			
			screensSlider.find('.overview').removeAttr('style').height(screensOverviewWidth);
					

			var pane = screensSlider.find('.scroll-pane');
			var api = pane.data('jsp');
			
			api.destroy();
			screensSlider.find('.scroller').jScrollPane();

			var pane = screensSlider.find('.scroll-pane');
			var api = pane.data('jsp');
						
			// arrows click function
	
			screensSlider.find('a.arrow').on('click',function(){
				
				var ThisIsUp = $(this).hasClass('left');
				var ThisIsDown = $(this).hasClass('right');
				
				if (ThisIsUp == true){
					api.scrollBy('0px','-' + screensHeight,'swing',fast);	
				}
				
				else if (ThisIsDown == true){
					api.scrollBy('0px',screensHeight,'swing',fast);
				}
				
			});
		
	}