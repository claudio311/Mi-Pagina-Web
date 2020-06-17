/*	(c) Ger Versluis 2000 version 5 October 9th 2001	*
*	You may remove all comments for faster loading	*/		

	var NoOffFirstLineMenus=6;			// Number of first level items
	var LowBgColor='#FFD200';			// Background color when mouse is not over
	var LowSubBgColor='white';			// Background color when mouse is not over on subs
	var HighBgColor='#C2FE42';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='black';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='#909090';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="cooper black"	// Font family menu items
	var FontSize=10;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='center';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle' or 'bottom'
	var ChildOverlap=.1;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.1;			// vertical overlap child/ parent
	var StartTop=329;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=1;			// First level items layout horizontal 1 or 0
	var MenuFramesVertical=0;			// Frames in cols or rows 1 or 0
	var DissapearDelay=500;			// delay before menu folds in
	var TakeOverBgColor=0;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='menu';			// Frame where first level appears
	var SecLineFrame='content';			// Frame where sub levels appear
	var DocTargetFrame='content';			// Frame where target documents appear
	var TargetLoc='';				// DIV id for relative positioning (refer to config.htm for info)
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}

// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("PRINCIPAL","INDEX.html","",0,25,120);
Menu2=new Array("HOBBIES","hobbies.html","",0,25,110);
Menu3=new Array("DEPORTES","deportes.html","",0,25,125);
Menu4=new Array("ESTUDIOS","ESTUDIOS.html","",0,25,120);
Menu5=new Array("PROYECTOS","proyectos.html","",0,25,125);
Menu6=new Array("INFO PERSONAL","INFO Personal.html","",0,25,174);

