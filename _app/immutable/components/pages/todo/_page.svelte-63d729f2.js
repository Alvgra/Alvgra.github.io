import{S as C_,i as F_,s as R_,W as w_,k as b,q as L,a as y,e as T_,l as m,m as O,r as T,h as t,c as N,n as B,b as f,E as h,N as y_,L as j,B as i_,M as N_,P as H_,V as B_,u as u_,X as z_}from"../../../chunks/index-82995847.js";function A_(l,e,s){const u=l.slice();return u[15]=e[s],u}function I_(l,e,s){const u=l.slice();return u[18]=e[s],u[19]=e,u[20]=s,u}function O_(l){let e,s,u,a=l[18].text+"",E,k,n,d,r,p,v,R;function D(){l[8].call(e,l[19],l[20])}function F(){return l[9](l[20])}return{c(){e=b("input"),s=y(),u=b("span"),E=L(a),k=y(),n=b("span"),d=L("❌"),r=y(),p=b("br"),this.h()},l(c){e=m(c,"INPUT",{class:!0,type:!0}),s=N(c),u=m(c,"SPAN",{});var P=O(u);E=T(P,a),P.forEach(t),k=N(c),n=m(c,"SPAN",{});var z=O(n);d=T(z,"❌"),z.forEach(t),r=N(c),p=m(c,"BR",{}),this.h()},h(){B(e,"class","bakgrund_checkbox svelte-1xc69xd"),B(e,"type","checkbox"),B_(u,"checked",l[18].status)},m(c,P){f(c,e,P),e.checked=l[18].status,f(c,s,P),f(c,u,P),h(u,E),f(c,k,P),f(c,n,P),h(n,d),f(c,r,P),f(c,p,P),v||(R=[j(e,"change",D),j(n,"click",F)],v=!0)},p(c,P){l=c,P&2&&(e.checked=l[18].status),P&2&&a!==(a=l[18].text+"")&&u_(E,a),P&2&&B_(u,"checked",l[18].status)},d(c){c&&t(e),c&&t(s),c&&t(u),c&&t(k),c&&t(n),c&&t(r),c&&t(p),v=!1,H_(R)}}}function S_(l){let e,s,u,a=l[15]+"",E,k,n,d;return k=w_(l[11][0]),{c(){e=b("label"),s=b("input"),u=y(),E=L(a),this.h()},l(r){e=m(r,"LABEL",{});var p=O(e);s=m(p,"INPUT",{type:!0}),u=N(p),E=T(p,a),p.forEach(t),this.h()},h(){B(s,"type","checkbox"),s.__value=l[15],s.value=s.__value,k.p(s)},m(r,p){f(r,e,p),h(e,s),s.checked=~(l[3]||[]).indexOf(s.__value),h(e,u),h(e,E),n||(d=j(s,"change",l[14]),n=!0)},p(r,p){p&8&&(s.checked=~(r[3]||[]).indexOf(s.__value))},d(r){r&&t(e),k.r(),n=!1,d()}}}function D_(l){let e,s,u,a,E=l[2]===1?"scoop":"scoops",k,n,d=U_(l[3])+"",r;return{c(){e=b("p"),s=L("You ordered "),u=L(l[2]),a=y(),k=L(E),n=L(`
		of `),r=L(d),this.h()},l(p){e=m(p,"P",{class:!0});var v=O(e);s=T(v,"You ordered "),u=T(v,l[2]),a=N(v),k=T(v,E),n=T(v,`
		of `),r=T(v,d),v.forEach(t),this.h()},h(){B(e,"class","svelte-1xc69xd")},m(p,v){f(p,e,v),h(e,s),h(e,u),h(e,a),h(e,k),h(e,n),h(e,r)},p(p,v){v&4&&u_(u,p[2]),v&4&&E!==(E=p[2]===1?"scoop":"scoops")&&u_(k,E),v&8&&d!==(d=U_(p[3])+"")&&u_(r,d)},d(p){p&&t(e)}}}function M_(l){let e,s;return{c(){e=b("p"),s=L("Can't order more flavours than scoops!"),this.h()},l(u){e=m(u,"P",{class:!0});var a=O(e);s=T(a,"Can't order more flavours than scoops!"),a.forEach(t),this.h()},h(){B(e,"class","svelte-1xc69xd")},m(u,a){f(u,e,a),h(e,s)},p:i_,d(u){u&&t(e)}}}function j_(l){let e,s;return{c(){e=b("p"),s=L("Please select at least one flavour"),this.h()},l(u){e=m(u,"P",{class:!0});var a=O(e);s=T(a,"Please select at least one flavour"),a.forEach(t),this.h()},h(){B(e,"class","svelte-1xc69xd")},m(u,a){f(u,e,a),h(e,s)},p:i_,d(u){u&&t(e)}}}function q_(l){let e,s,u,a,E,k,n,d,r,p,v,R,D,F,c,P,z,S,x,$,q,o_,g,Y,U,f_,__,V,w,a_,e_,W,H,c_,l_,X,n_,t_,J,K,p_,r_,m_,Q=l[1],A=[];for(let _=0;_<Q.length;_+=1)A[_]=O_(I_(l,Q,_));let Z=l[6],I=[];for(let _=0;_<Z.length;_+=1)I[_]=S_(A_(l,Z,_));function k_(_,i){return _[3].length===0?j_:_[3].length>_[2]?M_:D_}let s_=k_(l),C=s_(l);return p_=w_(l[11][1]),{c(){e=b("p"),s=L("Todo list:"),u=y(),a=b("header"),E=L("____________________________________________________________________________________________________________________"),k=y(),n=b("input"),d=y(),r=b("button"),p=L("Lägg till"),v=y(),R=b("br"),D=y();for(let _=0;_<A.length;_+=1)A[_].c();F=y(),c=b("h1"),P=L("Do you want to order icecream?"),z=y(),S=b("h7"),x=L("Order some here:"),$=y(),q=b("h2"),o_=L("Size"),g=y(),Y=b("label"),U=b("input"),f_=L(`
	One scoop`),__=y(),V=b("label"),w=b("input"),a_=L(`
	Two scoops`),e_=y(),W=b("label"),H=b("input"),c_=L(`
	Three scoops`),l_=y(),X=b("h2"),n_=L("Flavours"),t_=y();for(let _=0;_<I.length;_+=1)I[_].c();J=y(),C.c(),K=T_(),this.h()},l(_){e=m(_,"P",{class:!0});var i=O(e);s=T(i,"Todo list:"),i.forEach(t),u=N(_),a=m(_,"HEADER",{class:!0});var o=O(a);E=T(o,"____________________________________________________________________________________________________________________"),o.forEach(t),k=N(_),n=m(_,"INPUT",{type:!0,placeholder:!0}),d=N(_),r=m(_,"BUTTON",{class:!0});var M=O(r);p=T(M,"Lägg till"),M.forEach(t),v=N(_),R=m(_,"BR",{}),D=N(_);for(let G=0;G<A.length;G+=1)A[G].l(_);F=N(_),c=m(_,"H1",{class:!0});var d_=O(c);P=T(d_,"Do you want to order icecream?"),d_.forEach(t),z=N(_),S=m(_,"H7",{class:!0});var E_=O(S);x=T(E_,"Order some here:"),E_.forEach(t),$=N(_),q=m(_,"H2",{class:!0});var P_=O(q);o_=T(P_,"Size"),P_.forEach(t),g=N(_),Y=m(_,"LABEL",{});var h_=O(Y);U=m(h_,"INPUT",{type:!0}),f_=T(h_,`
	One scoop`),h_.forEach(t),__=N(_),V=m(_,"LABEL",{});var v_=O(V);w=m(v_,"INPUT",{type:!0}),a_=T(v_,`
	Two scoops`),v_.forEach(t),e_=N(_),W=m(_,"LABEL",{});var b_=O(W);H=m(b_,"INPUT",{type:!0}),c_=T(b_,`
	Three scoops`),b_.forEach(t),l_=N(_),X=m(_,"H2",{class:!0});var L_=O(X);n_=T(L_,"Flavours"),L_.forEach(t),t_=N(_);for(let G=0;G<I.length;G+=1)I[G].l(_);J=N(_),C.l(_),K=T_(),this.h()},h(){B(e,"class","svelte-1xc69xd"),B(a,"class","sträcket_color svelte-1xc69xd"),B(n,"type","text"),B(n,"placeholder","Lägg til en ny todo..."),B(r,"class","knapp_text svelte-1xc69xd"),B(c,"class","order_color svelte-1xc69xd"),B(S,"class","some_here_color svelte-1xc69xd"),B(q,"class","Size svelte-1xc69xd"),B(U,"type","radio"),U.__value=1,U.value=U.__value,B(w,"type","radio"),w.__value=2,w.value=w.__value,B(H,"type","radio"),H.__value=3,H.value=H.__value,B(X,"class","Flavours svelte-1xc69xd"),p_.p(U,w,H)},m(_,i){f(_,e,i),h(e,s),f(_,u,i),f(_,a,i),h(a,E),f(_,k,i),f(_,n,i),y_(n,l[0]),f(_,d,i),f(_,r,i),h(r,p),f(_,v,i),f(_,R,i),f(_,D,i);for(let o=0;o<A.length;o+=1)A[o]&&A[o].m(_,i);f(_,F,i),f(_,c,i),h(c,P),f(_,z,i),f(_,S,i),h(S,x),f(_,$,i),f(_,q,i),h(q,o_),f(_,g,i),f(_,Y,i),h(Y,U),U.checked=U.__value===l[2],h(Y,f_),f(_,__,i),f(_,V,i),h(V,w),w.checked=w.__value===l[2],h(V,a_),f(_,e_,i),f(_,W,i),h(W,H),H.checked=H.__value===l[2],h(W,c_),f(_,l_,i),f(_,X,i),h(X,n_),f(_,t_,i);for(let o=0;o<I.length;o+=1)I[o]&&I[o].m(_,i);f(_,J,i),C.m(_,i),f(_,K,i),r_||(m_=[j(n,"input",l[7]),j(r,"click",l[4]),j(U,"change",l[10]),j(w,"change",l[12]),j(H,"change",l[13])],r_=!0)},p(_,[i]){if(i&1&&n.value!==_[0]&&y_(n,_[0]),i&34){Q=_[1];let o;for(o=0;o<Q.length;o+=1){const M=I_(_,Q,o);A[o]?A[o].p(M,i):(A[o]=O_(M),A[o].c(),A[o].m(F.parentNode,F))}for(;o<A.length;o+=1)A[o].d(1);A.length=Q.length}if(i&4&&(U.checked=U.__value===_[2]),i&4&&(w.checked=w.__value===_[2]),i&4&&(H.checked=H.__value===_[2]),i&72){Z=_[6];let o;for(o=0;o<Z.length;o+=1){const M=A_(_,Z,o);I[o]?I[o].p(M,i):(I[o]=S_(M),I[o].c(),I[o].m(J.parentNode,J))}for(;o<I.length;o+=1)I[o].d(1);I.length=Z.length}s_===(s_=k_(_))&&C?C.p(_,i):(C.d(1),C=s_(_),C&&(C.c(),C.m(K.parentNode,K)))},i:i_,o:i_,d(_){_&&t(e),_&&t(u),_&&t(a),_&&t(k),_&&t(n),_&&t(d),_&&t(r),_&&t(v),_&&t(R),_&&t(D),N_(A,_),_&&t(F),_&&t(c),_&&t(z),_&&t(S),_&&t($),_&&t(q),_&&t(g),_&&t(Y),_&&t(__),_&&t(V),_&&t(e_),_&&t(W),_&&t(l_),_&&t(X),_&&t(t_),N_(I,_),_&&t(J),C.d(_),_&&t(K),p_.r(),r_=!1,H_(m_)}}}function U_(l){return l.length===1?l[0]:`${l.slice(0,-1).join(", ")} and ${l[l.length-1]}`}function Y_(l,e,s){let u="",a=[];function E(){s(1,a=[...a,{text:u,status:!1}]),s(0,u="")}function k(S){a.splice(S,1),s(1,a)}let n=1,d=["Mint choc chip"],r=["Cookies and cream","Mint choc chip","Raspberry ripple"];const p=[[],[]];function v(){u=this.value,s(0,u)}function R(S,x){S[x].status=this.checked,s(1,a)}const D=S=>k(S);function F(){n=this.__value,s(2,n)}function c(){n=this.__value,s(2,n)}function P(){n=this.__value,s(2,n)}function z(){d=z_(p[0],this.__value,this.checked),s(3,d)}return[u,a,n,d,E,k,r,v,R,D,F,p,c,P,z]}class W_ extends C_{constructor(e){super(),F_(this,e,Y_,q_,R_,{})}}export{W_ as default};