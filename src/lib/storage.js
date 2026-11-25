import {seed} from './data'
const KEY='coach-attendance-mvp-v1'
export function loadData(){try{const raw=localStorage.getItem(KEY); if(raw)return JSON.parse(raw)}catch(e){} localStorage.setItem(KEY,JSON.stringify(seed)); return structuredClone(seed)}
export function saveData(data){localStorage.setItem(KEY,JSON.stringify(data))}
export function exportData(data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`coach-attendance-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)}
export function importData(file,onDone){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result); if(!d.students||!d.societies||!d.attendance)throw Error('Invalid backup');onDone(d)}catch(e){alert('Could not import this backup file.')}};r.readAsText(file)}
export const dateKey=(date)=>typeof date==='string'?date:new Date(date).toISOString().slice(0,10)
