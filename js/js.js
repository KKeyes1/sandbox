((c)=>{
	let $ = c.getContext('2d'),
		w = c.width = window.innerWidth,
		h = c.height = window.innerHeight,
		opts = {
			amount: Math.floor((Math.random() * 100) + 1),
			distance: 5,
			radius: 5,
			height: Math.floor((Math.random() * 100) + 40),
			span: Math.PI*Math.floor((Math.random() * 10) + 1)
		},
		width = opts.amount*(opts.radius*2+opts.distance),
		arr = new Array(opts.amount).fill().map((el,ind)=>{
			return {
				a: opts.span/opts.amount*ind,
				x: (opts.radius*2+opts.distance)*ind,
				c: "hsl(th, 75%, 55%)"
			}
		})
	function loop(){
		$.fillStyle = "#222";
		$.fillRect(0,0,w,h);
		arr.forEach(el=>{
			el.a+= Math.PI/180*4;
			$.beginPath();
			$.arc(el.x - width/2 + w/2, Math.sin(el.a)*opts.height + h/2, opts.radius, 0, Math.PI*2);
			$.closePath();
			$.fillStyle=el.c.replace("th", el.a*20);
			$.fill();
		})
		requestAnimationFrame(loop);
	}
	loop();
})(c)

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 355,
			"density": {
				"enable": true,
				"value_area": 789.1476416322727
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.48927153781200905,
			"random": false,
			"anim": {
				"enable": true,
				"speed": 0.2,
				"opacity_min": 0,
				"sync": false
			}
		},
		"size": {
			"value": 2,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 2,
				"size_min": 0,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 0.2,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 83.91608391608392,
				"size": 1,
				"duration": 3,
				"opacity": 1,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});