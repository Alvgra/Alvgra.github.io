import{S as Ne,i as Ve,s as Oe,k as h,l as _,m,h as f,n as b,J as Ie,b as ee,E as o,B as de,o as He,K as Ue,q as O,a as D,r as B,c as R,p as he,L as Be,f as $,d as qe,u as x,t as me,M as _e,w as ze,x as Fe,y as Ke,z as Le,g as Me}from"../../chunks/index-7bdb04d4.js";function We(r){let e,l,n,a;return{c(){e=h("div"),l=h("audio"),n=h("track"),this.h()},l(c){e=_(c,"DIV",{});var u=m(e);l=_(u,"AUDIO",{src:!0});var k=m(l);n=_(k,"TRACK",{kind:!0}),k.forEach(f),u.forEach(f),this.h()},h(){b(n,"kind","captions"),Ie(l.src,a=r[0])||b(l,"src",a),l.controls=!0},m(c,u){ee(c,e,u),o(e,l),o(l,n),r[2](l)},p(c,[u]){u&1&&!Ie(l.src,a=c[0])&&b(l,"src",a)},i:de,o:de,d(c){c&&f(e),r[2](null)}}}const je=new Set;function Ge(r,e,l){let{src:n}=e,a;He(()=>{je.add(a)});function c(u){Ue[u?"unshift":"push"](()=>{a=u,l(1,a)})}return r.$$set=u=>{"src"in u&&l(0,n=u.src)},[n,a,c]}class Je extends Ne{constructor(e){super(),Ve(this,e,Ge,We,Oe,{src:0})}}function Te(r,e,l){const n=r.slice();return n[9]=e[l],n}function Ae(r,e,l){const n=r.slice();return n[12]=e[l],n}function De(r,e,l){const n=r.slice();return n[15]=e[l],n}function Re(r){let e,l;return e=new Je({props:{src:r[15]}}),{c(){ze(e.$$.fragment)},l(n){Fe(e.$$.fragment,n)},m(n,a){Ke(e,n,a),l=!0},p:de,i(n){l||($(e.$$.fragment,n),l=!0)},o(n){me(e.$$.fragment,n),l=!1},d(n){Le(e,n)}}}function Se(r){let e,l,n=r[12].name+"",a,c,u,k=r[12].cost*r[3]+"",I,p,E,q;function w(){return r[8](r[12])}return{c(){e=h("button"),l=h("span"),a=O(n),c=D(),u=h("span"),I=O(k),p=D(),this.h()},l(P){e=_(P,"BUTTON",{class:!0});var T=m(e);l=_(T,"SPAN",{});var N=m(l);a=B(N,n),N.forEach(f),c=R(T),u=_(T,"SPAN",{});var A=m(u);I=B(A,k),A.forEach(f),p=R(T),T.forEach(f),this.h()},h(){b(e,"class","upgrade svelte-lmbgek")},m(P,T){ee(P,e,T),o(e,l),o(l,a),o(e,c),o(e,u),o(u,I),o(e,p),E||(q=Be(e,"click",w),E=!0)},p(P,T){r=P,T&8&&k!==(k=r[12].cost*r[3]+"")&&x(I,k)},d(P){P&&f(e),E=!1,q()}}}function Ce(r){let e,l=r[9]+"",n;return{c(){e=h("div"),n=O(l),this.h()},l(a){e=_(a,"DIV",{class:!0});var c=m(e);n=B(c,l),c.forEach(f),this.h()},h(){b(e,"class","worker svelte-lmbgek")},m(a,c){ee(a,e,c),o(e,n)},p(a,c){c&4&&l!==(l=a[9]+"")&&x(n,l)},d(a){a&&f(e)}}}function Qe(r){let e,l,n,a,c,u,k,I,p,E,q,w,P,T,N,A,L,Q,te,z,le,X,se,G,y,V,J,re,oe,ne,ae,F,ce,ie,H,ue,pe,K=r[5],d=[];for(let s=0;s<K.length;s+=1)d[s]=Re(De(r,K,s));const ye=s=>me(d[s],1,1,()=>{d[s]=null});let M=r[6],v=[];for(let s=0;s<M.length;s+=1)v[s]=Se(Ae(r,M,s));let W=r[2],g=[];for(let s=0;s<W.length;s+=1)g[s]=Ce(Te(r,W,s));return{c(){e=h("div"),l=h("h1"),n=O("Click the flower"),a=D(),c=h("button"),u=O("Rose"),k=D();for(let s=0;s<d.length;s+=1)d[s].c();I=D(),p=h("article"),E=h("progress"),q=D(),w=h("header"),P=h("div");for(let s=0;s<v.length;s+=1)v[s].c();T=D(),N=h("div"),A=h("button"),L=h("span"),Q=O(r[0]),te=D(),z=h("span"),le=O("PPC: "),X=O(r[1]),se=D(),G=h("footer"),y=h("div"),V=h("div"),J=h("span"),re=O("Workers"),oe=D(),ne=h("hr"),ae=D(),F=h("div");for(let s=0;s<g.length;s+=1)g[s].c();ce=D(),ie=h("hr"),this.h()},l(s){e=_(s,"DIV",{style:!0});var i=m(e);l=_(i,"H1",{class:!0});var t=m(l);n=B(t,"Click the flower"),t.forEach(f),a=R(i),c=_(i,"BUTTON",{class:!0});var S=m(c);u=B(S,"Rose"),S.forEach(f),k=R(i);for(let C=0;C<d.length;C+=1)d[C].l(i);I=R(i),p=_(i,"ARTICLE",{});var U=m(p);E=_(U,"PROGRESS",{max:!0,class:!0}),m(E).forEach(f),q=R(U),w=_(U,"HEADER",{});var ve=m(w);P=_(ve,"DIV",{class:!0});var ge=m(P);for(let C=0;C<v.length;C+=1)v[C].l(ge);ge.forEach(f),ve.forEach(f),T=R(U),N=_(U,"DIV",{class:!0});var ke=m(N);A=_(ke,"BUTTON",{class:!0});var Y=m(A);L=_(Y,"SPAN",{class:!0});var be=m(L);Q=B(be,r[0]),be.forEach(f),te=R(Y),z=_(Y,"SPAN",{class:!0});var fe=m(z);le=B(fe,"PPC: "),X=B(fe,r[1]),fe.forEach(f),Y.forEach(f),ke.forEach(f),se=R(U),G=_(U,"FOOTER",{});var Ee=m(G);y=_(Ee,"DIV",{class:!0});var Z=m(y);V=_(Z,"DIV",{});var j=m(V);J=_(j,"SPAN",{});var we=m(J);re=B(we,"Workers"),we.forEach(f),oe=R(j),ne=_(j,"HR",{}),ae=R(j),F=_(j,"DIV",{class:!0});var Pe=m(F);for(let C=0;C<g.length;C+=1)g[C].l(Pe);Pe.forEach(f),j.forEach(f),ce=R(Z),ie=_(Z,"HR",{}),Z.forEach(f),Ee.forEach(f),U.forEach(f),i.forEach(f),this.h()},h(){b(l,"class","top svelte-lmbgek"),b(c,"class","slide svelte-lmbgek"),E.value=r[0],b(E,"max","100"),b(E,"class","svelte-lmbgek"),b(P,"class","grid"),b(L,"class","clicks svelte-lmbgek"),b(z,"class","pointtext svelte-lmbgek"),b(A,"class","clicker svelte-lmbgek"),b(N,"class","game svelte-lmbgek"),b(F,"class","shop svelte-lmbgek"),b(y,"class","panelright svelte-lmbgek"),he(e,"background-image",r[4]),he(e,"background-size","cover")},m(s,i){ee(s,e,i),o(e,l),o(l,n),o(e,a),o(e,c),o(c,u),o(e,k);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(e,null);o(e,I),o(e,p),o(p,E),o(p,q),o(p,w),o(w,P);for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(P,null);o(p,T),o(p,N),o(N,A),o(A,L),o(L,Q),o(A,te),o(A,z),o(z,le),o(z,X),o(p,se),o(p,G),o(G,y),o(y,V),o(V,J),o(J,re),o(V,oe),o(V,ne),o(V,ae),o(V,F);for(let t=0;t<g.length;t+=1)g[t]&&g[t].m(F,null);o(y,ce),o(y,ie),H=!0,ue||(pe=Be(A,"click",r[7]),ue=!0)},p(s,[i]){if(i&32){K=s[5];let t;for(t=0;t<K.length;t+=1){const S=De(s,K,t);d[t]?(d[t].p(S,i),$(d[t],1)):(d[t]=Re(S),d[t].c(),$(d[t],1),d[t].m(e,I))}for(Me(),t=K.length;t<d.length;t+=1)ye(t);qe()}if((!H||i&1)&&(E.value=s[0]),i&207){M=s[6];let t;for(t=0;t<M.length;t+=1){const S=Ae(s,M,t);v[t]?v[t].p(S,i):(v[t]=Se(S),v[t].c(),v[t].m(P,null))}for(;t<v.length;t+=1)v[t].d(1);v.length=M.length}if((!H||i&1)&&x(Q,s[0]),(!H||i&2)&&x(X,s[1]),i&4){W=s[2];let t;for(t=0;t<W.length;t+=1){const S=Te(s,W,t);g[t]?g[t].p(S,i):(g[t]=Ce(S),g[t].c(),g[t].m(F,null))}for(;t<g.length;t+=1)g[t].d(1);g.length=W.length}(!H||i&16)&&he(e,"background-image",s[4])},i(s){if(!H){for(let i=0;i<K.length;i+=1)$(d[i]);H=!0}},o(s){d=d.filter(Boolean);for(let i=0;i<d.length;i+=1)me(d[i]);H=!1},d(s){s&&f(e),_e(d,s),_e(v,s),_e(g,s),ue=!1,pe()}}}function Xe(r){return new Promise(e=>setTimeout(e,r))}function Ye(r,e,l){let n=["https://sveltejs.github.io/assets/music/strauss.mp3"],a=0,c=1,u=[],k=1,I=null,p=[{cost:5,name:"Booster",multiplier:2,worker:0},{cost:2,name:"Flower worker",multiplier:0,worker:1}];function E(){l(0,a=a+c),console.log("click"+a),l(4,I='url("https://i.gifer.com/origin/94/9453bb10dcc37daf75abcf3fea141fc8.gif")'),Xe(1e3).then(()=>{l(4,I=null)})}return[a,c,u,k,I,n,p,E,w=>{a>=w.cost?(w.multiplier&&(l(1,c=c*w.multiplier),l(0,a-=w.cost)),w.worker&&a&&(l(3,k=k*2),l(2,u=[w.name,...u]),setInterval(E,1e3),l(0,a-=w.cost))):alert("Click some more first!")}]}class $e extends Ne{constructor(e){super(),Ve(this,e,Ye,Qe,Oe,{})}}export{$e as default};
