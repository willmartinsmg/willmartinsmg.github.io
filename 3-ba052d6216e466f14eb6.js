(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(33),o=a.n(s);a.d(t,"a",function(){return o.a});a(156);var c=r.a.createContext({}),m=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t){e.exports={siteUrl:"https://willmartinsmg.github.io/",postsPerPage:12,siteTitleMeta:"William Martins",siteDescriptionMeta:"Meu blog pessoal",siteTwitterHandle:"@willmartinsmg",siteFacebookHandle:"william.martins86",siteGithubHandle:"willmartinsmg",language:"pt-br",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"Blog Pessoal",siteIcon:"favicon.png",backgroundColor:"#e9e9e9",themeColor:"#15171A",cover_image:"",logo:"/images/logo.png",navigation:[{label:"Home",url:"/"},{label:"Sobre mim",url:"/about"}],googleAnalyticsId:"UA-180775069-1",disqusShortname:"willmartinsmg"}},156:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},158:function(e,t,a){"use strict";a(35),a(168),a(34);var n=a(163),r=a(0),i=a.n(r),l=a(4),s=a.n(l),o=a(155),c=a.n(o),m=a(152),p=a(159),g=a.n(p),d=a(153),u=a.n(d),f=(a(169),function(e){var t=e.data,a=e.children,n=e.bodyClass,r=e.isHome,l=u.a,s=u.a.siteTwitterHandle?"https://twitter.com/"+u.a.siteTwitterHandle.replace(/^@/,""):null,o=u.a.siteFacebookHandle?"https://www.facebook.com/"+u.a.siteFacebookHandle.replace(/^\//,""):null,p=u.a.siteGithubHandle?"https://github.com/"+u.a.siteGithubHandle.replace(/^@/,""):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("html",{lang:u.a.language}),i.a.createElement("body",{className:n})),i.a.createElement("div",{className:"viewport"},i.a.createElement("div",{className:"viewport-top"},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-mast"},i.a.createElement("div",{className:r?"site-mast-left":"site-mast-left-flex"},i.a.createElement(m.a,{to:"/"},u.a.logo?i.a.createElement("img",{className:"site-logo",src:u.a.logo,alt:u.a.siteTitleMeta}):i.a.createElement(g.a,{fixed:t.file.childImageSharp.fixed,alt:l.title})),r?null:i.a.createElement("nav",{className:"site-nav"},i.a.createElement("div",{className:"site-nav-left"},i.a.createElement(_,{data:u.a.navigation,navClass:"site-nav-item"})))),i.a.createElement("div",{className:"site-mast-right"},u.a.siteGithubHandle&&i.a.createElement("a",{href:p,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/github.svg",alt:"Github"})),u.a.siteTwitterHandle&&i.a.createElement("a",{href:s,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/twitter.svg",alt:"Twitter"})),u.a.siteFacebookHandle&&i.a.createElement("a",{href:o,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/facebook.svg",alt:"Facebook"})),i.a.createElement("a",{className:"site-nav-item",href:"https://feedly.com/i/subscription/feed/"+u.a.siteUrl+"/rss/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/rss.svg",alt:"RSS Feed"})))),r?i.a.createElement("div",{className:"site-banner"},i.a.createElement("h1",{className:"site-banner-title"},u.a.siteTitleMeta),i.a.createElement("p",{className:"site-banner-desc"},u.a.siteDescriptionMeta)):null,r?i.a.createElement("nav",{className:"site-nav"},i.a.createElement("div",{className:"site-nav-left"},i.a.createElement(_,{data:u.a.navigation,navClass:"site-nav-item"})),i.a.createElement("div",{className:"site-nav-right"})):null)),i.a.createElement("main",{className:"site-main"},a)),i.a.createElement("div",{className:"viewport-bottom"},i.a.createElement("footer",{className:"site-foot"},i.a.createElement("div",{className:"site-foot-nav container"},i.a.createElement("div",{className:"site-foot-nav-left"},i.a.createElement(m.a,{to:"/"},u.a.siteTitleMeta)),i.a.createElement("div",{className:"site-foot-nav-right"},i.a.createElement(_,{data:u.a.navigation,navClass:"site-foot-nav-item"})))))))});f.propTypes={children:s.a.node.isRequired,bodyClass:s.a.string,isHome:s.a.bool};var h=function(e){return i.a.createElement(m.b,{query:"3380264785",render:function(t){return i.a.createElement(f,Object.assign({data:t},e))},data:n})},E=(a(154),a(165)),v=function(e){var t=e.post,a="/"+t.frontmatter.slug+"/",n=Object(E.a)(t);return i.a.createElement(m.a,{to:a,className:"post-card"},i.a.createElement("header",{className:"post-card-header"},t.frontmatter.feature_image&&t.frontmatter.feature_image.childImageSharp&&i.a.createElement(g.a,{fluid:t.frontmatter.feature_image.childImageSharp.fluid,alt:t.frontmatter.title})),i.a.createElement("div",{className:"post-card-content"},t.frontmatter.tags&&i.a.createElement("span",{className:"post-card-tags"},t.frontmatter.tags[0].frontmatter.name),t.frontmatter.featured&&i.a.createElement("span",null,"Featured"),i.a.createElement("h2",{className:"post-card-title"},t.frontmatter.title),i.a.createElement("section",{className:"post-card-excerpt"},t.excerpt),i.a.createElement("footer",{className:"post-card-footer"},i.a.createElement("div",{className:"post-card-footer-left"},i.a.createElement("div",{className:"post-card-avatar"},t.frontmatter.author?i.a.createElement("img",{className:"author-profile-image",src:t.frontmatter.author.frontmatter.profile_image,alt:t.frontmatter.author.frontmatter.name}):i.a.createElement("img",{className:"default-avatar",src:"/images/icons/avatar.svg",alt:t.frontmatter.author.frontmatter.name})),i.a.createElement("span",{className:"post-card-author-name"},t.frontmatter.author.frontmatter.name)),i.a.createElement("div",{className:"post-card-footer-right"},i.a.createElement("div",{className:"post-reading-time"},n)))))};v.propTypes={post:s.a.shape({frontmatter:s.a.object.isRequired}).isRequired};var b=v,w=function(e){var t=e.pageContext,a=t.previousPagePath,n=t.nextPagePath,r=t.humanPageNumber,l=t.numberOfPages;return i.a.createElement("nav",{className:"pagination",role:"navigation"},i.a.createElement("div",null,a&&i.a.createElement(m.a,{to:a,rel:"prev"},"Previous")),l>1&&i.a.createElement("div",{className:"pagination-location"},"Page ",r," of ",l),i.a.createElement("div",null,n&&i.a.createElement(m.a,{to:n,rel:"next"},"Next")))};w.propTypes={pageContext:s.a.object.isRequired};var y=w,N=(a(75),function(e){var t=e.data,a=e.navClass;return i.a.createElement(i.a.Fragment,null,t.map(function(e,t){return e.url.match(/^\s?http(s?)/gi)?i.a.createElement("a",{className:a,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):i.a.createElement(m.a,{className:a,to:e.url,key:t},e.label)}))});N.defaultProps={navClass:"site-nav-item"},N.propTypes={data:s.a.arrayOf(s.a.shape({label:s.a.string.isRequired,url:s.a.string.isRequired}).isRequired).isRequired,navClass:s.a.string};var _=N;a.d(t,"a",function(){return h}),a.d(t,"d",function(){return b}),a.d(t,"c",function(){return y}),a.d(t,"b",function(){return _})},162:function(e,t,a){"use strict";a(154);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=(a(152),a(160)),o=a.n(s),c=a(153),m=a.n(c),p=(a(34),a(155)),g=a.n(p),d=a(157),u=a.n(d),f=function(e){var t=[];return t.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+e.twitter.replace(/^@/,"")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null),t=u.a.compact(t),{name:e.name||null,sameAsArray:t.length?'["'+u.a.join(t,'", "')+'"]':null,image:e.profile_image||null,facebookUrl:e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null}};f.defaultProps={fetchAuthorData:!1},f.PropTypes={primaryAuthor:l.a.shape({name:l.a.string.isRequired,profile_image:l.a.string,website:l.a.string,twitter:l.a.string,facebook:l.a.string}).isRequired};var h=f,E=function(e){var t=e.image;return t?r.a.createElement(g.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:t}),r.a.createElement("meta",{property:"og:image",content:t}),r.a.createElement("meta",{property:"og:image:width",content:m.a.shareImageWidth}),r.a.createElement("meta",{property:"og:image:height",content:m.a.shareImageHeight})):null};E.propTypes={image:l.a.string};var v=E,b=a(165),w=function(e){var t=e.data,a=e.settings,n=e.canonical,i=e.id,l=t;a=m.a;var s=h(l.frontmatter.author.frontmatter),c=u.a.map(Object(b.b)(l,{visibility:"public",fn:function(e){return e}}),"name"),p=c[0]||"",d=l.frontmatter.feature_image?l.frontmatter.feature_image.childImageSharp.fluid.src:u.a.get(m.a,"cover_image",null),f=m.a.siteIcon?o.a.resolve(m.a.siteUrl,m.a.siteIcon):null,E=i;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,l.frontmatter.meta_title||l.frontmatter.title),r.a.createElement("meta",{name:"description",content:l.frontmatter.meta_description||l.excerpt}),r.a.createElement("link",{rel:"canonical",href:n}),r.a.createElement("meta",{property:"og:site_name",content:m.a.title}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:l.frontmatter.og_title||l.frontmatter.meta_title||l.frontmatter.title}),r.a.createElement("meta",{property:"og:description",content:l.frontmatter.og_description||l.frontmatter.meta_description||l.frontmatter.excerpt}),r.a.createElement("meta",{property:"og:url",content:n}),r.a.createElement("meta",{property:"article:published_time",content:l.frontmatter.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:l.frontmatter.updated_at}),c.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}),s.facebookUrl&&r.a.createElement("meta",{property:"article:author",content:s.facebookUrl}),r.a.createElement("meta",{name:"twitter:title",content:l.twitter_title||l.meta_title||l.title}),r.a.createElement("meta",{name:"twitter:description",content:l.twitter_description||l.excerpt||l.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:n}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:s.name}),p&&r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),p&&r.a.createElement("meta",{name:"twitter:data2",content:p}),a.twitter&&r.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&r.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+s.name+'",\n                            '+(s.image?s.sameAsArray?'"image": "'+s.image+'",':'"image": "'+s.image+'"':"")+"\n                            "+(s.sameAsArray?'"sameAs": '+s.sameAsArray:"")+"\n                        },\n                        "+(c.length?'"keywords": "'+u.a.join(c,", ")+'",':"")+'\n                        "headline": "'+(l.frontmatter.meta_title||l.frontmatter.title)+'",\n                        "url": "'+n+'",\n                        "datePublished": "'+l.frontmatter.published_at+'",\n                        "dateModified": "'+l.frontmatter.updated_at+'",\n                        '+(d?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+d+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+f+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "description": "'+(l.frontmatter.meta_description||l.frontmatter.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        }\n                    }\n                '),r.a.createElement("script",{type:"application/javascript"},'console.log("Called"); window.pageId="'+E+'"')),r.a.createElement(v,{image:d}))};w.propTypes={data:l.a.shape({html:l.a.string.isRequired,frontmatter:l.a.object.isRequired,excerpt:l.a.string.isRequired}).isRequired,settings:l.a.shape({allGhostSettings:l.a.object.isRequired}).isRequired,canonical:l.a.string.isRequired};var y=w,N=function(e){var t=e.data,a=e.canonical,n=e.name,i=e.description,l=e.image,s=e.type,c=o.a.resolve(m.a.siteUrl,m.a.siteIcon),p=l||u.a.get(m.a,"cover_image",null);p=p?o.a.resolve(m.a.siteUrl,p):null,i=i||t.meta_description||t.description||m.a.siteDescriptionMeta||m.a.siteDescriptionMeta;var d=n+" - "+m.a.siteTitleMeta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,d),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:m.a.siteTitleMeta}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:d}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:d}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:url",content:a}),m.a.siteTwitterHandle&&r.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+m.a.siteTwitterHandle.replace(/^@/,"")+"/"}),m.a.siteTwitterHandle&&r.a.createElement("meta",{name:"twitter:creator",content:m.a.siteTwitterHandle}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "'+s+'",\n                        "url": "'+a+'",\n                        '+(p?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+p+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+m.a.siteTitleMeta+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+c+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                '),r.a.createElement("script",null,'\n                       if (window.netlifyIdentity) {\n                        window.netlifyIdentity.on("init", user => {\n                          if (!user) {\n                            window.netlifyIdentity.on("login", () => {\n                              document.location.href = "/admin/";\n                            });\n                          }\n                        });\n                      }\n                    \n                ')),r.a.createElement(v,{image:p}))};N.propTypes={data:l.a.shape({title:l.a.string,feature_image:l.a.string,description:l.a.string,bio:l.a.string,profile_image:l.a.string}).isRequired,canonical:l.a.string.isRequired,name:l.a.string,description:l.a.string,image:l.a.string,type:l.a.oneOf(["website","tag"]).isRequired};var _=N,k=function(e){var t=e.data,a=(e.settings,e.canonical),n=h(t),i=n.image||u.a.get(m.a,"cover_image",null),l=t.name+" - "+m.a.siteTitleMeta,s=t.description||m.a.siteDescriptionMeta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,l),r.a.createElement("meta",{name:"description",content:s}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:m.a.siteTitleMeta}),r.a.createElement("meta",{property:"og:type",content:"profile"}),r.a.createElement("meta",{property:"og:title",content:l}),r.a.createElement("meta",{property:"og:description",content:s}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:l}),r.a.createElement("meta",{name:"twitter:description",content:s}),r.a.createElement("meta",{name:"twitter:url",content:a}),m.a.siteTwitterHandle&&r.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+m.a.siteTwitterHandle.replace(/^@/,"")+"/"}),m.a.siteTwitterHandle&&r.a.createElement("meta",{name:"twitter:creator",content:m.a.siteTwitterHandle}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Person",\n                        "name": "'+t.name+'",\n                        '+(n.sameAsArray?'"sameAs": '+n.sameAsArray+",":"")+'\n                        "url": "'+a+'",\n                        '+(i?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+i+'",\n                                "width": "'+m.a.shareImageWidth+'",\n                                "height": "'+m.a.shareImageHeight+'"\n                            },':"")+'\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.a.siteUrl+'"\n                        },\n                        "description": "'+s+'"\n                    }\n                ')),r.a.createElement(v,{image:i}))};k.propTypes={data:l.a.shape({name:l.a.string,bio:l.a.string,profile_image:l.a.string,website:l.a.string,twitter:l.a.string,facebook:l.a.string}).isRequired,settings:l.a.shape({allGhostSettings:l.a.object.isRequired}).isRequired,canonical:l.a.string.isRequired};var T=k,q=function(e){var t=e.data,a=e.name,n=e.description,i=e.image,l=e.location,s=e.type,c=e.id,p=o.a.resolve(m.a.siteUrl,l.pathname,"/"),g=t.ghostPage;return"article"===s?r.a.createElement(y,{data:t.markdownRemark,canonical:p,id:c}):"tag"===s?r.a.createElement(_,{data:t.allMarkdownRemark,canonical:p,name:a,description:n,image:i,type:"tag"}):"author"===s?r.a.createElement(T,{data:t,canonical:p,description:n,image:i,type:"author"}):"page"===s?r.a.createElement(_,{data:g,canonical:p,type:"website"}):(a=a||m.a.siteTitleMeta,n=n||m.a.siteDescriptionMeta,i=(i=i||m.a.cover_image||null)?o.a.resolve(m.a.siteUrl,i):null,r.a.createElement(_,{data:{},canonical:p,name:a,description:n,image:i,type:"website"}))};q.defaultProps={data:{}},q.propTypes={data:l.a.shape({ghostPost:l.a.object,ghostTag:l.a.object,ghostAuthor:l.a.object,ghostPage:l.a.object}).isRequired,location:l.a.shape({pathname:l.a.string.isRequired}).isRequired,title:l.a.string,description:l.a.string,image:l.a.string};var R=q;a.d(t,"a",function(){return R})},163:function(e){e.exports={data:{file:null}}},164:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(56),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=3-ba052d6216e466f14eb6.js.map