import{S as I,i as N,s as Q,k as o,q as y,a as u,l as e,m as l,r as b,h as a,c as i,n as H,b as p,E as j,B as J}from"./index-1a61c524.js";function U(z){let t,A,v,d,S,w,r,K=`<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>
   <span class="token keyword">import</span> AudioPlayer<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> stopAll <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./AudioPlayer.svelte'</span>

<span class="token keyword">let</span> audioTracks <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'https://sveltejs.github.io/assets/music/strauss.mp3'</span>
<span class="token punctuation">]</span></code>`,_,m,T,E,c,V=`<code class="language-js"><span class="token operator">&lt;</span>script context<span class="token operator">=</span><span class="token string">"module"</span><span class="token operator">></span>
    <span class="token keyword">const</span> players <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">stopAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      players<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=></span> p<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span>
  
    <span class="token keyword">export</span> <span class="token keyword">let</span> src
    
    <span class="token keyword">let</span> player
  
    <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// Like players.push(player)</span>
      players<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>audio
          <span class="token literal-property property">bind</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token operator">=</span><span class="token punctuation">&#123;</span>player<span class="token punctuation">&#125;</span>
          <span class="token punctuation">&#123;</span>src<span class="token punctuation">&#125;</span>
          controls<span class="token operator">></span>
          <span class="token operator">&lt;</span>track kind<span class="token operator">=</span><span class="token string">"captions"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>audio<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></code>`,h,f,M,x,g,D,P,k,B=`<code class="language-js">
<span class="token punctuation">&#123;</span>#each audioTracks <span class="token keyword">as</span> src<span class="token punctuation">&#125;</span>
  <span class="token operator">&lt;</span>AudioPlayer <span class="token punctuation">&#123;</span>src<span class="token punctuation">&#125;</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">&#123;</span><span class="token operator">/</span>each<span class="token punctuation">&#125;</span>


<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"slide"</span><span class="token operator">></span>Rose<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token punctuation">.</span>slide <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 4rem<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> 8rem<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">249</span><span class="token punctuation">,</span> <span class="token number">245</span><span class="token punctuation">,</span> <span class="token number">248</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		border<span class="token operator">-</span>color<span class="token operator">:</span> #f2a5df<span class="token punctuation">;</span>
		<span class="token literal-property property">color</span><span class="token operator">:</span> #ebbfe5<span class="token punctuation">;</span>
		font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
		background<span class="token operator">-</span>image<span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> #ef96c4 <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> transparent <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		background<span class="token operator">-</span>position<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		background<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">400</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">transition</span><span class="token operator">:</span> background 300ms ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token punctuation">.</span>slide<span class="token operator">:</span>hover <span class="token punctuation">&#123;</span>
		background<span class="token operator">-</span>position<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">162</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span></code>`;return{c(){t=o("h1"),A=y("Vad jag gjorde i Onsdags"),v=u(),d=o("p"),S=y(`Det första jag gjorde var att lägga in musik till min blog, allltså en adio player. Koden tog jag från sveltes hemsida.
Jag importerade en Adiuplayer och sedan tog jag en musik länk och lade in den i en lista.
Se koden nedan.`),w=u(),r=o("pre"),_=u(),m=o("p"),T=y(`Efter det skapade jag en ny Adioplayer fil som jag lade under routes.
Se koden nedan jag lade in`),E=u(),c=o("pre"),h=u(),f=o("p"),M=y("Det sista jag gjorde var att lägga in koden nedan utanför script."),x=u(),g=o("p"),D=y(`Sen lade jag in en button class som gör att när musen åker över kommer en ny button över den gamla.
Jag tog koden från sveltes hemsida, från deras exempel.`),P=u(),k=o("pre"),this.h()},l(s){t=e(s,"H1",{});var n=l(t);A=b(n,"Vad jag gjorde i Onsdags"),n.forEach(a),v=i(s),d=e(s,"P",{});var L=l(d);S=b(L,`Det första jag gjorde var att lägga in musik till min blog, allltså en adio player. Koden tog jag från sveltes hemsida.
Jag importerade en Adiuplayer och sedan tog jag en musik länk och lade in den i en lista.
Se koden nedan.`),L.forEach(a),w=i(s),r=e(s,"PRE",{class:!0});var C=l(r);C.forEach(a),_=i(s),m=e(s,"P",{});var R=l(m);T=b(R,`Efter det skapade jag en ny Adioplayer fil som jag lade under routes.
Se koden nedan jag lade in`),R.forEach(a),E=i(s),c=e(s,"PRE",{class:!0});var F=l(c);F.forEach(a),h=i(s),f=e(s,"P",{});var O=l(f);M=b(O,"Det sista jag gjorde var att lägga in koden nedan utanför script."),O.forEach(a),x=i(s),g=e(s,"P",{});var q=l(g);D=b(q,`Sen lade jag in en button class som gör att när musen åker över kommer en ny button över den gamla.
Jag tog koden från sveltes hemsida, från deras exempel.`),q.forEach(a),P=i(s),k=e(s,"PRE",{class:!0});var G=l(k);G.forEach(a),this.h()},h(){H(r,"class","language-js"),H(c,"class","language-js"),H(k,"class","language-js")},m(s,n){p(s,t,n),j(t,A),p(s,v,n),p(s,d,n),j(d,S),p(s,w,n),p(s,r,n),r.innerHTML=K,p(s,_,n),p(s,m,n),j(m,T),p(s,E,n),p(s,c,n),c.innerHTML=V,p(s,h,n),p(s,f,n),j(f,M),p(s,x,n),p(s,g,n),j(g,D),p(s,P,n),p(s,k,n),k.innerHTML=B},p:J,i:J,o:J,d(s){s&&a(t),s&&a(v),s&&a(d),s&&a(w),s&&a(r),s&&a(_),s&&a(m),s&&a(E),s&&a(c),s&&a(h),s&&a(f),s&&a(x),s&&a(g),s&&a(P),s&&a(k)}}}const X={title:"Onsdag",date:"2022-01-25"};class Y extends I{constructor(t){super(),N(this,t,null,U,Q,{})}}export{Y as default,X as metadata};
