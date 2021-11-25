function nextpage()
{
    person_1 = document.getElementById("person1").value;
    person_2= document.getElementById("person2").value;
    localStorage.setItem("person_1", person_1);
    localStorage.setItem("person_2", person_2);
    window.location = "quiz.html";
}