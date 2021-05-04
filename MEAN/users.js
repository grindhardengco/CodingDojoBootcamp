users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  
function userLanguages(users){
    let output = ''
    for (i=0; i<users.length; i++){
        let language_output = ''
        for (j=0; j<users[i].languages.length-1; j++){
            language_output += `${users[i].languages[j]}, `
        }
        language_output += `and ${users[i].languages[j]}`
        output += `${users[i].fname} ${users[i].lname} knows ${language_output}.\n` 
        
        let interests_output = ''
        for (k=0; k<Object.keys(users[i].interests).length; k++){
            for (l=0; l<users[i].interests[Object.keys(users[i].interests)[k]].length; l++){
                interests_output += `${users[i].interests[Object.keys(users[i].interests)[k]][l]}, `
            }
        }

        //Output all interests to 'interests_output' EXCEPT the last [l] of the last [k].  
        //The last [k] will output all interests except the last [l]. (Loop again)
        //Then the last...
        // interests_output += `and ${users[i].interests[Object.keys(users[i].interests)[k]][l]}`

        output += `${users[i].fname} is also interested in ${interests_output}.\n`
    }
    return output
}

  console.log(userLanguages(users))