(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{451:function(e,a,t){"use strict";var c=t(41);a.__esModule=!0,a.default=void 0;var l,s=c(t(5)),i=c(t(73)),d=c(t(164)),o=c(t(165)),r=c(t(0)),n=c(t(1)),p=function(e){var a=(0,o.default)({},e);return a.resolutions&&(a.fixed=a.resolutions,delete a.resolutions),a.sizes&&(a.fluid=a.sizes,delete a.sizes),a},u={},f=function(e){var a=p(e),t=a.fluid?a.fluid.src:a.fixed.src;return!!u[t]||(u[t]=!0,!1)},m=[];var h=function(e,a){(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(a){a[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(a[0]),a[1]())})})},{rootMargin:"200px"})),l).observe(e),m.push([e,a])},y=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",c=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+t+"/>":"",l=e.srcSet?'<source srcSet="'+e.srcSet+'" '+t+"/>":"",s=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",r=e.opacity?e.opacity:"1";return"<picture>"+c+l+"<img "+d+o+a+i+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+r+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=r.default.forwardRef(function(e,a){var t=e.style,c=e.onLoad,l=e.onError,s=(0,d.default)(e,["style","onLoad","onError"]);return r.default.createElement("img",(0,o.default)({},s,{onLoad:c,onError:l,ref:a,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))});b.propTypes={style:n.default.object,onError:n.default.func,onLoad:n.default.func};var g=function(e){function a(a){var t;t=e.call(this,a)||this;var c=!0,l=!0,s=!1,d=a.fadeIn,o=f(a);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(c=!1,l=!1,s=!0),"undefined"==typeof window&&(c=!1,l=!1),a.critical&&(c=!0,l=!1,s=!1);var n=!(t.props.critical&&!t.props.fadeIn);return t.state={isVisible:c,imgLoaded:l,IOSupported:s,fadeIn:d,hasNoScript:n,seenBefore:o},t.imageRef=r.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,i.default)((0,i.default)(t))),t.handleRef=t.handleRef.bind((0,i.default)((0,i.default)(t))),t}(0,s.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.handleRef=function(e){var a=this;this.state.IOSupported&&e&&h(e,function(){a.setState({isVisible:!0})})},t.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e,a=p(this.props),t=a.title,c=a.alt,l=a.className,s=a.style,i=void 0===s?{}:s,d=a.imgStyle,n=void 0===d?{}:d,u=a.placeholderStyle,f=void 0===u?{}:u,m=a.fluid,h=a.fixed,g=a.backgroundColor,x=a.Tag;e="boolean"==typeof g?"lightgray":g;var w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,f),_=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n);if(m){var v=m;return r.default.createElement(x,{className:(l||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef},r.default.createElement(x,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&r.default.createElement(b,{alt:c,title:t,src:v.base64,style:w}),v.tracedSVG&&r.default.createElement(b,{alt:c,title:t,src:v.tracedSVG,style:w}),e&&r.default.createElement(x,{title:t,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&r.default.createElement("picture",null,v.srcSetWebp&&r.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),r.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),r.default.createElement(b,{alt:c,title:t,src:v.src,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:c,title:t},v))}}))}if(h){var z=h,k=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete k.display,r.default.createElement(x,{className:(l||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef},z.base64&&r.default.createElement(b,{alt:c,title:t,src:z.base64,style:w}),z.tracedSVG&&r.default.createElement(b,{alt:c,title:t,src:z.tracedSVG,style:w}),e&&r.default.createElement(x,{title:t,style:{backgroundColor:e,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&r.default.createElement("picture",null,z.srcSetWebp&&r.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),r.default.createElement("source",{srcSet:z.srcSet,sizes:z.sizes}),r.default.createElement(b,{alt:c,title:t,width:z.width,height:z.height,src:z.src,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:c,title:t,width:z.width,height:z.height},z))}}))}return null},a}(r.default.Component);g.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var x=n.default.shape({width:n.default.number.isRequired,height:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string}),w=n.default.shape({aspectRatio:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,sizes:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string});g.propTypes={resolutions:x,sizes:w,fixed:x,fluid:w,fadeIn:n.default.bool,title:n.default.string,alt:n.default.string,className:n.default.oneOfType([n.default.string,n.default.object]),critical:n.default.bool,style:n.default.object,imgStyle:n.default.object,placeholderStyle:n.default.object,backgroundColor:n.default.oneOfType([n.default.string,n.default.bool]),onLoad:n.default.func,onError:n.default.func,Tag:n.default.string};var _=g;a.default=_},529:function(e,a,t){"use strict";t(68);var c=t(2),l=t.n(c),s=t(1),i=t.n(s),d=t(0),o=t.n(d),r=t(11),n=t(451),p=t.n(n),u=t(16),f=function(e){console.log("render card",e);var a=e.theme,t=e.data,c=t.title,s=t.subtitle,i=t.slug,d=t.categories,n=t.image;return console.log("ard image",n,i),o.a.createElement("div",{className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},o.a.createElement("li",{key:i,className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},o.a.createElement(u.Link,{to:i,className:"card-link"},o.a.createElement("div",{className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])+" gatsby-image-outer-wrapper"},n&&o.a.createElement(p.a,{fluid:n})),o.a.createElement("h1",{className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},c," ",o.a.createElement(r.d,{className:"arrow"})),o.a.createElement("p",{className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])+" card-meta"},o.a.createElement("span",{className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},o.a.createElement(r.j,{size:18})," ",c),d&&o.a.createElement("span",{className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},d.map(function(e){return o.a.createElement(o.a.Fragment,null," ",o.a.createElement(r.i,{key:e,size:18})," ",e," ")}))),o.a.createElement("p",{className:l.a.dynamic([["666174889",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},s))),o.a.createElement(l.a,{styleId:"666174889",css:[".card-link{width:100%;color:"+a.text.color.primary+";}","li.__jsx-style-dynamic-selector{border:1px solid transparent;border-radius:"+a.size.radius.default+";margin:calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3);padding:"+a.space.inset.s+";position:relative;-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";background:transparent;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper{border-radius:"+a.size.radius.default+";border:1px solid "+a.line.color+";overflow:hidden;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper img{z-index:-1;}","li.__jsx-style-dynamic-selector:after{border-top:1px solid "+a.line.color+';content:"";height:0;position:absolute;bottom:calc('+a.space.default+" * -1.5);left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";width:50%;}","li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{border-top:1px solid "+a.line.color+';content:"";height:0;position:absolute;top:calc('+a.space.default+" * -1.5);left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";width:50%;}","h1.__jsx-style-dynamic-selector{padding:"+a.space.m+" "+a.space.s+" 0;line-height:"+a.blog.h1.lineHeight+";font-size:"+a.blog.h1.size+";}","h1.__jsx-style-dynamic-selector .arrow{display:none;position:relative;top:7px;}",".card-meta.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;font-size:0.8em;padding:"+a.space.m+" "+a.space.s+";background:transparent;}",".card-meta.__jsx-style-dynamic-selector svg{fill:"+a.icon.color+";margin:"+a.space.inline.xs+";}",".card-meta.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;margin:"+a.space.xs+" "+a.space.s+" "+a.space.xs+" 0;}","p.__jsx-style-dynamic-selector{line-height:1.5;padding:0 "+a.space.s+";}",'p.__jsx-style-dynamic-selector:before{display:table;content:"";margin-bottom:-0.25em;}','p.__jsx-style-dynamic-selector:after{display:table;content:"";margin-top:-0.25em;}',"@media screen and (min-width:600px){li.__jsx-style-dynamic-selector{margin:calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4);padding:"+a.space.default+";}li.__jsx-style-dynamic-selector:after{bottom:calc("+a.space.default+" * -2);}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{top:calc("+a.space.default+" * -1.75);}h1.__jsx-style-dynamic-selector{font-size:calc("+a.blog.h1.size+" * 1.2);padding:calc("+a.space.default+" * 1.5) "+a.space.default+" 0;-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.card-meta.__jsx-style-dynamic-selector{padding:calc("+a.space.m+" * 1.5) "+a.space.m+";}p.__jsx-style-dynamic-selector{padding:0 "+a.space.default+";}}","@media screen and (min-width:1024px){li.__jsx-style-dynamic-selector{margin:calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5);padding:0 0 calc("+a.space.default+" * 2);}li.__jsx-style-dynamic-selector:after{bottom:calc("+a.space.default+" * -1.5);}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{top:calc("+a.space.default+" * -2.75);}.blogItemLink:first-child>li.__jsx-style-dynamic-selector:before{top:calc("+a.space.default+" * -2.75);}h1.__jsx-style-dynamic-selector{font-size:2.5em;padding:calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0;}.meta.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5);}p.__jsx-style-dynamic-selector{padding:0 calc("+a.space.default+" * 2);}li.__jsx-style-dynamic-selector:hover{border:1px solid "+a.line.color+";-webkit-box-shadow:0px 3px 2px rgba(0,0,0,.03);box-shadow:0px 3px 2px rgba(0,0,0,.03);}li.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:after{bottom:calc("+a.space.default+" * -2.5);}li.__jsx-style-dynamic-selector:hover .gatsby-image-wrapper{-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}li.__jsx-style-dynamic-selector:hover h1.__jsx-style-dynamic-selector{color:"+a.blog.h1.hoverColor+";}li.__jsx-style-dynamic-selector:hover .arrow{opacity:1;stroke:"+a.color.special.attention+";-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}li.__jsx-style-dynamic-selector .gatsby-image-wrapper{-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";}li.__jsx-style-dynamic-selector .arrow{display:inline-block;fill:"+a.color.special.attention+";stroke:"+a.color.special.attention+";stroke-width:40;stroke-linecap:round;opacity:0;-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}}"],dynamic:[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]}))};f.propTypes={data:i.a.object.isRequired,theme:i.a.object.isRequired};var m=f,h=function(e){var a=e.items,t=e.theme;return o.a.createElement("div",{className:l.a.dynamic([["1445735685",[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]]])},o.a.createElement("div",{className:l.a.dynamic([["1445735685",[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]]])+" profile-list"},o.a.createElement("ul",{className:l.a.dynamic([["1445735685",[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]]])},a.map(function(e){var a=e.slug;return o.a.createElement(m,{key:a,data:e,theme:t})}))),o.a.createElement(l.a,{styleId:"1445735685",css:[".profile-list.__jsx-style-dynamic-selector{padding:0 "+t.space.inset.default+";}","ul.__jsx-style-dynamic-selector{list-style:none;margin:0 auto;padding:calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5);}","@media screen and (min-width:601px){.profile-list.__jsx-style-dynamic-selector{padding:0 0 calc("+t.space.default+" * 1.5);}ul.__jsx-style-dynamic-selector{max-width:"+t.text.maxWidth.tablet+";}}","@media screen and (min-width:1025px){ul.__jsx-style-dynamic-selector{max-width:"+t.text.maxWidth.desktop+";}}"],dynamic:[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]}))};h.propTypes={items:i.a.array.isRequired,theme:i.a.object.isRequired};var y=h;a.a=y}}]);
//# sourceMappingURL=3-45dcbeab575a6a120fb6.js.map