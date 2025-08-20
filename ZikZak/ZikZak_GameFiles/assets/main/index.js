System.register("chunks:///_virtual/Forplateform.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
	"use strict";
	var r, i, e, o, n, a, l, s, u, p, f, c, h, m, d, y, g, P;
	return {
		setters: [function(t) {
			r = t.applyDecoratedDescriptor, i = t.inheritsLoose, e = t.initializerDefineProperty, o = t.assertThisInitialized
		}, function(t) {
			n = t.cclegacy, a = t._decorator, l = t.Prefab, s = t.CCInteger, u = t.JsonAsset, p = t.Material, f = t.Node, c = t.math, h = t.MeshRenderer, m = t.randomRangeInt, d = t.instantiate, y = t.Vec3, g = t.v3, P = t.Component
		}],
		execute: function() {
			var b, I, x, v, F, D, N, w, z, A, C, T, M, S, J;
			n._RF.push({}, "277b0ytTYlKtIJin8Tpf1D9", "Forplateform", void 0);
			var R = a.ccclass,
				_ = a.property;
			t("Forplateform", (b = R("Forplateform"), I = _(l), x = _({
				type: s
			}), v = _({
				type: s
			}), F = _({
				type: u
			}), D = _({
				type: p
			}), N = _({
				type: f
			}), b((A = r((z = function(t) {
				function r() {
					for (var r, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
					return r = t.call.apply(t, [this].concat(n)) || this, e(r, "platform", A, o(r)), e(r, "progration", C, o(r)), e(r, "noOfArrayInsideArray", T, o(r)), e(r, "JsonFile", M, o(r)), e(r, "materialColor", S, o(r)), e(r, "startPlatform", J, o(r)), r.platFormcount = 0, r.isTurned = !1, r.prevPlatFpos = g(0, 0, 0), r.dificultyIndex = 0, r.currPlatformNo = 0, r.currPlatformDirNo = 0, r.currDifNumber = 0, r.isIndexMax = !1, r
				}
				i(r, t);
				var n = r.prototype;
				return n.start = function() {
					this.platFormcount = 0, this.dificult = !0, this.materialIndex = c.randomRangeInt(0, 6), this.startPlatform.getComponent(h).material = this.materialColor[this.materialIndex];
					for (var t = 0; t < 50; t++) this.SpawnPlatformGroup()
				}, n.onLoad = function() {}, n.update = function(t) {}, n.SpawnPlatformGroup = function() {
					!this.isIndexMax && this.dificultyIndex >= this.progration.length - 1 && (this.isIndexMax = !0);
					var t = this.progration[this.dificultyIndex],
						r = this.JsonFile.json["Difficulty" + t.toString()];
					this.currPlatformNo >= r[this.currDifNumber].length && (this.isIndexMax ? this.dificultyIndex = this.progration[m(this.progration.length - 4, this.progration.length - 1)] : this.dificultyIndex++, this.currPlatformNo = 0, t = this.progration[this.dificultyIndex], r = this.JsonFile.json["Difficulty" + t.toString()], this.currDifNumber = c.randomRangeInt(0, this.noOfArrayInsideArray));
					var i = r[this.currDifNumber];
					this.currPlatformDirNo >= i[this.currPlatformNo] && (this.currPlatformNo++, this.currPlatformDirNo = 0, this.isTurned ? this.isTurned = !1 : this.isTurned = !0), this.SpawnPlateform(), this.currPlatformDirNo++
				}, n.SpawnPlateform = function() {
					var t = d(this.platform);
					if (t.parent = this.node.parent, this.isTurned) t.setPosition(this.prevPlatFpos.x, 0, this.prevPlatFpos.z - 1);
					else {
						var r = new y(0, 90, 0);
						t.eulerAngles = r, t.setPosition(this.prevPlatFpos.x + 1, 0, this.prevPlatFpos.z)
					}
					t.getComponent(h).material = this.materialColor[this.materialIndex], this.platFormcount++, this.prevPlatFpos = t.position
				}, r
			}(P)).prototype, "platform", [I], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), C = r(z.prototype, "progration", [x], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return []
				}
			}), T = r(z.prototype, "noOfArrayInsideArray", [v], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return 0
				}
			}), M = r(z.prototype, "JsonFile", [F], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), S = r(z.prototype, "materialColor", [D], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return []
				}
			}), J = r(z.prototype, "startPlatform", [N], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), w = z)) || w));
			n._RF.pop()
		}
	}
}));

System.register("chunks:///_virtual/Tutorial.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
	"use strict";
	var e, o, i, n, r, a, c, u, l, s, p, f;
	return {
		setters: [function(t) {
			e = t.applyDecoratedDescriptor, o = t.inheritsLoose, i = t.initializerDefineProperty, n = t.assertThisInitialized
		}, function(t) {
			r = t.cclegacy, a = t._decorator, c = t.AudioSource, u = t.sys, l = t.director, s = t.systemEvent, p = t.SystemEvent, f = t.Component
		}],
		execute: function() {
			var _, y, h, d, v;
			r._RF.push({}, "491234Y7ZhGYaK0MN522onY", "Tutorial", void 0);
			var S = a.ccclass,
				g = a.property;
			t("Tutorial", (_ = S("Tutorial"), y = g({
				type: c
			}), _((v = e((d = function(t) {
				function e() {
					for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
					return e = t.call.apply(t, [this].concat(r)) || this, i(e, "audio_on_button_click", v, n(e)), e.off = !1, e
				}
				o(e, t);
				var r = e.prototype;
				return r.update = function(t) {
					1 == JSON.parse(u.localStorage.getItem("off")) ? this.off = !0 : this.off = !1
				}, r.play = function() {
					u.localStorage.setItem("Learned", 1), 1 == JSON.parse(u.localStorage.getItem("h2p")) ? l.loadScene("MainMenu") : l.loadScene("revive"), 1 == this.off ? this.audio_on_button_click.pause() : this.audio_on_button_click.play()
				}, r.start = function() {
					s.on(p.EventType.TOUCH_START, this.play, this)
				}, e
			}(f)).prototype, "audio_on_button_click", [y], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), h = d)) || h));
			r._RF.pop()
		}
	}
}));

System.register("chunks:///_virtual/migrate-canvas.ts", ["cc"], (function() {
	"use strict";
	var e, n, t, i, r, o, a;
	return {
		setters: [function(c) {
			e = c.cclegacy, n = c.director, t = c.Director, i = c.Canvas, r = c.Camera, o = c.game, a = c.Node
		}],
		execute: function() {
			e._RF.push({}, "4ef05UGu9ZOiZBAPQbryLUA", "migrate-canvas", void 0);
			var c = 1048575;

			function l(e, n) {
				for (var t = 0, i = e.children.length; t < i; t++) e.children[t].layer = n, l(e.children[t], n)
			}
			n.on(t.EVENT_AFTER_SCENE_LAUNCH, (function() {
				var e, t, a, s = null === (e = n.getScene()) || void 0 === e ? void 0 : e.children,
					v = null === (t = n.getScene()) || void 0 === t ? void 0 : t.getComponentsInChildren(i);
				if (!(v.length <= 1)) {
					v = v.filter((function(e) {
						return !!e.cameraComponent
					}));
					var m = null === (a = n.getScene()) || void 0 === a ? void 0 : a.getComponentsInChildren(r),
						u = 0;
					m.forEach((function(e) {
						return u |= e.visibility & c
					}));
					for (var p = [], f = 0, d = s.length; f < d; f++) {
						var C = s[f];
						if (o.isPersistRootNode(C)) {
							var h = C.getComponentsInChildren(i);
							0 !== h.length && p.push.apply(p, h.filter((function(e) {
								return !!e.cameraComponent
							})))
						}
					}
					p.forEach((function(e) {
						if (v.find((function(n) {
								return n !== e && n.cameraComponent.visibility & e.cameraComponent.visibility & c
							}))) {
							var n = ~u,
								t = n & ~(n - 1);
							e.cameraComponent.visibility = t | 4293918720 & e.cameraComponent.visibility, l(e.node, t), u |= n
						}
					}))
				}
			}));
			var s = a.prototype.setParent;

			function v(e) {
				var n = 0,
					t = e.getComponent(i);
				return t && t.cameraComponent ? n = t.cameraComponent.visibility & t.node.layer ? t.node.layer : t.cameraComponent.visibility & ~(t.cameraComponent.visibility - 1) : (e.parent && (n = v(e.parent)), n)
			}
			a.prototype.setParent = function(e, n) {
				if (s.call(this, e, n), e) {
					var t = v(this);
					t && (this.layer = t, l(this, t))
				}
			}, e._RF.pop()
		}
	}
}));

System.register("chunks:///_virtual/BallMovement.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Forplateform.ts"], (function(t) {
	"use strict";
	var e, i, o, n, s, a, l, r, h, u, c, p, m, d, v, f, y, b, g, B, P, C, S;
	return {
		setters: [function(t) {
			e = t.applyDecoratedDescriptor, i = t.inheritsLoose, o = t.initializerDefineProperty, n = t.assertThisInitialized
		}, function(t) {
			s = t.cclegacy, a = t._decorator, l = t.Node, r = t.CCInteger, h = t.AudioSource, u = t.sys, c = t.BoxCollider, p = t.director, m = t.ColliderComponent, d = t.Sprite, v = t.math, f = t.Label, y = t.RigidBody, b = t.systemEvent, g = t.SystemEvent, B = t.Vec3, P = t.v3, C = t.Component
		}, function(t) {
			S = t.Forplateform
		}],
		execute: function() {
			var _, x, R, z, I, w, O, T, N, F, M, k, G, A, D, L, E, H, J, W, q, j, Q, U, V, Z, K, X, Y;
			s._RF.push({}, "765f3TSQk5HuaIO/OaAZ6ru", "BallMovement", void 0);
			var $ = a.ccclass,
				tt = a.property;
			t("BallMovement", (_ = $("BallMovement"), x = tt(S), R = tt(l), z = tt(l), I = tt({
				type: r
			}), w = tt({
				type: r
			}), O = tt({
				type: r
			}), T = tt({
				type: l
			}), N = tt({
				type: h
			}), F = tt({
				type: h
			}), M = tt({
				type: l
			}), k = tt({
				type: l
			}), G = tt({
				type: l
			}), A = tt({
				type: h
			}), _((E = e((L = function(t) {
				function e() {
					for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
					return e = t.call.apply(t, [this].concat(s)) || this, o(e, "platformCreator", E, n(e)), o(e, "onBall", H, n(e)), o(e, "cameraMov", J, n(e)), o(e, "Ballspeed", W, n(e)), o(e, "SpeedInFrequency", q, n(e)), o(e, "HowMuchspeed", j, n(e)), o(e, "circleRot", Q, n(e)), o(e, "audio_on_turn", U, n(e)), o(e, "audio_on_button_click", V, n(e)), o(e, "ScoreINcircle", Z, n(e)), o(e, "scoreOnScreen", K, n(e)), o(e, "revive", X, n(e)), o(e, "BG_audio", Y, n(e)), e.moveInx = !1, e.moveInz = !1, e.collision = !1, e.CamPosOnStart = !1, e.platformFallDelay = !1, e.endPlatformnode = null, e.camTocheck = !1, e.campos = !1, e.ballFall = !1, e.arrayofNode = [], e.ballCurPOs = P(), e.mute = !1, e.timeDisplay = 5, e.timer = 0, e.index4addPlat = 0, e.destroyIndex = 0, e.index4addRigidB = 0, e.destroyTime = 4, e.sptime1 = .1, e.spawnTime = 0, e.sptime = 0, e.delay = .2, e.timer1 = 0, e.camStop = !1, e.afterRevive = !1, e.samedire = !1, e.reviveCount = 0, e.tapstop = !1, e.stoprevive = !1, e.OnetimeRevive = 0, e.countturn = 0, e.RotatePLate = !1, e.NoTRotatePlat = !1, e.platformAngle = P(), e.countRP = 0, e.countNRP = 0, e.afterFallBallcollide = !1, e.ballonstartplat = !1, e.ang = 0, e.score_Count = !1, e.foronetime = 0, e.ballPos = new B, e.ruk = !1, e.sp = 0, e.delay1 = 1, e.revivetime = !1, e.ints = !1, e.change = !1, e.lastballpos = P(), e
				}
				i(e, t);
				var s = e.prototype;
				return s.reviveButton = function() {
					1 == JSON.parse(u.localStorage.getItem("off")) ? (this.BG_audio.pause(), this.mute = !0) : (this.BG_audio.play(), this.mute = !1), this.ballonstartplat ? this.onBall.setPosition(-2, 1.77997, 2) : this.onBall.setPosition(this.ballCurPOs.x, 1.77997, this.ballCurPOs.z), this.node.parent.parent.children.forEach((function(t) {
						"PlatForm" == t.name && (t.getComponent(c).enabled = !0)
					})), this.OnetimeRevive = 1, this.revivetime = !1, this.ruk = !1, u.localStorage.setItem("reviveCount", 1), this.revive.active = !1, this.RotatePLate && (this.samedire = !0), 1 == this.mute ? this.audio_on_button_click.pause() : this.audio_on_button_click.play(), this.stoprevive = !0, this.scoreOnScreen.active = !0, this.timer1 = 0, this.timer = 0, this.timeDisplay = 5, this.ballFall = !1
				}, s.nothanks = function() {
					p.loadScene("Gameover"), 1 == this.mute ? this.audio_on_button_click.pause() : this.audio_on_button_click.play()
          //console.log("On No Thanks GameOver: "+this.score_Count);
				}, s.start = function() {
					1 == JSON.parse(u.localStorage.getItem("off")) ? (this.BG_audio.pause(), this.mute = !0) : (this.BG_audio.play(), this.mute = !1), p.preloadScene("Gameover"), this.OnetimeRevive = 0;
					var t = this.onBall.getComponent(m);
					t.on("onCollisionEnter", this.onCollisionTest, this);
					this.onBall.getComponent(m);
					t.on("onCollisionExit", this.onCollisionTest1, this)
          //console.log("On GameOver: "+this.score_Count);
           
				}, s.onCollisionTest1 = function(t) {
					this.nam = t.otherCollider.node.name
				}, s.onCollisionTest = function(t) {
					var e = this;
					this.nam1 = t.otherCollider.node.name, console.log(this.nam1);
					var i = t.otherCollider.node.eulerAngles.y;
					i != this.ang ? (this.foronetime++, 1 == this.foronetime || this.score(), this.ang = i) : this.score_Count = !1, "PlatForm" == t.otherCollider.node.name ? (this.ballonstartplat = !1, this.afterFallBallcollide = !0) : this.ballonstartplat = !0, this.nextNode = t.otherCollider.node.uuid, this.node.parent.parent.children.forEach((function(t, i, o) {
						t.uuid == e.nextNode && (e.platformAngle = o[i + 1].eulerAngles, 0 == e.platformAngle.y && e.platformAngle.y >= 88 ? e.ballCurPOs = o[i + 2].position : e.ballCurPOs = o[i].position)
					})), 0 == this.platformAngle.y ? (this.countNRP++, this.countRP = 0, this.NoTRotatePlat = !0, this.RotatePLate = !1) : (this.countRP++, this.countNRP = 0, this.RotatePLate = !0, this.NoTRotatePlat = !1), "StartingPlatform" == t.otherCollider.node.name ? this.ballFall = !0 : this.ballFall = !1, this.endPlatformnode = t.otherCollider.node, this.arrayofNode[this.index4addPlat++] = this.endPlatformnode, this.collision = !0, this.camTocheck = !0
				}, s.update = function(t) {
					0 == this.stoprevive && (this.ballPos = this.onBall.getWorldPosition(), this.ballPos.y <= 1.6999 && (this.onBall.setPosition(this.onBall.position.x, this.onBall.position.y - 1.5 * t * this.Ballspeed, this.onBall.position.z), this.node.parent.parent.children.forEach((function(t) {
						"PlatForm" == t.name && (t.getComponent(c).enabled = !1)
					})), this.ballPos.y <= 0 && this.onBall.setPosition(this.onBall.position.x, this.onBall.position.y - 10 * t * this.Ballspeed, this.onBall.position.z), this.ruk = !0, this.audio_on_turn.pause(), this.sp += t, this.sp >= this.delay1 && (this.revivetime = !0, this.sp = 0)), this.revivetime && (1 == JSON.parse(u.localStorage.getItem("reviveCount")) && p.loadScene("Gameover"), 0 == this.OnetimeRevive && (this.BG_audio.pause(), this.revive.active = !0, this.ruk = !0, this.ballFall = !0, this.moveInx = !1, this.moveInz = !1, this.camStop = !0, this.scoreOnScreen.active = !1, this.timer1 <= 5 && (this.timer1 += t, this.circleRot.getComponent(d).fillRange = v.inverseLerp(0, 5, this.timer1)), this.timer -= t, this.timer <= 0 && (this.ScoreINcircle.getComponent(f).string = " " + this.timeDisplay--, this.timeDisplay <= -1 && (this.BG_audio.pause(), p.loadScene("Gameover"), this.timeDisplay = 0), this.timer = 1, this.sptime = 0)))), this.index4addPlat - this.index4addRigidB >= 8 && (this.sptime1 -= t, this.sptime1 <= 0 && (this.arrayofNode[this.index4addRigidB++].addComponent(y), this.arrayofNode[this.index4addRigidB].addComponent(y).fixedRotation = !0, this.platformCreator.SpawnPlatformGroup(), this.sptime1 = .1)), this.index4addRigidB - this.destroyIndex >= 15 && (this.destroyTime -= t, this.destroyTime <= 0 && (this.arrayofNode[this.destroyIndex++].destroy(), this.destroyTime = .2)), this.camTocheck && (this.CamPosOnStart = !1), this.ballmov(t), this.camMove(t), this.campos = !0, this.spawnTime += t, this.spawnTime >= this.SpeedInFrequency && (this.Ballspeed += this.HowMuchspeed, this.spawnTime = 0)
				}, s.score = function() {
					if (this.collision) {
            
						// var t = JSON.parse(u.localStorage.getItem("HighScore"));
             var t = JSON.parse(u.localStorage.getItem("HighScore"));
						
						this.score_Count, this.countturn++, this.countturn >= t && (t = this.countturn), u.localStorage.setItem("HighScore", JSON.stringify(t)), u.localStorage.setItem("count_turn", this.countturn), this.revive.getChildByName("currScore").getComponent(f).string = " " + this.countturn, this.scoreOnScreen.getComponent(f).string = " " + this.countturn
            //console.log(JSON.stringify(t))
          }
				}, s.onLoad = function() {
					b.on(g.EventType.TOUCH_START, this.onTouchStart, this)
				}, s.onTouchStart = function(t) {
					0 == this.ruk && (this.samedire && (this.moveInz = !0, this.samedire = !1), this.stoprevive = !1, this.moveInz ? (this.moveInz = !1, this.moveInx = !0, this.change = !0) : (this.moveInz = !0, this.moveInx = !1, this.change = !1), this.ballFall, 0 == this.revive.active && (1 == this.mute ? this.audio_on_turn.pause() : this.audio_on_turn.play()), this.CamPosOnStart = !0)
				}, s.ballmov = function(t) {
					this.moveInz && this.onBall.setPosition(this.onBall.position.x, this.onBall.position.y, this.onBall.position.z - t * this.Ballspeed), this.moveInx && this.onBall.setPosition(this.onBall.position.x + t * this.Ballspeed, this.onBall.position.y, this.onBall.position.z)
				}, s.camMove = function(t) {
					if (this.lastballpos = this.onBall.getPosition(), 0 == this.ruk || 0 == this.revive.active || this.onBall.position.x != this.lastballpos.x || this.onBall.position.z != this.lastballpos.z) {
						var e = new B(0, 0, 0);
						new B(0, 0, 0);
						if (this.CamPosOnStart && (B.lerp(e, this.cameraMov.position, new B(-10, 15, 10), .01), this.cameraMov.setPosition(e)), this.campos) {
							var i = P(this.cameraMov.position.x, 0, this.cameraMov.position.z),
								o = P(this.onBall.getWorldPosition().x, 0, this.onBall.getWorldPosition().z);
							if (B.distance(i, o) > 10) {
								var n = P();
								B.lerp(n, this.cameraMov.position, P(this.onBall.getWorldPosition().x - 5, this.cameraMov.position.y, 5 - this.onBall.getWorldPosition().x), .6 * t), this.cameraMov.setPosition(n)
							}
						}
					}
				}, e
			}(C)).prototype, "platformCreator", [x], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), H = e(L.prototype, "onBall", [R], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), J = e(L.prototype, "cameraMov", [z], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), W = e(L.prototype, "Ballspeed", [I], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return 5
				}
			}), q = e(L.prototype, "SpeedInFrequency", [w], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return 0
				}
			}), j = e(L.prototype, "HowMuchspeed", [O], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return 0
				}
			}), Q = e(L.prototype, "circleRot", [T], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), U = e(L.prototype, "audio_on_turn", [N], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), V = e(L.prototype, "audio_on_button_click", [F], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), Z = e(L.prototype, "ScoreINcircle", [M], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), K = e(L.prototype, "scoreOnScreen", [k], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), X = e(L.prototype, "revive", [G], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), Y = e(L.prototype, "BG_audio", [A], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), D = L)) || D));
			s._RF.pop()
		}
	}
}));

System.register("chunks:///_virtual/MainMenu.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
	"use strict";
	var t, i, o, n, r, a, u, c, l, s, f, p;
	return {
		setters: [function(e) {
			t = e.applyDecoratedDescriptor, i = e.inheritsLoose, o = e.initializerDefineProperty, n = e.assertThisInitialized
		}, function(e) {
			r = e.cclegacy, a = e._decorator, u = e.Node, c = e.AudioSource, l = e.sys, s = e.Label, f = e.director, p = e.Component
		}],
		execute: function() {
			var m, h, _, b, y, g, d, N, v, S, O, M, w, z, k, I, B, G, H;
			r._RF.push({}, "88d3frTTixNZrnDAwa9+nLH", "MainMenu", void 0);
			var L = a.ccclass,
				D = a.property;
			e("MainMenu", (m = L("MainMenu"), h = D({
				type: u
			}), _ = D({
				type: u
			}), b = D({
				type: u
			}), y = D({
				type: u
			}), g = D({
				type: u
			}), d = D({
				type: u
			}), N = D({
				type: c
			}), v = D({
				type: c
			}), m((M = t((O = function(e) {
				function t() {
					for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
					return t = e.call.apply(e, [this].concat(r)) || this, o(t, "mainMenu", M, n(t)), o(t, "Highscore", w, n(t)), o(t, "musicN", z, n(t)), o(t, "VolumeN", k, n(t)), o(t, "musicOffN", I, n(t)), o(t, "VolumeOffN", B, n(t)), o(t, "audio_on_button_click", G, n(t)), o(t, "BG_audio", H, n(t)), t.off = !1, t
				}
				i(t, e);
				var r = t.prototype;
				return r.onLoad = function() {}, r.start = function() {
					1 == JSON.parse(l.localStorage.getItem("off")) ? (this.musicOffN.active = !0, this.musicN.active = !1, this.BG_audio.pause()) : (this.BG_audio.play(), this.musicOffN.active = !1, this.musicN.active = !0);
					var e = JSON.parse(l.localStorage.getItem("HighScore")).toString();
					this.Highscore.getComponent(s).string = "  " + e
				}, r.update = function(e) {
					1 == JSON.parse(l.localStorage.getItem("off")) ? this.off = !0 : this.off = !1
				}, r.play = function() {
					l.localStorage.setItem("reviveCount", 0), "1" == JSON.parse(l.localStorage.getItem("Learned")) ? f.loadScene("revive") : f.loadScene("Tutorial"), 1 == this.off ? this.audio_on_button_click.pause() : this.audio_on_button_click.play()
				}, r.music = function() {
					this.BG_audio.pause(), this.musicOffN.active = !0, this.musicN.active = !1, this.audio_on_button_click.play(), l.localStorage.setItem("off", !0)
				}, r.musicOff = function() {
					this.BG_audio.play(), this.musicOffN.active = !1, this.musicN.active = !0, this.audio_on_button_click.play(), l.localStorage.setItem("off", !1)
				}, r.homeScreen = function() {
					1 == this.off ? this.audio_on_button_click.pause() : this.audio_on_button_click.play()
				}, t
			}(p)).prototype, "mainMenu", [h], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), w = t(O.prototype, "Highscore", [_], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), z = t(O.prototype, "musicN", [b], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), k = t(O.prototype, "VolumeN", [y], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), I = t(O.prototype, "musicOffN", [g], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), B = t(O.prototype, "VolumeOffN", [d], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), G = t(O.prototype, "audio_on_button_click", [N], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), H = t(O.prototype, "BG_audio", [v], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), S = O)) || S));
			r._RF.pop()
		}
	}
}));

System.register("chunks:///_virtual/H2P.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
	"use strict";
	var o, e, i, r, n, a, c, u, l, s;
	return {
		setters: [function(t) {
			o = t.applyDecoratedDescriptor, e = t.inheritsLoose, i = t.initializerDefineProperty, r = t.assertThisInitialized
		}, function(t) {
			n = t.cclegacy, a = t._decorator, c = t.AudioSource, u = t.sys, l = t.director, s = t.Component
		}],
		execute: function() {
			var p, f, h, _, d;
			n._RF.push({}, "bbeabjh1lhCjYhosM2OgN+h", "H2P", void 0);
			var y = a.ccclass,
				b = a.property;
			t("H2P", (p = y("H2P"), f = b({
				type: c
			}), p((d = o((_ = function(t) {
				function o() {
					for (var o, e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
					return o = t.call.apply(t, [this].concat(n)) || this, i(o, "audio_on_button_click", d, r(o)), o.off = !1, o
				}
				e(o, t);
				var n = o.prototype;
				return n.update = function(t) {
					1 == JSON.parse(u.localStorage.getItem("off")) ? this.off = !0 : this.off = !1
				}, n.play = function() {
					u.localStorage.setItem("h2p", 1), u.localStorage.setItem("reviveCount", 0), l.loadScene("Tutorial"), 1 == this.off ? this.audio_on_button_click.pause() : this.audio_on_button_click.play()
				}, n.start = function() {}, o
			}(s)).prototype, "audio_on_button_click", [f], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), h = _)) || h));
			n._RF.pop()
		}
	}
}));

System.register("chunks:///_virtual/Gameover.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
	"use strict";
	var t, o, n, r, i, a, u, c, l, s, p, _;
	return {
		setters: [function(e) {
			t = e.applyDecoratedDescriptor, o = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
		}, function(e) {
			i = e.cclegacy, a = e._decorator, u = e.Node, c = e.AudioSource, l = e.director, s = e.sys, p = e.Label, _ = e.Component
		}],
		execute: function() {
			var v, m, d, f, h, g, y;
			i._RF.push({}, "ea75b6z/iRJe5ExjVKNTG8U", "Gameover", void 0);
			var b = a.ccclass,
				S = a.property;
			e("Gameover", (v = b("Gameover"), m = S({
				type: u
			}), d = S({
				type: c
			}), v((g = t((h = function(e) {
				function t() {
					for (var t, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
					return t = e.call.apply(e, [this].concat(i)) || this, n(t, "scoreOnGOver", g, r(t)), n(t, "audio_on_button_click", y, r(t)), t.mute = !1, t
				}
				o(t, e);
				var i = t.prototype;
				return i.start = function() {
					l.preloadScene("revive"), l.preloadScene("MainMenu");
					var e = JSON.parse(s.localStorage.getItem("count_turn", "0"));
					this.scoreOnGOver.getComponent(p).string = null == e ? " 0" : " " + e
				}, i.homw = function() {
					s.localStorage.setItem("reviveCount", "0"), s.localStorage.setItem("count_turn", "0"), 1 == this.mute ? this.audio_on_button_click.pause() : this.audio_on_button_click.play(), l.loadScene("MainMenu")
				}, i.replay = function() {
					s.localStorage.setItem("count_turn", "0"), s.localStorage.setItem("reviveCount", "0"), 1 == this.mute ? this.audio_on_button_click.pause() : this.audio_on_button_click.play(), l.loadScene("revive")
				}, i.update = function(e) {
					1 == JSON.parse(s.localStorage.getItem("off")) ? this.mute = !0 : this.mute = !1
				}, t
			}(_)).prototype, "scoreOnGOver", [m], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), y = t(h.prototype, "audio_on_button_click", [d], {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				initializer: function() {
					return null
				}
			}), f = h)) || f));
			i._RF.pop()
		}
	}
}));

System.register("chunks:///_virtual/main", ["./Forplateform.ts", "./Tutorial.ts", "./migrate-canvas.ts", "./BallMovement.ts", "./MainMenu.ts", "./H2P.ts", "./Gameover.ts"], (function() {
	"use strict";
	return {
		setters: [null, null, null, null, null, null, null],
		execute: function() {}
	}
}));

(function(r) {
	r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function(mid, cid) {
	System.register(mid, [cid], function(_export, _context) {
		return {
			setters: [function(_m) {
				var _exportObj = {};

				for (var _key in _m) {
					if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
				}

				_export(_exportObj);
			}],
			execute: function() {}
		};
	});
});