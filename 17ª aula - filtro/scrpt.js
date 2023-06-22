let input, ul, li, a, i, filtro
input = document.getElementById("myInput");
ul = document.getElementById("myUl");
li = ul.getElementsByTagName("li");


function apertar(){
    filtro = input.value.toUpperCase();/*transofromar as 
    letras em maiusculo*/
    
    for(i = 0; 1 < li.length; i++)
    {
        a=li[i].getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filtro) > -1)
        {
            li[i].style.display='';
            
        }else{
            li[i].style.display ='none';
            function adicionar(){
                input
            }
        }
    }
}