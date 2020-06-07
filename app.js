function tabFunctioning(event,aID,dataID,cID){
    event.preventDefault()
    const anchors = document.getElementsByTagName("a")
    for(let i=0;i<anchors.length;i++){
        anchors[i].style.textDecoration="underline"
        anchors[i].style.color="#077cff"
    }
    document.getElementById(aID).style.textDecoration="none"
    document.getElementById(aID).style.color="black"

    const allElements = document.getElementsByClassName(cID)
    for(let i=0;i<allElements.length;i++){
        allElements[i].style.display="none"
    }
    document.getElementById(dataID).style.display="block"
}