let studentRecords=[{
    name:"Jhon",
    id:123,
    marks:98
},
{
    name:"Baba",
    id:101,
    marks:23
}
{
    name:"yaga",
    id:200,
    marks:45
}
{
    name:"Wick",
    id:115,
    marks:75
}
]
//for getting the details of students that have marks greater than 50

for(let i=0;i<studentRecords.length;i++)
{
    let a=studentRecords[i].marks>50;
    if(a)
        console.log(studentRecords[i])
    
}let studentRecords=[{
    name:"John",
    id:123,
    marks:98
   },
   {
    name:"Baba",
    id:101,
    marks:23
   },
   {
    name:"yaga",
    id:200,
    marks:45
   },
   {
    name:"Wick",
    id:115,
    marks:75
   }
   ]

   
   for(let i=0;i<studentRecords.length;i++){
    let a=studentRecords[i].marks>50;
    if(a){
     console.log(studentRecords[i])
    }
    
    
   }
   
   
   studentRecords.forEach(n=>console.log(n.name.toUpperCase()))
   
   
   for(let i=0;i<studentRecords.length;i++){
    let a=studentRecords[i].marks>50 && studentRecords[i].id>120;
    if(a){
     console.log(studentRecords[i])
    }
    
    
   }
   
  
   
   let sum=studentRecords.map(n=>n.marks).reduce((a,b)=>a+b,0);
   
   console.log(sum);
   

   let grt20=studentRecords.filter(n=>n.id>120).map(n=>n.marks).reduce((a,b)=>a+b,0);
   
    
   
   console.log(grt20);let studentRecords=[{
    name:"John",
    id:123,
    marks:98
   },
   {
    name:"Baba",
    id:101,
    marks:23
   },
   {
    name:"yaga",
    id:200,
    marks:45
   },
   {
    name:"Wick",
    id:115,
    marks:75
   }
   ]

   
   for(let i=0;i<studentRecords.length;i++){
    let a=studentRecords[i].marks>50;
    if(a){
     console.log(studentRecords[i])
    }
    
    
   }
   
   
   studentRecords.forEach(n=>console.log(n.name.toUpperCase()))
   
   
   for(let i=0;i<studentRecords.length;i++){
    let a=studentRecords[i].marks>50 && studentRecords[i].id>120;
    if(a){
     console.log(studentRecords[i])
    }
    
    
   }
   
  
   
   let sum=studentRecords.map(n=>n.marks).reduce((a,b)=>a+b,0);
   
   console.log(sum);
   

   let grt20=studentRecords.filter(n=>n.id>120).map(n=>n.marks).reduce((a,b)=>a+b,0);
   
    
   
   console.log(grt20);