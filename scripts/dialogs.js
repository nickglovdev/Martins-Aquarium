const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

     // Show Bart's details when the button is clicked
     document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    
     document.querySelector("#button--david").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--david")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--spence").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--spence")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--rick").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--rick")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--bob").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bob")
            theDialog.showModal()
        }
    )

    
}

export default initializeDetailButtonEvents
