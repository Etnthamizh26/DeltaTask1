var bmr;
var carbslimit;
var protlimit;
var fatlimit;
function vfun() {
	
     var name=document.form1.name.value;
     var gender=document.form1.gender.value;
     var age=document.form1.age.value;
     var height=document.form1.height.value;
     var weight=document.form1.weight.value;
     if(gender == "male")
        bmr= (10*weight) + (6.25*height) - (5*age) + 5;
     else
        bmr= (10*weight) + (6.25*height) - (5*age) - 161;

     if(age<4 && age>=1)
     {
        carbslimit= (0.5*bmr);
        protlimit= (0.15*bmr);
        fatlimit= (0.35*bmr);
     }
     else
        if (age>=4 && age<19) {
            carbslimit= (0.5*bmr);
            protlimit= (0.2*bmr);
            fatlimit= (0.3*bmr);
        }
        else
            if (age>=19) {
              carbslimit= (0.5*bmr);
              protlimit= (0.3*bmr);
              fatlimit= (0.2*bmr); 
            }

     if(name==null || name=="" )
     {
                  document.getElementById("error").innerHTML = "Enter Name";
                 return false;
        }
     if(age==null || age=="" )
     { 
                document.getElementById("error").innerHTML = "Enter Age";
                 return false;
        }
     if(height==null || height=="" )
     { 
                document.getElementById("error").innerHTML = "Enter Height";
                 return false;
        }
     if(weight==null || weight=="" )
     { 
                document.getElementById("error").innerHTML = "Enter Weight";
                 return false;
        }
     alert("Scroll Down");
     document.getElementById("bmrcalc").innerHTML = "Basal Metobolic Rate is: "+bmr+" cal/day";
   }
 var tcarbs=0;
 var tprot=0;
 var tfat=0;
function add()
{
 var fname= document.getElementById("fname").value;
 var carbs= document.getElementById("carbs").value;
 var prot= document.getElementById("prot").value;
 var fat= document.getElementById("fat").value;
 tcarbs = +tcarbs + +carbs;
 tprot = +tprot + +prot;
 tfat = +tfat + +fat;  
 var c=confirm("Confirm your Addition-You can't change the food details now!!");
 if(c)
 {
    document.getElementById("fname").value="";
    document.getElementById("carbs").value=""; 
    document.getElementById("prot").value="";
    document.getElementById("fat").value="";
 }
}
function result()
{
     document.getElementById("whole2").innerHTML="Your total Carbohydrate consumption for today is: "+tcarbs+" cal";
     document.getElementById("whole3").innerHTML="Your total Protien consumption for today is: "+tprot+" cal";
     document.getElementById("whole4").innerHTML="Your total Fat consumption for today is: "+tfat+" cal";
     var ele=document.createElement("BUTTON");
     ele.innerHTML = "Analysis";
     ele.onclick= function()
     {
        var fresh=document.getElementById("whole");
        var carbspara = document.createElement("P");
        var carbsnode;
        var carbsapp;
        var protpara = document.createElement("P");
        var protnode;
        var protapp;
        var fatpara = document.createElement("P");
        var fatnode; 
        var fatapp;       

        if (tcarbs<(+carbslimit-20)) {
            fresh.innerHTML="Carbohydrates: You should improve your Carbohydrates intake as your Carbohydrates intake is less than the required";
        }
        else
            if (tcarbs>=(+carbslimit-20) && tcarbs<(carbslimit+20)) {
            fresh.innerHTML="Carbohydrates: Your Carbohydrates intake is standard,keep going with it";
            }
            else
                if(tcarbs>=(carbslimit+20)){
               fresh.innerHTML="Carbohydrates: Your Carbohydrates intake is more than the required,so reduce your Carbohydrates intake";
                }

        if (tprot<(+protlimit-5)) {
            protpara.innerHTML="Protein: You should improve your Protein intake as your Protein intake is less than the required";
        }
        else
            if (tprot>=(+protlimit-5) && tprot<(protlimit+5)) {
            protpara.innerHTML="Protein: Your Protein intake is standard,keep going with it";
        }
        else
            if (tprot>=(+protlimit+5)) {
            protpara.innerHTML="Protein: Your Protein intake is more than the required,so reduce your Protein intake";
        }

        if (tfat<(+fatlimit-5)) {
            fatpara.innerHTML="Fat: You should improve your Fat intake as your Fat intake is less than the required";
        }
        else
            if (tfat>=(+fatlimit-5) && tfat<(fatlimit+5)) {
            fatpara.innerHTML="Fat: Your Fat intake is standard,keep going with it";
        }
        else
            if (tfat>=(+fatlimit+5)) {
           fatpara.innerHTML="Fat: Your Fat intake is more than the required,so reduce your Fat intake";
        }

        fresh.appendChild(protpara);
        fresh.appendChild(fatpara);
      }  
     document.getElementById("dbut").appendChild(ele);
 }    