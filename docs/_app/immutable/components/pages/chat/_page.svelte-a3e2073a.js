import{S as j,i as O,s as B,k as x,q as K,a as T,D as G,l as D,m as A,r as R,h as W,c as S,n as z,E as I,b as Y,N,B as F,M as Q,u as U}from"../../../chunks/index-7bdb04d4.js";import{p as V}from"../../../chunks/parse-f0c618df.js";import{j as P}from"../../../chunks/singletons-b05865fd.js";P.disable_scroll_handling;P.goto;P.invalidate;const J=P.invalidateAll;P.preload_data;P.preload_code;P.before_navigate;P.after_navigate;const X=P.apply_action;function Z(o){const e=JSON.parse(o);return e.data&&(e.data=V(e.data)),e}function ee(o,e=()=>{}){const n=async({action:a,result:r,reset:l})=>{r.type==="success"&&(l!==!1&&HTMLFormElement.prototype.reset.call(o),await J()),(location.origin+location.pathname===a.origin+a.pathname||r.type==="redirect"||r.type==="error")&&X(r)};async function d(a){var v,g,w;a.preventDefault();const r=new URL((v=a.submitter)!=null&&v.hasAttribute("formaction")?a.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(o).action),l=new FormData(o),c=(g=a.submitter)==null?void 0:g.getAttribute("name");c&&l.append(c,((w=a.submitter)==null?void 0:w.getAttribute("value"))??"");const h=new AbortController;let y=!1;const p=await e({action:r,cancel:()=>y=!0,controller:h,data:l,form:o})??n;if(y)return;let s;try{const i=await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:l,signal:h.signal});s=Z(await i.text()),s.type==="error"&&(s.status=i.status)}catch(i){if((i==null?void 0:i.name)==="AbortError")return;s={type:"error",error:i}}p({action:r,data:l,form:o,update:i=>n({action:r,result:s,reset:i==null?void 0:i.reset}),result:s})}return HTMLFormElement.prototype.addEventListener.call(o,"submit",d),{destroy(){HTMLFormElement.prototype.removeEventListener.call(o,"submit",d)}}}var E={};E.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];E.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];E.elizaQuits=["bye","goodbye","done","exit","quit"];E.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];E.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];E.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};E.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];E.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var t=E;function f(o){this.noRandom=!!o,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}f.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var o=0;o<t.elizaKeywords.length;o++){this.lastchoice[o]=[];for(var e=t.elizaKeywords[o][2],n=0;n<e.length;n++)this.lastchoice[o][n]=-1}};f.prototype._dataParsed=!1;f.prototype._init=function(){var o={};if(t.elizaSynons&&typeof t.elizaSynons=="object")for(var e in t.elizaSynons)o[e]="("+e+"|"+t.elizaSynons[e].join("|")+")";(!t.elizaKeywords||typeof t.elizaKeywords.length>"u")&&(t.elizaKeywords=[["###",0,[["###",[]]]]]);for(var n=/@(\S+)/,d=/(\S)\s*\*\s*(\S)/,a=/^\s*\*\s*(\S)/,r=/(\S)\s*\*\s*$/,l=/^\s*\*\s*$/,c=/\s+/g,h=0;h<t.elizaKeywords.length;h++){var y=t.elizaKeywords[h][2];t.elizaKeywords[h][3]=h;for(var e=0;e<y.length;e++){var u=y[e];if(u[0].charAt(0)=="$"){for(var p=1;u[0].charAt[p]==" ";)p++;u[0]=u[0].substring(p),u[2]=!0}else u[2]=!1;for(var s=n.exec(u[0]);s;){var v=o[s[1]]?o[s[1]]:s[1];u[0]=u[0].substring(0,s.index)+v+u[0].substring(s.index+s[0].length),s=n.exec(u[0])}if(l.test(u[0]))u[0]="\\s*(.*)\\s*";else{if(s=d.exec(u[0]),s){for(var g="",w=u[0];s;)g+=w.substring(0,s.index+1),s[1]!=")"&&(g+="\\b"),g+="\\s*(.*)\\s*",s[2]!="("&&s[2]!="\\"&&(g+="\\b"),g+=s[2],w=w.substring(s.index+s[0].length),s=d.exec(w);u[0]=g+w}if(s=a.exec(u[0]),s){var g="\\s*(.*)\\s*";s[1]!=")"&&s[1]!="\\"&&(g+="\\b"),u[0]=g+u[0].substring(s.index-1+s[0].length)}if(s=r.exec(u[0]),s){var g=u[0].substring(0,s.index+1);s[1]!="("&&(g+="\\b"),u[0]=g+"\\s*(.*)\\s*"}}u[0]=u[0].replace(c,"\\s+"),c.lastIndex=0}}if(t.elizaKeywords.sort(this._sortKeywords),f.prototype.pres={},f.prototype.posts={},t.elizaPres&&t.elizaPres.length){for(var i=new Array,e=0;e<t.elizaPres.length;e+=2)i.push(t.elizaPres[e]),f.prototype.pres[t.elizaPres[e]]=t.elizaPres[e+1];f.prototype.preExp=new RegExp("\\b("+i.join("|")+")\\b")}else f.prototype.preExp=/####/,f.prototype.pres["####"]="####";if(t.elizaPosts&&t.elizaPosts.length){for(var i=new Array,e=0;e<t.elizaPosts.length;e+=2)i.push(t.elizaPosts[e]),f.prototype.posts[t.elizaPosts[e]]=t.elizaPosts[e+1];f.prototype.postExp=new RegExp("\\b("+i.join("|")+")\\b")}else f.prototype.postExp=/####/,f.prototype.posts["####"]="####";(!t.elizaQuits||typeof t.elizaQuits.length>"u")&&(t.elizaQuits=[]),f.prototype._dataParsed=!0};f.prototype._sortKeywords=function(o,e){return o[1]>e[1]?-1:o[1]<e[1]||o[3]>e[3]?1:o[3]<e[3]?-1:0};f.prototype.transform=function(o){var e="";this.quit=!1,o=o.toLowerCase(),o=o.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),o=o.replace(/\s+-+\s+/g,"."),o=o.replace(/\s*[,\.\?!;]+\s*/g,"."),o=o.replace(/\s*\bbut\b\s*/g,"."),o=o.replace(/\s{2,}/g," ");for(var n=o.split("."),d=0;d<n.length;d++){var a=n[d];if(a!=""){for(var r=0;r<t.elizaQuits.length;r++)if(t.elizaQuits[r]==a)return this.quit=!0,this.getFinal();var l=this.preExp.exec(a);if(l){for(var c="",h=a;l;)c+=h.substring(0,l.index)+this.pres[l[1]],h=h.substring(l.index+l[0].length),l=this.preExp.exec(h);a=c+h}this.sentence=a;for(var y=0;y<t.elizaKeywords.length;y++)if(a.search(new RegExp("\\b"+t.elizaKeywords[y][0]+"\\b","i"))>=0&&(e=this._execRule(y)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var y=this._getRuleIndexByKey("xnone");y>=0&&(e=this._execRule(y))}return e!=""?e:"I am at a loss for words."};f.prototype._execRule=function(o){for(var e=t.elizaKeywords[o],n=e[2],d=/\(([0-9]+)\)/,a=0;a<n.length;a++){var r=this.sentence.match(n[a][0]);if(r!=null){var l=n[a][1],c=n[a][2],h=this.noRandom?0:Math.floor(Math.random()*l.length);this.noRandom&&this.lastchoice[o][a]>h||this.lastchoice[o][a]==h?(h=++this.lastchoice[o][a],h>=l.length&&(h=0,this.lastchoice[o][a]=-1)):this.lastchoice[o][a]=h;var y=l[h];if(this.debug&&alert(`match:
key: `+t.elizaKeywords[o][0]+`
rank: `+t.elizaKeywords[o][1]+`
decomp: `+n[a][0]+`
reasmb: `+y+`
memflag: `+c),y.search("^goto ","i")==0){var u=this._getRuleIndexByKey(y.substring(5));if(u>=0)return this._execRule(u)}var p=d.exec(y);if(p){for(var s="",v=y;p;){var g=r[parseInt(p[1])],w=this.postExp.exec(g);if(w){for(var i="",m=g;w;)i+=m.substring(0,w.index)+this.posts[w[1]],m=m.substring(w.index+w[0].length),w=this.postExp.exec(m);g=i+m}s+=v.substring(0,p.index)+g,v=v.substring(p.index+p[0].length),p=d.exec(v)}y=s+v}if(y=this._postTransform(y),c)this._memSave(y);else return y}}return""};f.prototype._postTransform=function(o){if(o=o.replace(/\s{2,}/g," "),o=o.replace(/\s+\./g,"."),t.elizaPostTransforms&&t.elizaPostTransforms.length)for(var e=0;e<t.elizaPostTransforms.length;e+=2)o=o.replace(t.elizaPostTransforms[e],t.elizaPostTransforms[e+1]),t.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var n=/^([a-z])/,d=n.exec(o);d&&(o=d[0].toUpperCase()+o.substring(1))}return o};f.prototype._getRuleIndexByKey=function(o){for(var e=0;e<t.elizaKeywords.length;e++)if(t.elizaKeywords[e][0]==o)return e;return-1};f.prototype._memSave=function(o){this.mem.push(o),this.mem.length>this.memSize&&this.mem.shift()};f.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var o=Math.floor(Math.random()*this.mem.length),e=this.mem[o],n=o+1;n<this.mem.length;n++)this.mem[n-1]=this.mem[n];return this.mem.length--,e}else return""};f.prototype.getFinal=function(){return t.elizaFinals?t.elizaFinals[Math.floor(Math.random()*t.elizaFinals.length)]:""};f.prototype.getInitial=function(){return t.elizaInitials?t.elizaInitials[Math.floor(Math.random()*t.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(o){return this[this.length]=o});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var o=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,o});var oe=f;function L(o,e,n){const d=o.slice();return d[4]=e[n],d[6]=n,d}function $(o){let e,n,d=o[0][o[6]].text+"",a,r;return{c(){e=x("article"),n=x("span"),a=K(d),r=T(),this.h()},l(l){e=D(l,"ARTICLE",{class:!0});var c=A(e);n=D(c,"SPAN",{class:!0});var h=A(n);a=R(h,d),h.forEach(W),r=S(c),c.forEach(W),this.h()},h(){z(n,"class","span"),z(e,"class","eliza svelte-1qtvofo")},m(l,c){Y(l,e,c),I(e,n),I(n,a),I(e,r)},p(l,c){c&1&&d!==(d=l[0][l[6]].text+"")&&U(a,d)},d(l){l&&W(e)}}}function te(o){let e,n,d,a,r,l,c,h,y,u,p,s,v,g,w=o[0],i=[];for(let m=0;m<w.length;m+=1)i[m]=$(L(o,w,m));return{c(){e=x("link"),n=x("style"),d=K(`nav {\r
        margin-left: 10%;\r
        margin-right: 10%;\r
      }`),a=T(),r=x("div"),l=x("h1"),c=K("TODO: Complete assignment"),h=T(),y=x("div");for(let m=0;m<i.length;m+=1)i[m].c();u=T(),p=x("form"),s=x("input"),this.h()},l(m){const k=G("svelte-rkiucp",document.head);e=D(k,"LINK",{rel:!0,href:!0}),n=D(k,"STYLE",{});var b=A(n);d=R(b,`nav {\r
        margin-left: 10%;\r
        margin-right: 10%;\r
      }`),b.forEach(W),k.forEach(W),a=S(m),r=D(m,"DIV",{class:!0});var _=A(r);l=D(_,"H1",{class:!0});var C=A(l);c=R(C,"TODO: Complete assignment"),C.forEach(W),h=S(_),y=D(_,"DIV",{class:!0});var M=A(y);for(let H=0;H<i.length;H+=1)i[H].l(M);M.forEach(W),u=S(_),p=D(_,"FORM",{method:!0});var q=A(p);s=D(q,"INPUT",{type:!0,name:!0}),q.forEach(W),_.forEach(W),this.h()},h(){z(e,"rel","stylesheet"),z(e,"href","/pico.min.css"),z(l,"class","rubrik svelte-1qtvofo"),z(y,"class","scrollable svelte-1qtvofo"),z(s,"type","text"),z(s,"name","text"),z(p,"method","post"),z(r,"class","container")},m(m,k){I(document.head,e),I(document.head,n),I(n,d),Y(m,a,k),Y(m,r,k),I(r,l),I(l,c),I(r,h),I(r,y);for(let b=0;b<i.length;b+=1)i[b]&&i[b].m(y,null);I(r,u),I(r,p),I(p,s),v||(g=N(ee.call(null,p,o[2])),v=!0)},p(m,[k]){if(k&1){w=m[0];let b;for(b=0;b<w.length;b+=1){const _=L(m,w,b);i[b]?i[b].p(_,k):(i[b]=$(_),i[b].c(),i[b].m(y,null))}for(;b<i.length;b+=1)i[b].d(1);i.length=w.length}},i:F,o:F,d(m){W(e),W(n),m&&W(a),m&&W(r),Q(i,m),v=!1,g()}}}function ae(o,e,n){let d=new oe,a=[{user:"eliza",text:d.getInitial()}];async function r(c){n(0,a=[...a,{text:c,user:"me"}]),await new Promise(h=>setTimeout(h,1e3+Math.random()*1e3)),n(0,a=[...a,{text:d.transform(c),user:"eliza"}])}return[a,r,({form:c,data:h,action:y,cancel:u})=>{u();const p=h.get("text");r(p)}]}class re extends j{constructor(e){super(),O(this,e,ae,te,B,{})}}export{re as default};
