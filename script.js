/* Code to uncheck all accordion submenu when about us checkbox is unchecked */
const aboutMenu = document.getElementById( "about-menu" );

const listingsMenu = document.getElementById( "listings-menu" );

const mortgagesMenu = document.getElementById( "mortgages-menu" );

const teamMenu = document.getElementById( "team-menu" );

function change () {
  if ( aboutMenu.checked == false ) {
    listingsMenu.checked = false;
    mortgagesMenu.checked = false;
    teamMenu.checked = false;
  };
};

/* Code to uncheck all accordion submenu when hamburger button is unchecked */

function uncheck () {
  if ( document.getElementById( "toggle-menu" ).checked == false ) {
    aboutMenu.checked = false;
    listingsMenu.checked = false;
    mortgagesMenu.checked = false;
    teamMenu.checked = false;
  }
}

/* Code for heart button */

const heartIcon = document.querySelectorAll( ".heart" );

for ( const element of heartIcon ) {
  element.addEventListener( "click", function () {
    element.classList.toggle( "click-color" );
  } );
};

/* Code for back to top button */
// Make a constant for the top button

const topButton = document.querySelector( "#back-to-top" )

// Add an event listener that watches window's scroll and applies scrollFunction

window.addEventListener( "scroll", scrollFunction );

function scrollFunction () {
  let viewportHeight = window.innerHeight;
  if ( window.pageYOffset > viewportHeight * ( 3 / 4 ) ) { // Show topButton
    if ( !topButton.classList.contains( "show-btn" ) ) {
      topButton.classList.remove( "hide-btn" );
      topButton.classList.add( "show-btn" );
      window.getComputedStyle( topButton ).display = "block";
    }
  }
  else {
    if ( topButton.classList.contains( "show-btn" ) ) {
      topButton.classList.remove( "show-btn" );
      topButton.classList.add( "hide-btn" );
      setTimeout( function () {
        window.getComputedStyle( topButton ).display = "none";
      }, 250 );
    }
  }
}

topButton.addEventListener( "click", smoothScrolltoTop );

function smoothScrolltoTop () {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 2000;
  let start = null;

  window.requestAnimationFrame( step );

  function step ( timestamp ) {
    if ( !start ) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo( 0, easeInOutCubic(
      progress,
      startPosition,
      distance,
      duration
    ) );
    if ( progress < duration ) window.requestAnimationFrame( step );
  }
}

function easeInOutCubic ( t, b, c, d ) {
  t /= d / 2;
  if ( t < 1 ) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * ( t * t * t + 2 ) + b;
};

