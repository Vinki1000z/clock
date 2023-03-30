console.log("this is clock");
// const hour=document.querySelectorAll('.hour')[0];
// const hour=document.getElementsByClassName("hour");
// const minutes=document.getElementsByClassName("minutes");
// const second=document.getElementsByClassName("second");
const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const second = document.querySelector('.second');

// setInterval(() => {
//     let date=new Date();
//     let h=date.getHours();
//     let m=date.getMinutes();
//     let s=date.getSeconds();
//     let ch=30*(h/2)+(m/2);
//     let cm=6*(m);
//     let cs=6*(s);

//     console.log(date);
//     console.log(h);
//     console.log(m);
//     console.log(s);
//     console.log(ch);
//     console.log(cm);
//     console.log(cs);
//     let hur;
//     let min;
//     let sec;
//     hur.style.transform = `rotate(${ch}deg)`;
//     min.style.transform = `rotate(${cm}deg)`;
//     sec.style.transform = `rotate(${cs}deg)`;
// }, 1000);
setInterval(() => {
    d = new Date();

   let  htime = d.getHours();
    let mtime = d.getMinutes();
   let  stime = d.getSeconds();
   let  hrotation = 30*htime + mtime/2;
   let  mrotation = 6*mtime;
   let srotation = 6*stime;
   let hx=673;   
   let hy=-401;   
    hour.style.transform = `rotate(${hrotation}deg)`;
    hour.style.transform = `translate(${hx}px, ${hy}px)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
