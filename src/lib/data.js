export const seed = {
  coach:{name:'Alex Morgan',photo:'',email:'coach@example.com'},
  societies:[
    {id:'soc-1',name:'Elite Football Society',location:'City Sports Complex',approved:true,joined:true},
    {id:'soc-2',name:'Basketball Academy',location:'Westside Arena',approved:true,joined:true},
    {id:'soc-3',name:'Athletics Club',location:'University Track',approved:false,joined:false}
  ],
  students:[
    ['Arjun Mehta','FB101','2009-04-18','Male','soc-1','2025-07-05','9876543210'],['Riya Sharma','FB102','2008-11-22','Female','soc-1','2025-07-12','9876543211'],['Kabir Singh','FB103','2009-02-13','Male','soc-1','2025-08-01','9876543212'],['Anaya Patel','FB104','2010-06-08','Female','soc-1','2025-08-15','9876543213'],['Vihaan Rao','FB105','2008-09-30','Male','soc-1','2025-09-01','9876543214'],['Sara Khan','FB106','2009-12-11','Female','soc-1','2025-09-10','9876543215'],['Dev Malhotra','FB107','2008-03-02','Male','soc-1','2025-10-01','9876543216'],
    ['Aarav Kapoor','BB201','2009-01-17','Male','soc-2','2025-07-02','9876543220'],['Ishita Joshi','BB202','2010-05-21','Female','soc-2','2025-07-20','9876543221'],['Neil Thomas','BB203','2008-10-05','Male','soc-2','2025-08-04','9876543222'],['Myra Desai','BB204','2009-07-19','Female','soc-2','2025-08-18','9876543223'],['Aditya Jain','BB205','2008-12-28','Male','soc-2','2025-09-05','9876543224'],['Tara Bose','BB206','2009-03-14','Female','soc-2','2025-09-18','9876543225'],['Reyansh Shah','BB207','2010-01-09','Male','soc-2','2025-10-06','9876543226'],
    ['Yash Verma','AT301','2009-05-16','Male','soc-3','2025-08-03','9876543230'],['Meera Nair','AT302','2008-08-27','Female','soc-3','2025-08-10','9876543231'],['Om Kulkarni','AT303','2009-11-03','Male','soc-3','2025-09-02','9876543232']
  ].map((x,i)=>({id:'stu-'+(i+1),name:x[0],studentId:x[1],dob:x[2],gender:x[3],societyId:x[4],joiningDate:x[5],phone:x[6],notes:'',photo:''})),
  attendance:{} , settings:{theme:'light'}
}
const iso=(d)=>d.toISOString().slice(0,10)
for(let offset=1;offset<=12;offset++){
 const d=new Date(); d.setDate(d.getDate()-offset); const key=iso(d);
 seed.students.forEach((s,i)=>{if(s.societyId!=='soc-3' || offset<5) seed.attendance[`${s.societyId}|${key}|${s.id}`]=((i+offset)%5!==0)?'present':'absent'})
}
