webpackJsonp([1],{"/HlT":function(e,t){},"64cA":function(e,t){},FraS:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("router-link",{attrs:{to:{name:"AddMovie"}}},[this._v("movie")]),this._v(" "),t("router-link",{attrs:{to:{name:"AddActor"}}},[this._v("actor")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"App"},r,!1,function(e){o("/HlT")},null,null).exports,n=o("/ocq"),i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  yes sir\n")])},staticRenderFns:[]};var c=o("VU/8")({},i,!1,function(e){o("FraS")},"data-v-a407b176",null).exports,l=o("Dd8w"),v=o.n(l),d=o("NYxO"),u={name:"AddMovie",computed:v()({},Object(d.d)("actors",{allActors:"actors"}),Object(d.c)("actors",{selectedActors:"selectedActros"}),Object(d.c)("movies",{lastId:"lastId"})),created:function(){0==this.AllActors.length&&this.AllActors(),this.AllMovies()},methods:v()({},Object(d.b)("movies",["AddMovie","AllMovies"]),Object(d.b)("actors",["AllActors"]),{addMovie:function(e){console.log(e),0!=this.SelectedActors(this.selectedActors,this.allActors).length?this.AddMovie(this.select(e)):this.AddMovie(e)},SelectedActors:function(e,t){for(var o=[],s=0;s<e.length;s++)if(1==e[s].selected)for(var r=0;r<t.length;r++)e[s].id==t[r].actorId&&o.push(t[r]);return o},select:function(e){for(var t=this.SelectedActors(this.selectedActors,this.allActors),o=0;o<t.length;o++)e.movieActors.push({actorId:t[o].actorId,movieId:this.lastId+1});return e}}),data:function(){return{movie:{title:"",releasYear:"",genre:"",movieActors:[]}}}},m={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Title")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.title,expression:"movie.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.movie.title},on:{input:function(t){t.target.composing||e.$set(e.movie,"title",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("Releas Year")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.releasYear,expression:"movie.releasYear"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.movie.releasYear},on:{input:function(t){t.target.composing||e.$set(e.movie,"releasYear",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("div",{staticClass:"input-group mb-3"},[e._m(0),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.movie.genre,expression:"movie.genre"}],staticClass:"custom-select",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.movie,"genre",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"None"}},[e._v("None")]),e._v(" "),o("option",{attrs:{value:"Action"}},[e._v("Action")]),e._v(" "),o("option",{attrs:{value:"Fantasy"}},[e._v("Fantasy")]),e._v(" "),o("option",{attrs:{value:"Drama"}},[e._v("Drama")])])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("h2",[e._v("Actors")]),e._v(" "),e._l(e.selectedActors,function(t,s){return o("div",{key:s},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"actor.selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:function(o){var s=t.selected,r=o.target,a=!!r.checked;if(Array.isArray(s)){var n=e._i(s,null);r.checked?n<0&&e.$set(t,"selected",s.concat([null])):n>-1&&e.$set(t,"selected",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(t,"selected",a)}}}),e._v(" "),o("label",{attrs:{for:"checkbox"}},[e._v(e._s(t.name))])])})],2),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-danger",on:{click:function(t){return e.addMovie(e.movie)}}},[e._v("submit")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("label",{staticClass:"input-group-text"},[this._v("Genre")])])}]};var p=o("VU/8")(u,m,!1,function(e){o("Y7h1")},null,null).exports,h={name:"AddActor",created:function(){0==this.allMovies.length&&this.AllMovies(),this.AllActors()},computed:v()({},Object(d.d)("movies",{allMovies:"movies"}),Object(d.c)("movies",{selectedMovies:"selectedMovies"}),Object(d.c)("actors",{lastId:"lastId"})),data:function(){return{actor:{name:"",age:"",movieActors:[]}}},methods:v()({},Object(d.b)("actors",["AddActor","AllActors"]),Object(d.b)("movies",["AllMovies"]),{addActor:function(e){console.log(e),0!=this.SelectedMovies(this.selectedMovies,this.allMovies).length?this.AddActor(this.select(e)):this.AddActor(e)},SelectedMovies:function(e,t){for(var o=[],s=0;s<e.length;s++)if(1==e[s].selected)for(var r=0;r<t.length;r++)e[s].id==t[r].movieId&&o.push(t[r]);return o},select:function(e){for(var t=this.SelectedMovies(this.selectedMovies,this.allMovies),o=0;o<t.length;o++)e.movieActors.push({actorId:this.lastId+1,movieId:t[o].movieId});return e}})},f={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.actor.name,expression:"actor.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.actor.name},on:{input:function(t){t.target.composing||e.$set(e.actor,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("Age")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.actor.age,expression:"actor.age"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.actor.age},on:{input:function(t){t.target.composing||e.$set(e.actor,"age",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("h2",[e._v("Movies")]),e._v(" "),e._l(e.selectedMovies,function(t,s){return o("div",{key:s},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"movie.selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:function(o){var s=t.selected,r=o.target,a=!!r.checked;if(Array.isArray(s)){var n=e._i(s,null);r.checked?n<0&&e.$set(t,"selected",s.concat([null])):n>-1&&e.$set(t,"selected",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(t,"selected",a)}}}),e._v(" "),o("label",{attrs:{for:"checkbox"}},[e._v(e._s(t.title))])])})],2),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-danger",on:{click:function(t){return e.addActor(e.actor)}}},[e._v("\n      submit\n    ")])])])},staticRenderFns:[]};var A=o("VU/8")(h,f,!1,function(e){o("64cA")},null,null).exports;s.a.use(n.a);var g=new n.a({mode:"history",routes:[{path:"/",name:"MovieDb",component:c},{path:"/addmovie",name:"AddMovie",component:p},{path:"/addactor",name:"AddActor",component:A}]}),_=o("mtWM"),b=o.n(_),M={namespaced:!0,state:{movies:[],showMovies:[]},actions:{AddMovie:function(e,t){var o=e.dispatch;b.a.post("https://localhost:5001/api/movies",t).then(function(){return o("AllMovies")})},AllMovies:function(e){var t=e.commit;b.a.get("https://localhost:5001/api/movies").then(function(e){return t("allMovies",e.data)})},ShowMovies:function(e){var t=e.commit;b.a.get("").then(function(e){return t("ShowMovies",e.data)})}},getters:{lastId:function(e){return e.movies[e.movies.length-1].movieId},selectedMovies:function(e){return e.movies.map(function(e){return{id:e.movieId,title:e.title,releasYear:e.releasYear,genre:e.genre,selected:!1}})}},mutations:{allMovies:function(e,t){e.movies=t},addMovie:function(e,t){e.movies.push(t)},ShowMovies:function(e,t){e.showMovies=t}}},y={namespaced:!0,state:{actors:[]},actions:{AddActor:function(e,t){var o=e.dispatch;b.a.post("https://localhost:5001/api/actors",t).then(function(){return o("AllActors")})},AllActors:function(e){var t=e.commit;b.a.get("https://localhost:5001/api/actors").then(function(e){return t("allActors",e.data)})}},mutations:{allActors:function(e,t){e.actors=t}},getters:{selectedActros:function(e){return e.actors.map(function(e){return{id:e.actorId,name:e.name,age:e.age,selected:!1}})},lastId:function(e){return e.actors[e.actors.length-1].actorId}}};s.a.use(d.a);var I=new d.a.Store({modules:{movies:M,actors:y}});s.a.config.productionTip=!1,new s.a({render:function(e){return e(a)},router:g,store:I}).$mount("#app")},Y7h1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a6524750d2059f9f822d.js.map