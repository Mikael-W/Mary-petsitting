(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{459:function(t,e,n){"use strict";n.r(e);n(40);var r={data:function(){return{slug:this.$route.params.slug}},computed:{post:function(){var t=this,e=this.$store.state.posts.filter((function(e){return e.fields.slug===t.slug}));return e[0]}},head:function(){return{title:this.post.fields.title}}},l=n(39),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("p",{staticClass:"back"},[n("nuxt-link",{attrs:{to:"/blog"}},[t._v("⟵ Back to Home")])],1),t._v(" "),n("h1",[t._v(t._s(t.post.fields.title))]),t._v(" "),n("div",{staticClass:"image",style:"background: url(https:"+t.post.fields.heroImage.fields.file.url+") center center no-repeat"}),t._v(" "),n("article",{domProps:{innerHTML:t._s(t.$md.render(t.post.fields.body))}})])}),[],!1,null,null,null);e.default=component.exports}}]);