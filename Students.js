
let students = [
    {name : 'Alice' , age :20 , grades :[50] , hobbies : ['cricket','swimming']},
    {name : 'mary' , age :21 , grades : [60] , hobbies : ['volleyball']},
    {name : 'john' , age :20, grades : [70] , hobbies : ['singing']},
    {name : 'abdul' , age :21 , grades : [85], hobbies : ['dancing']},
    {name : 'micheal' , age :24 , grades : [90], hobbies : ['reading']},
    {name : 'sayeed' , age :19 , grades : [96], hobbies : ['coding']},
    ]
    
    
    function findTopStudents(arr, marks){
      let toppers = arr.filter(student => student.grades >= marks)
      
      return toppers
    }
    console.log(findTopStudents(students, 85))
    
    
    function addHobby(arr, name, hobby){
    
      arr.forEach(student => {
        if(student.name === name){
          student.hobbies.push(hobby)
        }
      })
      return arr
    }
    console.log(addHobby(students, "mary", "ahmed"))
    
    
    function updateStudent(arr, name, obj){
      arr.forEach(student => {
        if(student.name === name){
          student .age = obj.age;
          student .grades = obj.grades;
           student .hobbies = obj.hobbies;
        }
      })
      return arr
    }
    console.log(updateStudent(students, 'Alice', { age: 44, grades: [1,2,3], hobbies: ['reading', 'painting', "drawing"] }))
    
    console.log('original', students)
    