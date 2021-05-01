define(["exports"],function(t){"use strict";function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function t(t,i){for(var e=0;e<i.length;e++){var h=i[e];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}return function(i,e,h){return e&&t(i.prototype,e),h&&t(i,h),i}}(),h={src:"",width:document.body.offsetWidth,height:document.body.offsetHeight,imgSize:void 0,filter:function(t,i,e,h){return!0},x:void 0,y:void 0,r:.5,cols:150,rows:150,mouseRange:60,disperse:5,recovery:.95},s=function(){function t(e,s){i(this,t),Object.assign(this,h,s),this.canvas=document.getElementById(e),this.cxt=this.canvas.getContext("2d"),this.particles=[],this.isAnimate=!0,this.init()}return e(t,[{key:"init",value:function(){this.setSize(),this.setImage(this.src)}},{key:"destory",value:function(){this.cxt.clearRect(0,0,this.width,this.height),this.particles.length=0,this.stop()}},{key:"bindEvent",value:function(){this.canvas.addEventListener("mousemove",this.getMousePos.bind(this))}},{key:"getMousePos",value:function(t){this.mx=t.clientX-this.bounds.left,this.my=t.clientY-this.bounds.top}},{key:"setSize",value:function(){this.canvas.width=this.width,this.canvas.height=this.height}},{key:"setImage",value:function(t){var i=this;this.img=new Image,this.img.onload=function(){i.imgSize?(i.img_width=i.imgSize[0],i.img_height=i.imgSize[1],i.x=i.x||(i.width-i.img_width)/2,i.y=i.y||(i.height-i.img_height)/2,i.cxt.drawImage(i.img,i.x,i.y,i.img_width,i.img_height)):(i.img_width=i.img.width,i.img_height=i.img.height,i.x=i.x||(i.width-i.img_width)/2,i.y=i.y||(i.height-i.img_height)/2,i.cxt.drawImage(i.img,i.x,i.y)),i.getParticle(),i.bounds=i.canvas.getBoundingClientRect(),i.bindEvent()},this.img.src=t}},{key:"getParticle",value:function(){for(var t=this.getImageData(),i=parseInt(this.img_width/this.cols),e=parseInt(this.img_height/this.rows),h=0,s=1;s<=this.cols;s++)for(var n=1;n<=this.rows;n++)if(h=n*e*this.img_width+s*i,t[h]&&this.filter&&this.filter.apply(this,t[h])){var a=this.x+s*i+(Math.random()-.5)*this.disperse,o=this.y+n*e+(Math.random()-.5)*this.disperse,r={x:a,y:o,ox:a,oy:o,vx:0,vy:0,color:t[h].join(",")};this.particles.push(r)}this.start()}},{key:"getImageData",value:function(){var t=this.cxt.getImageData(this.x,this.y,this.img_width,this.img_height),i=t.data,e=t.data.length,h=[];t.width!==this.img_width&&(this.img_width=t.width),t.height!==this.img_height&&(this.img_height=t.height);for(var s=0;s<e/4;s++)h.push([i[4*s],i[4*s+1],i[4*s+2],i[4*s+3]]);return h}},{key:"start",value:function(){var t=this;this.isAnimate=!0;var i=function e(){return!!t.isAnimate&&(t.render(),t.update(),void requestAnimationFrame(e))};requestAnimationFrame(i)}},{key:"stop",value:function(){this.isAnimate=!1}},{key:"render",value:function(){var t=this;this.cxt.clearRect(0,0,this.width,this.height),Array.from(this.particles,function(i){t.cxt.fillStyle="rgba("+i.color+")",t.cxt.beginPath(),t.cxt.arc(i.x,i.y,t.r,0,2*Math.PI,!0),t.cxt.closePath(),t.cxt.fill()})}},{key:"update",value:function(){var t=this,i=Math.pow(this.mouseRange,2),e=null,h=void 0,s=void 0,n=void 0,a=void 0,o=void 0,r=void 0;Array.from(this.particles,function(c){e=c,h=t.mx-e.x,s=t.my-e.y,n=h*h+s*s,r=Math.sqrt(n),o=-i/n,r<i&&(a=Math.atan2(s,h),e.vx+=o*Math.cos(a),e.vy+=o*Math.sin(a)),e.vx*=t.recovery,e.vy*=t.recovery,e.x+=e.vx+.25*(e.ox-e.x),e.y+=e.vy+.25*(e.oy-e.y)})}}]),t}();t["default"]=s});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmluZSIsImV4cG9ydHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2RlZmF1bHQiLCJzcmMiLCJ3aWR0aCIsImRvY3VtZW50IiwiYm9keSIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW1nU2l6ZSIsInVuZGVmaW5lZCIsImZpbHRlciIsInIiLCJnIiwiYiIsImEiLCJ4IiwieSIsImNvbHMiLCJyb3dzIiwibW91c2VSYW5nZSIsImRpc3BlcnNlIiwicmVjb3ZlcnkiLCJQYXJ0aWNsZSIsImlkIiwib3B0aW9uIiwidGhpcyIsImFzc2lnbiIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3h0IiwiZ2V0Q29udGV4dCIsInBhcnRpY2xlcyIsImlzQW5pbWF0ZSIsImluaXQiLCJzZXRTaXplIiwic2V0SW1hZ2UiLCJjbGVhclJlY3QiLCJzdG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldE1vdXNlUG9zIiwiYmluZCIsImUiLCJteCIsImNsaWVudFgiLCJib3VuZHMiLCJsZWZ0IiwibXkiLCJjbGllbnRZIiwidG9wIiwiX3RoaXMiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImltZ193aWR0aCIsImltZ19oZWlnaHQiLCJkcmF3SW1hZ2UiLCJnZXRQYXJ0aWNsZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJpbmRFdmVudCIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInNfd2lkdGgiLCJwYXJzZUludCIsInNfaGVpZ2h0IiwicG9zIiwiaiIsImFwcGx5IiwiTWF0aCIsInJhbmRvbSIsInBhcnRpY2xlIiwib3giLCJveSIsInZ4IiwidnkiLCJjb2xvciIsImpvaW4iLCJwdXNoIiwic3RhcnQiLCJkYXRhIiwibGVuIiwiYXJyIiwiX3RoaXMyIiwic3RlcCIsInJlbmRlciIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzMyIsIkFycmF5IiwiZnJvbSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsIl90aGlzNCIsInJhbmdlIiwicG93IiwicCIsImR4IiwiZHkiLCJkIiwidCIsImYiLCJkaXN0YW5jZSIsInNxcnQiLCJhdGFuMiIsImNvcyIsInNpbiJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsV0FBWSxTQUFVQyxHQUE5QixZQU9DLFNBQVNDLEdBQWdCQyxFQUFVQyxHQUNsQyxLQUFNRCxZQUFvQkMsSUFDekIsS0FBTSxJQUFJQyxXQUFVLHFDQU50QkMsT0FBT0MsZUFBZU4sRUFBUyxjQUM5Qk8sT0FBTyxHQVNSLElBQUlDLEdBQWUsV0FDbEIsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQ2pDLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQ3RDLEdBQUlFLEdBQWFILEVBQU1DLEVBQ3ZCRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQ2pERCxFQUFXRSxjQUFlLEVBQ3RCLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FDakRaLE9BQU9DLGVBQWVJLEVBQVFJLEVBQVdJLElBQUtKLElBSWhELE1BQU8sVUFBVVgsRUFBYWdCLEVBQVlDLEdBR3pDLE1BRklELElBQVlWLEVBQWlCTixFQUFZa0IsVUFBV0YsR0FDcERDLEdBQWFYLEVBQWlCTixFQUFhaUIsR0FDeENqQixNQXpCSm1CLEdBQ0xDLElBQUssR0FDTEMsTUFBT0MsU0FBU0MsS0FBS0MsWUFDckJDLE9BQVFILFNB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S3VDLE1BQU1OLEVBQUlELEdBQ25CRCxFQUFFMUIsSUFBTStCLEVBQUlwQyxLQUFLd0MsSUFBSUwsR0FDckJKLEVBQUV6QixJQUFNOEIsRUFBSXBDLEtBQUt5QyxJQUFJTixJQUd0QkosRUFBRTFCLElBQU11QixFQUFLMUUsU0FDYjZFLEVBQUV6QixJQUFNc0IsRUFBSzFFLFNBR2I2RSxFQUFFbkYsR0FBS21GLEVBQUUxQixHQUFvQixLQUFkMEIsRUFBRTVCLEdBQUs0QixFQUFFbkYsR0FDeEJtRixFQUFFbEYsR0FBS2tGLEVBQUV6QixHQUFvQixLQUFkeUIsRUFBRTNCLEdBQUsyQixFQUFFbEYsU0EyRWxCTSxJQUdSNUMsR0FBQUEsV0EzT29CNEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IF9kZWZhdWx0ID0ge1xuXHRzcmM6ICcnLCAvL+WbvueJh+i3r+W+hFxuXHR3aWR0aDogZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgLy9jYW52YXPnmoTlrr3luqbvvIzpu5jorqTnqpflj6Plrr3luqZcblx0aGVpZ2h0OiBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgLy9jYW52YXPnmoTpq5jluqbvvIzpu5jorqTnqpflj6Ppq5jluqZcblx0aW1nU2l6ZTogdW5kZWZpbmVkLCAvL+WbvueJh+eahOWkp+WwjyBbd2lkdGgsIGhlaWdodF3vvIzpu5jorqTljp/lp4vlpKflsI9cblx0ZmlsdGVyOiBmdW5jdGlvbihyLCBnLCBiLCBhKSB7ICAvL+i/h+a7pOaWueazlVxuXHRcdHJldHVybiB0cnVlXG5cdH0sXG5cdHg6IHVuZGVmaW5lZCwgLy/lm77lg4/lnKhjYW52YXPkuK3nmoR45Z2Q5qCH77yM6buY6K6k5bGF5LitXG5cdHk6IHVuZGVmaW5lZCwgLy/lm77lg4/lnKhjYW52YXPkuK3nmoR55Z2Q5qCH77yM6buY6K6k5bGF5LitXG5cdHI6IDAuNSwgIC8v57KS5a2Q5Y2K5b6EXG5cdGNvbHM6IDE1MCwgLy/lm77lg4/liIbkuLrlh6DliJfvvIzmqKrlnZDmoIfnu4bluqZcblx0cm93czogMTUwLCAvL+WbvuWDj+WIhuS4uuWHoOihjO+8jOe6teWdkOagh+e7huW6plxuXHRtb3VzZVJhbmdlOiA2MCwgIC8v5b2x5ZON6IyD5Zu0XG5cdGRpc3BlcnNlOiA1LCAvL+eykuWtkOWBj+enu+iMg+WbtFxuXHRyZWNvdmVyeTogMC45NSAgLy/mgaLlpI3pgJ/luqbvvIzotorlsI/otorlv6vvvIwx5pe25LiN5oGi5aSNXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIHtcblx0Y29uc3RydWN0b3IoaWQsIG9wdGlvbikge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgX2RlZmF1bHQsIG9wdGlvbilcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXHRcdHRoaXMuY3h0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXHRcdHRoaXMucGFydGljbGVzID0gW11cblx0XHR0aGlzLmlzQW5pbWF0ZSA9IHRydWVcblx0XHR0aGlzLmluaXQoKVxuXHR9XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5zZXRTaXplKClcblx0XHR0aGlzLnNldEltYWdlKHRoaXMuc3JjKVxuXHR9XG5cdGRlc3RvcnkoKSB7XG5cdFx0dGhpcy5jeHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXHRcdHRoaXMucGFydGljbGVzLmxlbmd0aCA9IDBcblx0XHR0aGlzLnN0b3AoKVxuXHR9XG5cdGJpbmRFdmVudCgpIHtcblx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmdldE1vdXNlUG9zLmJpbmQodGhpcykpXG5cdH1cblx0Z2V0TW91c2VQb3MoZSkge1xuXHQgICAgdGhpcy5teCA9IGUuY2xpZW50WCAtIHRoaXMuYm91bmRzLmxlZnQ7XG5cdFx0dGhpcy5teSA9IGUuY2xpZW50WSAtIHRoaXMuYm91bmRzLnRvcDtcblx0fVxuXHRzZXRTaXplKCkge1xuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aFxuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0XG5cdH1cblx0c2V0SW1hZ2Uoc3JjKSB7XG5cdFx0dGhpcy5pbWcgPSBuZXcgSW1hZ2UoKVxuXHRcdHRoaXMuaW1nLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdGlmICghdGhpcy5pbWdTaXplKSB7XG5cdFx0XHRcdHRoaXMuaW1nX3dpZHRoID0gdGhpcy5pbWcud2lkdGhcblx0XHRcdFx0dGhpcy5pbWdfaGVpZ2h0ID0gdGhpcy5pbWcuaGVpZ2h0XG5cdFx0XHRcdHRoaXMueCA9IHRoaXMueCB8fCAoKHRoaXMud2lkdGggLSB0aGlzLmltZ193aWR0aCkgLyAyKVxuXHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgfHwgKCh0aGlzLmhlaWdodCAtIHRoaXMuaW1nX2hlaWdodCkgLyAyKVxuXHRcdFx0XHR0aGlzLmN4dC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbWdfd2lkdGggPSB0aGlzLmltZ1NpemVbMF1cblx0XHRcdFx0dGhpcy5pbWdfaGVpZ2h0ID0gdGhpcy5pbWdTaXplWzFdXG5cdFx0XHRcdHRoaXMueCA9IHRoaXMueCB8fCAoKHRoaXMud2lkdGggLSB0aGlzLmltZ193aWR0aCkgLyAyKVxuXHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgfHwgKCh0aGlzLmhlaWdodCAtIHRoaXMuaW1nX2hlaWdodCkgLyAyKVxuXHRcdFx0XHR0aGlzLmN4dC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmltZ193aWR0aCwgdGhpcy5pbWdfaGVpZ2h0KVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5nZXRQYXJ0aWNsZSgpXG5cdFx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdFx0XHR0aGlzLmJpbmRFdmVudCgpXG5cdFx0fVxuXHRcdHRoaXMuaW1nLnNyYyA9IHNyY1xuXHR9XG5cdGdldFBhcnRpY2xlKCkge1xuXHRcdGxldCBpbWFnZURhdGEgPSB0aGlzLmdldEltYWdlRGF0YSgpXG5cdFx0bGV0IHNfd2lkdGggPSBwYXJzZUludCgodGhpcy5pbWdfd2lkdGgpIC8gdGhpcy5jb2xzKVxuXHRcdGxldCBzX2hlaWdodCA9IHBhcnNlSW50KHRoaXMuaW1nX2hlaWdodCAvIHRoaXMucm93cylcblx0XHRsZXQgcG9zID0gMFxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuY29sczsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8PSB0aGlzLnJvd3M7IGorKykge1xuXHRcdFx0XHRwb3MgPSAoaiAqIHNfaGVpZ2h0KSAqICh0aGlzLmltZ193aWR0aCkgKyAoaSAqIHNfd2lkdGgpXG5cdFx0XHRcdGlmIChpbWFnZURhdGFbcG9zXSAmJiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5hcHBseSh0aGlzLCBpbWFnZURhdGFbcG9zXSkpIHtcblx0XHRcdFx0XHRsZXQgeCA9IHRoaXMueCArIGkgKiBzX3dpZHRoICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogdGhpcy5kaXNwZXJzZVxuXHRcdFx0XHRcdGxldCB5ID0gdGhpcy55ICsgaiAqIHNfaGVpZ2h0ICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogdGhpcy5kaXNwZXJzZVxuXHRcdFx0XHRcdGxldCBwYXJ0aWNsZSA9IHtcblx0XHRcdFx0XHRcdHg6IHgsXG5cdFx0XHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRcdFx0b3g6IHgsXG5cdFx0XHRcdFx0XHRveTogeSxcblx0XHRcdFx0XHRcdHZ4OiAwLFxuXHRcdFx0XHRcdFx0dnk6IDAsXG5cdFx0XHRcdFx0XHRjb2xvcjogaW1hZ2VEYXRhW3Bvc10uam9pbignLCcpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zdGFydCgpXG5cdH1cblx0Z2V0SW1hZ2VEYXRhKCkge1xuXHRcdGxldCBpbWFnZURhdGEgPSB0aGlzLmN4dC5nZXRJbWFnZURhdGEodGhpcy54LCB0aGlzLnksIHRoaXMuaW1nX3dpZHRoLCB0aGlzLmltZ19oZWlnaHQpXG5cdFx0bGV0IGRhdGEgPSBpbWFnZURhdGEuZGF0YVxuXHRcdGxldCBsZW4gPSBpbWFnZURhdGEuZGF0YS5sZW5ndGhcblx0XHRsZXQgYXJyID0gW11cblx0XHQvL+i/t+S5i+S4jeebuOetie+8n1xuXHRcdGlmIChpbWFnZURhdGEud2lkdGggIT09IHRoaXMuaW1nX3dpZHRoKSB0aGlzLmltZ193aWR0aCA9IGltYWdlRGF0YS53aWR0aFxuXHRcdGlmIChpbWFnZURhdGEuaGVpZ2h0ICE9PSB0aGlzLmltZ19oZWlnaHQpIHRoaXMuaW1nX2hlaWdodCA9IGltYWdlRGF0YS5oZWlnaHRcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAvIDQ7IGkrKykge1xuXHRcdFx0YXJyLnB1c2goW2RhdGFbaSAqIDRdLCBkYXRhW2kgKiA0ICsgMV0sIGRhdGFbaSAqIDQgKyAyXSwgZGF0YVtpICogNCArIDNdXSlcblx0XHR9XG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMuaXNBbmltYXRlID0gdHJ1ZVxuXHRcdGNvbnN0IHN0ZXAgPSAoKSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMuaXNBbmltYXRlKSByZXR1cm4gZmFsc2Vcblx0XHRcdHRoaXMucmVuZGVyKClcblx0XHRcdHRoaXMudXBkYXRlKClcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblx0XHR9XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXHR9XG5cdHN0b3AoKSB7XG5cdFx0dGhpcy5pc0FuaW1hdGUgPSBmYWxzZVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR0aGlzLmN4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cblx0XHQvLyDnprvlsY/muLLmn5Ncblx0XHQvLyBsZXQgY2FudmFzT2Zmc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0Ly8gY2FudmFzT2Zmc2NyZWVuLndpZHRoID0gdGhpcy53aWR0aFxuXHRcdC8vIGNhbnZhc09mZnNjcmVlbi5oZWlnaHQgPSB0aGlzLmhlaWdodFxuXHRcdC8vIGxldCBjeHQgPSBjYW52YXNPZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKVxuXG5cdFx0Ly8gQXJyYXkuZnJvbSh0aGlzLnBhcnRpY2xlcywgKHBhcnRpY2xlKSA9PiB7XG5cdFx0Ly8gXHRjeHQuZmlsbFN0eWxlID0gJ3JnYmEoJyArIHBhcnRpY2xlLmNvbG9yICsgJyknXG5cblx0XHQvLyBcdGN4dC5iZWdpblBhdGgoKVxuXHRcdC8vIFx0Y3h0LmFyYyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55LCB0aGlzLnIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKVxuXHRcdC8vIFx0Y3h0LmNsb3NlUGF0aCgpXG5cblx0XHQvLyBcdGN4dC5maWxsKClcblx0XHQvLyB9KVxuXG5cdFx0Ly8gdGhpcy5jeHQuZHJhd0ltYWdlKGNhbnZhc09mZnNjcmVlbiwgMCwgMCk7XG5cblx0XHQvLyDmma7pgJrmuLLmn5Ncblx0XHRBcnJheS5mcm9tKHRoaXMucGFydGljbGVzLCAocGFydGljbGUpID0+IHtcblx0XHRcdHRoaXMuY3h0LmZpbGxTdHlsZSA9ICdyZ2JhKCcgKyBwYXJ0aWNsZS5jb2xvciArICcpJ1xuXG5cdFx0XHR0aGlzLmN4dC5iZWdpblBhdGgoKVxuXHRcdFx0dGhpcy5jeHQuYXJjKHBhcnRpY2xlLngsIHBhcnRpY2xlLnksIHRoaXMuciwgMCwgMiAqIE1hdGguUEksIHRydWUpXG5cdFx0XHR0aGlzLmN4dC5jbG9zZVBhdGgoKVxuXG5cdFx0XHR0aGlzLmN4dC5maWxsKClcblx0XHR9KVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRsZXQgcmFuZ2UgPSBNYXRoLnBvdyh0aGlzLm1vdXNlUmFuZ2UsIDIpICAvLyAg5L2c55So6IyD5Zu055qE5bmz5pa5XG5cdFx0bGV0IHAgPSBudWxsLFxuXHRcdFx0ZHgsIGR5LCBkLCB0LCBmLCBkaXN0YW5jZVxuXHRcdEFycmF5LmZyb20odGhpcy5wYXJ0aWNsZXMsIChwYXJ0aWNsZSkgPT4ge1xuXHRcdFx0cCA9IHBhcnRpY2xlXG5cdFx0XHRkeCA9IHRoaXMubXggLSBwLnhcblx0XHRcdGR5ID0gdGhpcy5teSAtIHAueVxuXHRcdFx0ZCA9IGR4ICogZHggKyBkeSAqIGR5XG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguc3FydChkKSAvLyAg6byg5qCH5Yiw57KS5a2Q55qE6Led56a7XG5cdFx0XHRmID0gLXJhbmdlIC8gZCAvLyDkvZznlKjojIPlm7TkuI7ot53nprvmr5Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IHJhbmdlKSB7XG5cdFx0XHRcdHQgPSBNYXRoLmF0YW4yKGR5LCBkeCkgIC8vICDojrflvpfop5LluqZcblx0XHRcdFx0cC52eCArPSBmICogTWF0aC5jb3ModCkgLy8g5qC55o2u5rC05bmz5Yqg6YCf5bqmXG5cdFx0XHRcdHAudnkgKz0gZiAqIE1hdGguc2luKHQpIC8vIOagueaNruWeguebtOWKoOmAn+W6plxuXHRcdFx0fVxuXHRcdFx0Ly8gIOWKoOmAn+W6puihsOWHj1xuXHRcdFx0cC52eCAqPSB0aGlzLnJlY292ZXJ5XG5cdFx0XHRwLnZ5ICo9IHRoaXMucmVjb3ZlcnlcblxuXHRcdFx0Ly8gIOaBouWkjeiHs+WOn+Wni+S9jee9rlxuXHRcdFx0cC54ICs9IHAudnggKyAocC5veCAtIHAueCkgKiAwLjI1XG5cdFx0XHRwLnkgKz0gcC52eSArIChwLm95IC0gcC55KSAqIDAuMjVcblx0XHR9KVxuXHR9XG59OyJdfQ==
