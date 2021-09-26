/***************************************************************************
 * Side Menu Action Listener
 * When the user clicks on the menu icon, the menu
 * will open, and the icon will change, from the ellipsis
 * To a an x.
 **************************************************************************/
sideMenuBtn.addEventListener("click", function(e)
{
    // when the menu btn gets clicked on, it will 
    // change the logo to an "X"
    if(sideMenuIcon.classList.contains("fa-ellipsis-v"))
    {
        sideMenuIcon.classList.remove("fa-ellipsis-v");
        sideMenuIcon.classList.add("fa-times");
        sideMenuBtn.setAttribute("aria-expanded", "true");
        sideMenu.classList.add("sideMenuOpen");
    }
    else
    {
        // if you click on the X, it will change the logo
        // back to the 3 dots, and close the menu.
        sideMenuIcon.classList.remove("fa-times");
        sideMenuIcon.classList.add("fa-ellipsis-v");
        sideMenuBtn.setAttribute("aria-expanded", "false");
        sideMenu.classList.remove("sideMenuOpen");
    }
});