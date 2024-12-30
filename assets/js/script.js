
//<====================== Navbar DropDown =============================>
    const dropdownMenu = document.querySelector(".dropdown-menu")
    const dropdownList = document.querySelector(".dropdown-list")

    document.addEventListener("DOMContentLoaded", () => {

        dropdownMenu.addEventListener("mouseenter", () =>{
            dropdownList.style.display = "block"
        })
        dropdownMenu.addEventListener("mouseleave", () =>{
            dropdownList.style.display = "none"
        })
    })

//<====================== Mobile Sidebar =============================>
    const menuIcons = document.querySelector(".menu-icon")
    const xIcons = document.querySelector(".x-icons")
    const Navbar = document.querySelector("nav")
    const navMenuIcon = document.querySelector("nav-menu-icons")
    const navActions = document.querySelector("nav-actions")
    const iconsVisible = () =>{
        return(
            xIcons.style.display = "none",
            menuIcons.classList.add('visible')
        )
    }     
    iconsVisible()

    menuIcons.addEventListener("click" , () =>{
        menuIcons.classList.remove('visible')
        xIcons.style.display = "block"
        Navbar.classList.add("visible")
        navMenuIcon.style.display = "flex"
        navActions.style.display = "flex"
        setTimeout(() => {
            menuIcons.style.display = "none"
            xIcons.classList.add('visible')
        }, 500);
    })

    xIcons.addEventListener("click" , () =>{
        xIcons.classList.remove('visible')
        menuIcons.style.display = "block"
        Navbar.classList.remove("visible")
        navMenuIcon.style.display = "none"
        navActions.style.display = "none"
        setTimeout(() => {
            iconsVisible()
        }, 500);
    }) 
