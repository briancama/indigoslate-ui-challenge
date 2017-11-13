(function() {
   // your page initialization code here
   // the DOM will be available here

  //remove animation preload class
  setTimeout(function(){
      document.body.className="";
  },500);

  //On search button press expand search input field
  var button = document.querySelector("#header-search button");
  document.querySelector('#header-search button').onclick = function(){
    event.preventDefault();
    var input = document.querySelector("#header-search input");
    input.focus();
    console.log(input.value);
    if (input.value) {
      // submit form
    }
    else {
      //if no text submitted remove focus from input
      button.blur();
    }
  }
  document.getElementById('drawer-open').onclick = function(){
    //Menu Drawer Animation
    document.querySelector('.drawer').classList.toggle('dark-overlay');
    var drawer = document.getElementById("main-drawer");
    drawer.classList.toggle("slide-open");
    //Hamburger Animation
    var hamburgerToggle = document.querySelector('.hamburger-icon');
    hamburgerToggle.classList.toggle("open");
    //toggle text slide in
    document.querySelector('.toggle-text').classList.toggle('switch');
  }
  Array.prototype.forEach.call(document.querySelectorAll('.submenu-open'),function(e){e.addEventListener('click',function(){
    var menuItem = this.parentNode;
    console.log(menuItem);
    if(!menuItem.classList.contains('active')) {
        menuItem.classList.toggle('active');
        var viewportOffset = menuItem.getBoundingClientRect();
        console.log(viewportOffset);
        var top = viewportOffset.top + window.scrollY - 65;
        var mySequence = [
          { e: menuItem.getElementsByClassName('drawer-submenu-list'), p: { left: 0, opacity: 1 }, o: { duration: 500, easing: 'ease-in-out' } },
          { e: menuItem, p: { top: -top }, o: { duration: 500, easing: 'ease-in-out' } },
        ];
        Velocity.RunSequence(mySequence);
    }
    else {
      var mySequence = [
        { e: menuItem, p: { top: 0 }, o: { duration: 400 } },
        { e: menuItem.getElementsByClassName('drawer-submenu-list'), p: { left: '-100%', opacity: 0 }, o: { duration: 400 }},
      ];
      Velocity.RunSequence(mySequence);
      setTimeout(function(self){
        self.classList.toggle('active');
      }, 900, menuItem)
    }
  },false)})
})();