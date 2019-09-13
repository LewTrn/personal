import './../scss/main.scss'

// fullPage.js 
new fullpage('#fullpage', {
	anchors:['Home', 'Dashpoint', 'DesignLearningObjects', 'Contact'],
	verticalCentered: false
});

// particles.js
particlesJS.load('particles', 'particles.json', function() {
});