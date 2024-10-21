let studentScore = 75;
gradeCalculation(studentScore);

function gradeCalculation(score){
console.log(score)
  switch(true){
    case (score>=0 && score<20):{
      console.log("Student's grade is F")
      break;
    }

    case (score>=20 && score<40):{
      console.log("Student's grade is E")
      break;
    }

    case (score>=40 && score<60):{
      console.log("Student's grade is D")
      break;
    }

    case (score>=60 && score<75):{
      console.log("Student's grade is C")
      break;
    }

    case (score>=75 && score<90):{
      console.log("Student's grade is B")
      break;
    }

    case (score>=90 && score<100):{
      console.log("Student's grade is A")
      break;
    }

    case (score==100):{
      console.log("Student's grade is A+")
      break;
    }

    default:{
      console.log("Valid Range of score is 0 to 100")
    }

  }
}
