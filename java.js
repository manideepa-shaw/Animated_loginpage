function show()
{
    if(document.getElementsByClassName('social')[0].style.display==="none")
    {
        document.getElementsByClassName('social')[0].style.transition="0.5s";
        document.getElementsByClassName('social')[0].style.display="grid";
        document.getElementsByClassName('social')[0].style.width="20vw";
        document.getElementsByClassName('social')[0].style.left="0";
        document.getElementById('f1').style.visibility="hidden";
    }
    else
    {
        document.getElementsByClassName('social')[0].style.display="none";
        document.getElementById('f1').style.visibility="visible";
        document.getElementsByClassName('social')[0].style.display="none";
    }
}