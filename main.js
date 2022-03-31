
const li1on = document.getElementById("li1on");
const li2on = document.getElementById("li2on");
const li3on = document.getElementById("li3on");
const li1off = document.getElementById("li1off");
const li2off = document.getElementById("li2off");
const li3off = document.getElementById("li3off");
const navc1 = document.getElementById("navc1");
const navc2 = document.getElementById("navc2");
const navc3 = document.getElementById("navc3");
//-------------------------------------------------
const answer1 = document.getElementById("answer1");
const q1off = document.getElementById("q1off");
const q1on = document.getElementById("q1on");
//----------------------------------------------
const answer2 = document.getElementById("answer2");
const q2off = document.getElementById("q2off");
const q2on = document.getElementById("q2on");
//-----------------------------------------------
const answer3 = document.getElementById("answer3");
const q3off = document.getElementById("q3off");
const q3on = document.getElementById("q3on");
//-----------------------------------------------
const answer4 = document.getElementById("answer4");
const q4off = document.getElementById("q4off");
const q4on = document.getElementById("q4on");
//-----------------------------------------------

function li1(){
    document.getElementById("li2on").style.display = "block";
    li1on.style.display="inline-block"
    li2on.style.display="none"
    li3on.style.display="none"
    li1off.style.display="none"
    li2off.style.display="inline-block"
    li3off.style.display="inline-block"
    navc1.style.display="flex"
    navc2.style.display="none"
    navc3.style.display="none"
}
function li2(){
    li1on.style.display="none"
    li2on.style.display="inline-block"
    li3on.style.display="none"
    li1off.style.display="inline-block"
    li2off.style.display="none"
    li3off.style.display="inline-block"
    navc1.style.display="none"
    navc2.style.display="flex"
    navc3.style.display="none"
}
function li3(){
    li1on.style.display="none"
    li2on.style.display="none"
    li3on.style.display="inline-block"
    li1off.style.display="inline-block"
    li2off.style.display="inline-block"
    li3off.style.display="none"
    navc1.style.display="none"
    navc2.style.display="none"
    navc3.style.display="flex"
}
//answers-------------start
function show1off(){
    answer1.style.display="block"
    q1on.style.display="flex" 
    q1off.style.display="none"

}
function show1on(){
    answer1.style.display="none"
    q1on.style.display="none" 
    q1off.style.display="flex"

}
function show2off(){
    answer2.style.display="block"
    q2on.style.display="flex" 
    q2off.style.display="none"

}
function show2on(){
    answer2.style.display="none"
    q2on.style.display="none" 
    q2off.style.display="flex"

}
function show3off(){
    answer3.style.display="block"
    q3on.style.display="flex" 
    q3off.style.display="none"

}
function show3on(){
    answer3.style.display="none"
    q3on.style.display="none" 
    q3off.style.display="flex"

}
function show4off(){
    answer4.style.display="block"
    q4on.style.display="flex" 
    q4off.style.display="none"

}
function show4on(){
    answer4.style.display="none"
    q4on.style.display="none" 
    q4off.style.display="flex"

}
//answers-------------end
//open and mobile-ul1-----------start
function closeuli1(){
    document.getElementById("mobile-ul1").style="display:none";
    document.getElementById("body").style.overflow="scroll";
};
function openul1(){
    document.getElementById("mobile-ul1").style.display="block";
    document.getElementById("body").style.overflow="hidden";
};

//open and mobile-ul1-----------end

function validation(){
    var email=document.getElementById("email").value;///get id with value 
var emailpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;////Regular expression
	if(emailpattern.test(email))
	{
        document.getElementById("err").style.display="none";
        document.getElementById("errimg").style.display="none";
        document.getElementById("submit").type="submit";
    }
    else
    {
        document.getElementById("err").style.display="block";
        document.getElementById("email").style.border=" solid #FF5758 2px"
        document.getElementById("errimg").style.display="block";
    }
	}
