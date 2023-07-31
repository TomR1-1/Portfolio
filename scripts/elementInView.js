function underlineNav(sectionInView) {
	var section = document.getElementById(sectionInView);
	var sections = ["homeSection", "aboutMeSection", "projectsSection", "contactSection"];
	
	for (i = 0; i < sections.length; i++) {
	
	// If the list section matches with the current section, give it the active class
	  if (sections[i] === sectionInView){
		  section.classList.add("current");
	  }
	  else {
		 // Tries to remove the nav_active class from the element, but it will cause an error if it doesn't have that class
        try {document.getElementById(sections[i]).classList.remove("current");}
		catch (e) {} 
	  }
	}
}

$(document).on('scroll', function() {
	var scrolltop = $(this).scrollTop();
    var scrollbottom = $(window).scrollTop() + $(window).height();

	// Bottom section to top section 
	if (scrollbottom >= $('#contact').position().top + 2 * $('#navbar').height() ) {
		underlineNav('contactSection');
	}  
	else if (scrolltop >= $('#projects').position().top - 2 * $('#navbar').height()) {
		underlineNav('projectsSection');
	}  
	else if (scrolltop >= $('#aboutMe').position().top - 2 * $('#navbar').height()) {
		underlineNav('aboutMeSection');
	}
	else if (scrolltop >= $('#homeSection').position().top - $('#navbar').height()) {
        underlineNav('homeSection');
	}
})