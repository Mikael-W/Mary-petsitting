(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{418:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("ab3ee9c0",content,!0,{sourceMap:!1})},448:function(t,e,n){"use strict";n(418)},449:function(t,e,n){var o=n(85)(!1);o.push([t.i,'.blog-selection_container{text-align:center}.articles-selection_container{width:96vw;display:grid;grid-template-columns:repeat(auto-fill,minmax(20vw,1fr));padding:2vw}h1{font-size:5vw;padding:2vw 0}.link,h1{font-family:"PumpkinStory",sans-serif;color:#fcacdf}.link{font-size:2.5vw;padding:2vw;text-decoration:none}.image,.selection-link{height:30vw}.image{width:25vw;border-radius:2rem}.description{font-family:"poppins",sans-serif;font-size:1vw;padding:1.5vw 0}.more{font-family:"PumpkinStory",sans-serif;text-decoration:none;cursor:pointer;color:#fcacdf;font-size:1.5vw}',""]),t.exports=o},460:function(t,e,n){"use strict";n.r(e);var o={computed:{posts:function(){return this.$store.state.posts}},head:{title:"Mary-petsitting blog"}},l=(n(448),n(39)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-selection_container"},[n("h1",[t._v("Blog")]),t._v(" "),t._l(t.posts,(function(e){return n("article",{key:e.fields.Name,staticClass:"articles-selection_container"},[n("nuxt-link",{attrs:{to:e.fields.slug}},[n("img",{staticClass:"image",attrs:{src:e.fields.heroImage.fields.file.url}})]),t._v(" "),n("h2",{staticClass:"title"},[n("nuxt-link",{staticClass:"link",attrs:{to:e.fields.slug}},[t._v(t._s(e.fields.title))])],1),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        "+t._s(e.fields.description)+"\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"more",attrs:{to:e.fields.slug}},[t._v("En savoir plus ⟶")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);