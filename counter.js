import{L as a,$ as r,C as u,S as l}from"./index-BlheU191.js";let t=new l(0);function s(){function e(){alert(`Counting at: ${t.get()}`)}let n=setInterval(()=>{t.update(o=>o+1)},1e3);return a.Column({ondestroy(){clearInterval(n)},onclick(){e()},child:r(()=>u.HTML(`
            
            <div>Can be used for dynamic purposes too!</div>
            <p>Count: ${t.get()}</p>
            
        `))})}export{s as default};
