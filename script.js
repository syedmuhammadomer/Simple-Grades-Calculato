const calcy = () => {
    let web = document.getElementById('web').value;
    let phy = document.getElementById('phy').value;
    let maths = document.getElementById('maths').value;
    let pak = document.getElementById('pak').value;
    let grades = "";

    let TotalGrade = parseFloat(web) + parseFloat(phy) + parseFloat(maths) + parseFloat(pak);
   

    let perc = (TotalGrade / 400) * 100;
   

    if (grades >= 80) {
       grades = 'A'; // printing outputs
    } else if (grades >= 60) { // Note the space between else & if
        grades = 'B'; 
    } else if (grades >= 40) {
        grades = 'C'; 
    } else if (grades < 40) {
        grades = 'D'; 
    }

    document.getElementById('showData').innerHTML = `out of 400  your total  is ${TotalGrade}  and your percentage is ${perc}% <br> your Garde is ${grades}`
}