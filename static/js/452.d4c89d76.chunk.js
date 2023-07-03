"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[452],{414:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r,o,a=t(9439),l=t(2791),c=t(168),d=t(7691),s=t(6747),p=t(5112),u=(0,d.ZP)(p.Z)(i||(i=(0,c.Z)(["\n  backdrop-filter: blur(2px);\n"]))),x=(0,d.ZP)(s.Z)(r||(r=(0,c.Z)(["\n  padding: 24px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 8px;\n\n  border: 1px solid ",";\n  background: ",";\n  outline: none;\n\n  width: 335px;\n\n  @media screen and (min-width: 768px) {\n    width: 350px;\n  }\n\n  &.filter {\n    width: 300px;\n  }\n\n  &.needHelp {\n    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);\n\n    @media screen and (min-width: 768px) {\n      width: 400px;\n    }\n  }\n\n  &.editProfile {\n    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);\n\n    @media screen and (min-width: 768px) {\n      width: 400px;\n    }\n  }\n"])),(function(n){return n.theme.modal.border}),(function(n){return n.theme.modal.backgroundMain})),h=d.ZP.svg(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  stroke: ",";\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  transition: all 250ms linear;\n\n  &:hover {\n    opacity: 0.8;\n    scale: 1.2;\n  }\n"])),(function(n){return n.theme.modal.iconClose})),m=t(7609),f=t(184),g=function(n){var e=n.children,t=n.name,i=n.open,r=n.closeModal,o=(0,l.useState)(""),c=(0,a.Z)(o,2),d=c[0],s=c[1];return(0,l.useEffect)((function(){!function(n){s("NeedHelp"===n?"needHelp":"Filters"===n?"filter":"EditProfile"===n?"editProfile":"")}(t)}),[t]),(0,f.jsx)("div",{style:{position:"absolute"},children:(0,f.jsx)(u,{open:i,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,f.jsxs)(x,{className:d,children:[(0,f.jsx)(h,{onClick:r,type:"button",children:(0,f.jsx)("use",{href:m.Z+"#icon-x-close",width:18,height:18})}),e]})})})}},452:function(n,e,t){t.r(e),t.d(e,{default:function(){return gt}});var i,r,o,a,l,c,d,s,p,u,x,h,m,f,g,b,y,Z,j,w,v,k,P,_,M,S,z,C,B,D,I,N,T,q,A,F,L,E,O,J,H,G,R,V,Q,U,$,W,X,Y,K,nn,en,tn,rn,on,an,ln,cn,dn,sn,pn,un,xn,hn,mn,fn,gn,bn=t(9434),yn=t(168),Zn=t(7691),jn=Zn.ZP.div(i||(i=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n\n  height: calc(100vh - 60px);\n\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  padding: 14px 20px 0 20px;\n\n  margin-left: ",";\n  transition: all 250ms linear;\n\n  @media screen and (min-width: 768px) {\n    height: calc(100vh - 68px);\n    padding: 26px 32px 0 32px;\n\n    margin-left: ",";\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding: 10px 24px 0 24px;\n    margin-left: 260px;\n  }\n"])),(function(n){return n.bgcUrl}),(function(n){return n.isOpen?"225px":"0"}),(function(n){return n.isOpen?"260px":"0"})),wn=t(3840),vn=t(2624),kn=Zn.ZP.div(r||(r=(0,yn.Z)(["\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n"]))),Pn=Zn.ZP.span(o||(o=(0,yn.Z)(["\n  font-family: Poppins;\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n"])),(function(n){return n.theme.themePopup.textMain})),_n=Zn.ZP.svg(a||(a=(0,yn.Z)(["\n  width: 16px;\n  height: 16px;\n  stroke: ",";\n  transition: all 250ms linear;\n  fill: transparent;\n\n  ",";\n"])),(function(n){return n.theme.themePopup.icon}),(function(n){return n.isOpen&&"transform: rotate(-180deg)"})),Mn=t(7609),Sn=t(184),zn=function(){return(0,Sn.jsxs)(kn,{children:[(0,Sn.jsx)(_n,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-filter"})}),(0,Sn.jsx)(Pn,{children:"Filters"})]})},Cn=Zn.ZP.div(l||(l=(0,yn.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-bottom: 10px;\n"]))),Bn=Zn.ZP.h2(c||(c=(0,yn.Z)(["\n  color: ",";\n  font-size: 18px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: -0.36px;\n"])),(function(n){return n.theme.header.userName})),Dn=function(n){var e=n.children;return(0,Sn.jsxs)(Cn,{children:[(0,Sn.jsx)(Bn,{children:e}),(0,Sn.jsx)(zn,{})]})},In=t(9439),Nn=Zn.ZP.button(d||(d=(0,yn.Z)(["\n  position: absolute;\n  top: 0;\n\n  right: ",";\n  width: 334px;\n  height: 56px;\n  padding: 14px 79px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: 8px;\n  background: ",";\n  outline: none;\n  border: none;\n\n  transition: all 250ms linear;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"])),(function(n){return 0===n.length?"-334px":"-368px"}),(function(n){return n.theme.addColumnButton.background})),Tn=Zn.ZP.div(s||(s=(0,yn.Z)(["\n  width: 28px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background-color: ",";\n\n  transition: all 250ms linear;\n\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.addColumnButton.plusBackground})),qn=Zn.ZP.svg(p||(p=(0,yn.Z)(["\n  width: 14px;\n  height: 14px;\n  stroke: ",";\n"])),(function(n){return n.theme.addColumnButton.plusColor})),An=Zn.ZP.p(u||(u=(0,yn.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  width: 150px;\n"])),(function(n){return n.theme.addColumnButton.color})),Fn=t(6767),Ln=function(n){var e=n.openModal,t=(0,bn.v9)(Fn.Qe);return(0,Sn.jsxs)(Nn,{length:t,onClick:e,type:"button",children:[(0,Sn.jsx)(Tn,{children:(0,Sn.jsx)(qn,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-plus"})})}),(0,Sn.jsx)(An,{children:"Add another column"})]})},En=t(2791),On=t(6235),Jn=Zn.ZP.div(x||(x=(0,yn.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  padding: 14px 20px 14px 24px;\n\n  width: 100%;\n  min-height: 154px;\n  border-radius: 8px;\n  background-color: ",";\n  overflow: hidden;\n  /* border-left: 4px solid rgba(143, 161, 208, 1); */\n\n  opacity: ",";\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 4px;\n    height: 100%;\n\n    background-color: ",";\n    background-color: ",";\n    background-color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.column.backgroundMain}),(function(n){return n.expired?.4:1}),(function(n){return"without"===n.priority&&"rgb(128, 128, 128)"}),(function(n){return"low"===n.priority&&"rgba(143, 161, 208, 1)"}),(function(n){return"medium"===n.priority&&"rgba(224, 156, 181, 1)"}),(function(n){return"high"===n.priority&&"rgba(190, 219, 176, 1)"})),Hn=Zn.ZP.div(h||(h=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Gn=Zn.ZP.h4(m||(m=(0,yn.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-family: 'Poppins';\n  font-weight: 600;\n  letter-spacing: -0.28px;\n  font-size: 14px;\n"])),(function(n){return n.theme.column.textMain})),Rn=Zn.ZP.p(f||(f=(0,yn.Z)(["\n  position: relative;\n  display: flex;\n  color: ",";\n\n  font-size: 12px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.24px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -18px;\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.column.textSecondary}),(function(n){return n.theme.column.borderColor})),Vn=Zn.ZP.div(g||(g=(0,yn.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),Qn=Zn.ZP.div(b||(b=(0,yn.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 14px;\n"]))),Un=Zn.ZP.p(y||(y=(0,yn.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: flex-end;\n  padding-left: 16px;\n  gap: 4px;\n\n  color: ",";\n  font-size: 10px;\n  font-family: 'Poppins';\n  font-weight: 400;\n  letter-spacing: -0.2px;\n\n  &::before {\n    content: 'Priority';\n    position: absolute;\n    left: 0;\n    top: 0px;\n    color: ",";\n    font-size: 8px;\n    font-family: 'Poppins';\n    font-weight: 400;\n    letter-spacing: -0.16px;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 2px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n\n    background-color: ",";\n    background-color: ",";\n    background-color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.column.textMain}),(function(n){return n.theme.column.textSecondary}),(function(n){return"without"===n.priority&&"rgb(128, 128, 128)"}),(function(n){return"low"===n.priority&&"rgba(143, 161, 208, 1)"}),(function(n){return"medium"===n.priority&&"rgba(224, 156, 181, 1)"}),(function(n){return"high"===n.priority&&"rgba(190, 219, 176, 1)"})),$n=Zn.ZP.div(Z||(Z=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  gap: 4px;\n\n  color: ",";\n  font-size: 10px;\n  font-family: 'Poppins';\n  font-weight: 400;\n  letter-spacing: -0.2px;\n\n  &::before {\n    content: 'Deadline';\n    color: ",";\n    font-size: 8px;\n    font-family: 'Poppins';\n    font-weight: 400;\n    letter-spacing: -0.16px;\n  }\n"])),(function(n){return n.theme.column.textMain}),(function(n){return n.theme.column.textSecondary})),Wn=Zn.ZP.div(j||(j=(0,yn.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: end;\n  gap: 8px;\n"]))),Xn=Zn.ZP.svg(w||(w=(0,yn.Z)(["\n  height: 16px;\n  width: 16px;\n  fill: transparent;\n  stroke: ",";\n\n  transition: all 150ms linear;\n  cursor: pointer;\n\n  &:hover {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.column.icon}),(function(n){return n.theme.column.textSecondary})),Yn=Zn.ZP.div(v||(v=(0,yn.Z)(["\n  height: 16px;\n  width: 16px;\n  background-color: rgba(190, 219, 176, 1);\n  filter: blur(5.5px);\n"]))),Kn=Zn.ZP.svg(k||(k=(0,yn.Z)(["\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  stroke: rgba(190, 219, 176, 1);\n  fill: transparent;\n  filter: none;\n  transition: all 150ms linear;\n"]))),ne=Zn.ZP.div(P||(P=(0,yn.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n"]))),ee=Zn.ZP.ul(_||(_=(0,yn.Z)(["\n  position: absolute;\n  bottom: 130%;\n  left: 50%;\n  transform: translateX(-60%);\n  display: inline-flex;\n  min-width: 160px;\n  padding: 18px;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1px solid ",";\n  background: ",";\n  box-shadow: 0px 4px 16px 0px ",";\n  gap: 4px;\n  z-index: 99;\n"])),(function(n){return n.theme.themePopup.border}),(function(n){return n.theme.themePopup.background}),(function(n){return n.theme.themePopup.boxShadow})),te=Zn.ZP.li(M||(M=(0,yn.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  color: ",";\n  stroke: ",";\n  fill: transparent;\n  transition: all 250ms linear;\n\n  &:hover {\n    color: ",";\n    stroke: ",";\n  }\n\n  cursor: pointer;\n"])),(function(n){return n.theme.themePopup.textSecondary}),(function(n){return n.theme.themePopup.textSecondary}),(function(n){return n.theme.themePopup.textAccent}),(function(n){return n.theme.themePopup.textAccent})),ie=Zn.ZP.p(S||(S=(0,yn.Z)(["\n  font-size: 14px;\n  font-family: 'Poppins';\n  font-weight: 400;\n  letter-spacing: -0.28px;\n"]))),re=Zn.ZP.svg(z||(z=(0,yn.Z)(["\n  height: 16px;\n  width: 16px;\n"]))),oe=function(n){var e=n.card,t=(0,bn.I0)(),i=(0,bn.v9)(Fn.eo),r=function(n){var e=n&&n.split("");return e.length<=12?e.join(""):e.splice(0,8).join("")+"..."};return(0,Sn.jsx)(ee,{children:i.map((function(n){return(0,Sn.jsxs)(te,{onClick:function(){return i=e._id,r=n._id,o=e.owner,void t((0,On.xH)({cardId:i,columnId:r,currentOwner:o}));var i,r,o},children:[(0,Sn.jsx)(ie,{children:r(n.title)}),(0,Sn.jsx)(re,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-arrow-circle-broken-right"})})]},n._id)}))})},ae=t(414),le=t(9513),ce=t.n(le),de=(t(8639),t(5705)),se=Zn.ZP.div(C||(C=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n"]))),pe=Zn.ZP.h2(B||(B=(0,yn.Z)(["\n  color: ",";\n  font-size: 18px;\n  font-family: 'Poppins';\n  font-weight: 500;\n  letter-spacing: -0.36px;\n  margin-bottom: 24px;\n"])),(function(n){return n.theme.modal.textMain})),ue=Zn.ZP.div(D||(D=(0,yn.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n\n  margin-bottom: 24px;\n\n  &:last-of-type {\n    margin-bottom: 14px;\n  }\n"]))),xe=(Zn.ZP.label(I||(I=(0,yn.Z)(["\n  width: 100%;\n"]))),(0,Zn.ZP)(de.gN)(N||(N=(0,yn.Z)(["\n  width: 100%;\n  height: 49px;\n  padding: 14px 18px;\n\n  font-size: 14px;\n  font-family: 'Poppins';\n  letter-spacing: -0.28px;\n\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n  outline: none;\n  border-radius: 8px;\n\n  color: ",";\n  transition: all 250ms ease;\n  opacity: 0.4;\n\n  &::placeholder {\n    color: ",";\n    font-size: 14px;\n    font-family: 'Poppins';\n    letter-spacing: -0.28px;\n  }\n\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.modal.backgroundMain}),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.textMain}),(function(n){return n.theme.modal.textMain}))),he=(0,Zn.ZP)(de.gN)(T||(T=(0,yn.Z)(["\n  resize: none;\n  width: 100%;\n  height: 154px;\n  padding: 14px 18px;\n\n  font-size: 14px;\n  font-family: 'Poppins';\n  letter-spacing: -0.28px;\n\n  margin-top: 14px;\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n  outline: none;\n  border-radius: 8px;\n\n  color: ",";\n  transition: all 250ms ease;\n  opacity: 0.4;\n\n  &::placeholder {\n    color: ",";\n    font-size: 14px;\n    font-family: 'Poppins';\n    letter-spacing: -0.28px;\n  }\n\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.modal.backgroundMain}),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.textMain}),(function(n){return n.theme.modal.textMain})),me=Zn.ZP.button(q||(q=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  padding: 14px;\n  border: none;\n  background: ",";\n  border-radius: 8px;\n\n  font-family: 'Poppins';\n  font-size: 14px;\n  font-family: Poppins;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n  color: ",";\n\n  transition: all 150ms linear;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.buttonText})),fe=(0,Zn.ZP)(de.gN)(A||(A=(0,yn.Z)(["\n  appearance: none;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),ge=Zn.ZP.h3(F||(F=(0,yn.Z)(["\n  color: ",";\n  font-size: 12px;\n  font-family: 'Poppins';\n  font-weight: 400;\n  letter-spacing: -0.24px;\n  margin-bottom: 4px;\n"])),(function(n){return n.theme.modal.textSecondary})),be=Zn.ZP.ul(L||(L=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n"]))),ye=Zn.ZP.label(E||(E=(0,yn.Z)(["\n  position: relative;\n  width: 14px;\n  height: 14px;\n  border-radius: 14px;\n\n  cursor: pointer;\n\n  &.active {\n    border: ",";\n    border: ",";\n    border: ",";\n    border: ",";\n  }\n"])),(function(n){return"without"===n.value&&"2px solid rgb(128,128,128)"}),(function(n){return"low"===n.value&&"2px solid rgba(143, 161, 208, 1)"}),(function(n){return"medium"===n.value&&"2px solid rgba(224, 156, 181, 1)"}),(function(n){return"high"===n.value&&"2px solid rgba(190, 219, 176, 1)"})),Ze=Zn.ZP.div(O||(O=(0,yn.Z)(["\n  width: 14px;\n  height: 14px;\n  border-radius: 14px;\n  z-index: 99;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  background-color: ",";\n  background-color: ",";\n  background-color: ",";\n  background-color: ",";\n\n  transition: all 250ms linear;\n\n  &.active {\n    width: 6px;\n    height: 6px;\n  }\n"])),(function(n){return"without"===n.value&&"rgb(128,128,128)"}),(function(n){return"low"===n.value&&"rgba(143, 161, 208, 1)"}),(function(n){return"medium"===n.value&&"rgba(224, 156, 181, 1)"}),(function(n){return"high"===n.value&&"rgba(190, 219, 176, 1)"})),je=Zn.ZP.div(J||(J=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n\n  width: 28px;\n  height: 28px;\n  background-color: ",";\n  margin-right: 8px;\n  padding: 7px;\n"])),(function(n){return n.theme.modal.plusBackground})),we=Zn.ZP.svg(H||(H=(0,yn.Z)(["\n  width: 14px;\n  height: 14px;\n  stroke: ",";\n"])),(function(n){return n.theme.modal.plusColor})),ve=(0,Zn.ZP)(de.Bc)(G||(G=(0,yn.Z)(["\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 18px;\n  font-family: Poppins;\n  font-weight: 500;\n  letter-spacing: -0.36px;\n"]))),ke=(0,Zn.ZP)(de.l0)(R||(R=(0,yn.Z)(["\n  margin: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Pe=Zn.ZP.div(V||(V=(0,yn.Z)(["\n  position: relative;\n  width: 233px;\n\n  .react-datepicker {\n    overflow: hidden;\n\n    margin-top: -28px;\n    border-radius: 8px;\n    border: 1px solid ",";\n\n    background: ",";\n    outline: none;\n    width: 233px;\n    position: absolute;\n    right: -307px;\n    top: -190px;\n\n    &__input-container {\n      appearance: none;\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      margin: -1px;\n      border: 0;\n      padding: 0;\n\n      white-space: nowrap;\n      clip-path: inset(100%);\n      clip: rect(0 0 0 0);\n      overflow: hidden;\n    }\n\n    &__navigation {\n      position: absolute;\n      top: 8px;\n    }\n\n    &__navigation-icon {\n      width: 4px;\n      height: 8px;\n      color: ",";\n    }\n\n    &__month {\n      margin: 0;\n    }\n\n    &__week {\n      color: ",";\n      font-size: 14px;\n      font-family: Poppins;\n      line-height: 18px;\n      letter-spacing: -0.28px;\n\n      &:last-of-type {\n        margin-bottom: 18px;\n      }\n    }\n\n    &__day {\n      width: 24px;\n      height: 24px;\n      color: ",";\n      font-size: 14px;\n      font-family: Poppins;\n      width: 1.5rem;\n\n      transition: all 250ms ease;\n\n      &--today {\n        color: ",";\n        background: ",";\n        border-radius: 50%;\n      }\n\n      &--outside-month {\n        width: 24px;\n        height: 24px;\n        color: ",";\n      }\n\n      &--keyboard-selected {\n        border-radius: 24px;\n        background: ",";\n        color: ",";\n      }\n\n      &:hover {\n        border-radius: 24px;\n        background: ",";\n        color: ",";\n      }\n    }\n\n    &__day--disabled {\n      width: 24px;\n      height: 24px;\n      color: ",";\n    }\n\n    &__day--selected {\n      border-radius: 24px;\n      background: ",";\n      color: ",";\n    }\n\n    &__triangle {\n      display: none;\n    }\n\n    &__header {\n      background-color: ",";\n      width: 231px;\n      border-bottom: none;\n      padding: 18px 18px 14px;\n    }\n\n    &__day-names {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 5px;\n      border-top: 1px solid ",";\n      padding-top: 14px;\n    }\n\n    &__day-name {\n      color: ",";\n      font-size: 14px;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 500;\n      line-height: normal;\n      letter-spacing: -0.28px;\n    }\n\n    &__current-month {\n      color: ",";\n      font-size: 16px;\n      font-family: Poppins;\n      font-weight: 500;\n      letter-spacing: -0.32px;\n      margin-bottom: 14px;\n    }\n  }\n  .react-datepicker__input-container input {\n  }\n"])),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.backgroundMain}),(function(n){return n.theme.modal.textAccent}),(function(n){return n.theme.modal.unactiveDay}),(function(n){return n.theme.modal.textMain}),(function(n){return n.theme.modal.today}),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.unactiveDay}),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.today}),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.today}),(function(n){return n.theme.modal.unactiveDay}),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.today}),(function(n){return n.theme.modal.backgroundMain}),(function(n){return n.theme.modal.unactiveDay}),(function(n){return n.theme.modal.textSecondary}),(function(n){return n.theme.modal.textMain})),_e=Zn.ZP.div(Q||(Q=(0,yn.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-family: Poppins;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n\n  cursor: pointer;\n"])),(function(n){return n.theme.modal.buttonBackground})),Me=t(6727),Se=Me.Ry().shape({title:Me.Z_().required("Title is required!"),description:Me.Z_().max(230,"Name must be at most 230 characters").required("Description is required")}),ze={year:"numeric",month:"2-digit",day:"2-digit"},Ce=["low","medium","high","without"],Be=function(n){var e=n.card,t=n.closeModal,i=(0,bn.I0)(),r=e._id,o=e.title,a=e.deadline,l=e.description,c=e.priority,d=(0,En.useState)(c),s=(0,In.Z)(d,2),p=s[0],u=s[1],x=(0,En.useState)(""),h=(0,In.Z)(x,2),m=h[0],f=h[1],g=""!==m?m.toLocaleString("en-GB",ze):null,b=new Date(a).toLocaleString("en-GB",ze),y={title:o,description:l,priority:p},Z=m;return(0,Sn.jsxs)(se,{children:[(0,Sn.jsx)(pe,{children:"Edit Card"}),(0,Sn.jsx)(de.J9,{initialValues:y,validationSchema:Se,onSubmit:function(n,e){var o=e.resetForm,l=n.title,c=n.description,d=n.priority;""===Z&&(Z=a),i((0,On.B8)({cardId:r,title:l,description:c,priority:d,deadline:Z})),o(),t()},children:(0,Sn.jsxs)(ke,{children:[(0,Sn.jsxs)(ue,{children:[(0,Sn.jsx)(ve,{name:"title",component:"div"}),(0,Sn.jsx)(xe,{type:"text",id:"title",name:"title",placeholder:"Title"}),(0,Sn.jsx)(ve,{name:"description",component:"div"}),(0,Sn.jsx)(he,{component:"textarea",name:"description",id:"description",type:"text",placeholder:"Description"})]}),(0,Sn.jsxs)(ue,{children:[(0,Sn.jsx)(ge,{children:"Icons "}),(0,Sn.jsx)(be,{children:Ce.map((function(n,e){return(0,Sn.jsxs)(ye,{value:n,className:p===n?"active":"",children:[(0,Sn.jsx)(Ze,{onClick:function(){return u(n)},value:n,className:p===n?"active":""}),(0,Sn.jsx)(fe,{type:"radio",value:n,name:"priority"})]},e)}))})]}),(0,Sn.jsxs)(ue,{children:[(0,Sn.jsx)(ge,{children:"Deadline "}),(0,Sn.jsx)(_e,{onClick:function(){return document.querySelector(".input-ref").click()},children:""!==m?g:b}),(0,Sn.jsx)(Pe,{children:(0,Sn.jsx)(ce(),{className:"input-ref",minDate:new Date,timeFormat:"dd/MM/yyyy",selected:m,onChange:function(n){return f(n)}})})]}),(0,Sn.jsxs)(me,{type:"submit",children:[(0,Sn.jsx)(je,{children:(0,Sn.jsx)(we,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-plus"})})}),"Edit"]})]})})]})},De=function(n){var e=n.item,t=(0,bn.I0)(),i=(0,En.useState)(!1),r=(0,In.Z)(i,2),o=r[0],a=r[1],l=(0,En.useRef)(),c=(0,En.useState)(!1),d=(0,In.Z)(c,2),s=d[0],p=d[1],u=function(){return p(!1)},x=e.title,h=e._id,m=e.deadline,f=e.description,g=e.priority,b={year:"numeric",month:"2-digit",day:"2-digit"},y=(new Date).toLocaleString("en-GB",b),Z=new Date(m),j=Z&&Z.toLocaleString("en-GB",b),w=function(n){n.composedPath().includes(l.current)||a(!1)};(0,En.useEffect)((function(){return document.body.addEventListener("click",w),function(){document.body.removeEventListener("click",w)}}),[]);var v=y>j;return(0,Sn.jsxs)(Sn.Fragment,{children:[(0,Sn.jsxs)(Jn,{priority:g,expired:v,children:[(0,Sn.jsxs)(Hn,{children:[(0,Sn.jsx)(Gn,{children:x}),(0,Sn.jsx)(Rn,{children:function(n){var e=n.split("");return e.length<=80?e.join(""):e.splice(0,80).join("")+"..."}(f)})]}),(0,Sn.jsxs)(Vn,{children:[(0,Sn.jsxs)(Qn,{children:[(0,Sn.jsx)(Un,{priority:g,children:g}),(0,Sn.jsx)($n,{children:j})]}),(0,Sn.jsxs)(Wn,{children:[y===j&&(0,Sn.jsxs)(Sn.Fragment,{children:[(0,Sn.jsx)(Kn,{"aria-label":"bell icon",children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-bell"})}),(0,Sn.jsx)(Yn,{})]}),(0,Sn.jsxs)(ne,{children:[(0,Sn.jsx)(Xn,{ref:l,"aria-label":"move card icon",onClick:function(){return a(!o)},children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-arrow-circle-broken-right"})}),o&&(0,Sn.jsx)(oe,{card:e})]}),(0,Sn.jsx)(Xn,{onClick:function(){return p(!0)},"aria-label":"edit icon",children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-pencil"})}),(0,Sn.jsx)(Xn,{"aria-label":"edit icon",onClick:function(){return t((0,On.f1)(h))},children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-trash"})})]})]})]}),(0,Sn.jsx)(ae.Z,{open:s,closeModal:u,children:(0,Sn.jsx)(Be,{card:e,closeModal:u})})]})},Ie=Zn.ZP.div(U||(U=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n"]))),Ne=Zn.ZP.h2($||($=(0,yn.Z)(["\n  color: ",";\n  font-size: 18px;\n  font-family: 'Poppins';\n  font-weight: 500;\n  letter-spacing: -0.36px;\n  margin-bottom: 24px;\n"])),(function(n){return n.theme.modal.textMain})),Te=Zn.ZP.div(W||(W=(0,yn.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n\n  margin-bottom: 24px;\n"]))),qe=(Zn.ZP.label(X||(X=(0,yn.Z)(["\n  width: 100%;\n"]))),(0,Zn.ZP)(de.gN)(Y||(Y=(0,yn.Z)(["\n  width: 100%;\n  height: 49px;\n  padding: 14px 18px;\n\n  font-size: 14px;\n  font-family: 'Poppins';\n  letter-spacing: -0.28px;\n\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n  outline: none;\n  border-radius: 8px;\n\n  color: ",";\n  transition: all 250ms ease;\n  opacity: 0.4;\n\n  &::placeholder {\n    color: ",";\n    font-size: 14px;\n    font-family: 'Poppins';\n    letter-spacing: -0.28px;\n  }\n\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.modal.backgroundMain}),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.textMain}),(function(n){return n.theme.modal.textMain}))),Ae=Zn.ZP.button(K||(K=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  padding: 14px;\n  border: none;\n  background: ",";\n  border-radius: 8px;\n\n  font-family: 'Poppins';\n  font-size: 14px;\n  font-family: Poppins;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n  color: ",";\n\n  transition: all 150ms linear;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.modal.buttonBackground}),(function(n){return n.theme.modal.buttonText})),Fe=Zn.ZP.div(nn||(nn=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n\n  width: 28px;\n  height: 28px;\n  background-color: ",";\n  margin-right: 8px;\n  padding: 7px;\n"])),(function(n){return n.theme.modal.plusBackground})),Le=Zn.ZP.svg(en||(en=(0,yn.Z)(["\n  width: 14px;\n  height: 14px;\n  stroke: ",";\n"])),(function(n){return n.theme.modal.plusColor})),Ee=(0,Zn.ZP)(de.Bc)(tn||(tn=(0,yn.Z)(["\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 18px;\n  font-family: Poppins;\n  font-weight: 500;\n  letter-spacing: -0.36px;\n"]))),Oe=(0,Zn.ZP)(de.l0)(rn||(rn=(0,yn.Z)(["\n  margin: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Je=Me.Ry().shape({title:Me.Z_().required("Title is required")}),He={title:""},Ge=function(n){var e=n.columnId,t=n.closeModal,i=(0,bn.I0)();return(0,Sn.jsxs)(Ie,{children:[(0,Sn.jsx)(Ne,{children:"Edit column"}),(0,Sn.jsx)(de.J9,{initialValues:He,validationSchema:Je,onSubmit:function(n,r){var o=r.resetForm,a=n.title;i((0,On.L9)({columnId:e,title:a})),o(),t()},children:(0,Sn.jsxs)(Oe,{children:[(0,Sn.jsxs)(Te,{children:[(0,Sn.jsx)(Ee,{name:"title",component:"div"}),(0,Sn.jsx)(qe,{type:"text ",id:"text",name:"title",placeholder:"Title "})]}),(0,Sn.jsxs)(Ae,{type:"submit",children:[(0,Sn.jsx)(Fe,{children:(0,Sn.jsx)(Le,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-plus"})})}),"Edit"]})]})})]})},Re=Zn.ZP.div(on||(on=(0,yn.Z)([""]))),Ve=Zn.ZP.div(an||(an=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),Qe=Zn.ZP.div(ln||(ln=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"]))),Ue=Zn.ZP.ul(cn||(cn=(0,yn.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 8px;\n  max-height: calc(154px * 2 + 8px);\n  padding-right: 8px;\n\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 12px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n    background-color: ",";\n  }\n\n  @media screen and (min-height: 780px) {\n    max-height: calc(154px * 3 + 16px);\n  }\n\n  @media screen and (min-height: 942px) {\n    max-height: calc(154px * 4 + 24px);\n  }\n\n  @media screen and (min-height: 1104px) {\n    max-height: calc(154px * 5 + 32px);\n  }\n"])),(function(n){return n.theme.column.scrollTrack}),(function(n){return n.theme.column.scrollBorder}),(function(n){return n.theme.column.scrollThumb})),$e=Zn.ZP.div(dn||(dn=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  width: 334px;\n  height: 56px;\n  padding: 14px 24px;\n\n  border-radius: 8px;\n  background-color: ",";\n  font-weight: 500;\n"])),(function(n){return n.theme.column.backgroundMain})),We=Zn.ZP.h2(sn||(sn=(0,yn.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-family: 'Poppins';\n  font-weight: 500;\n  letter-spacing: -0.28px;\n"])),(function(n){return n.theme.column.textMain})),Xe=Zn.ZP.div(pn||(pn=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]))),Ye=Zn.ZP.svg(un||(un=(0,yn.Z)(["\n  width: 16px;\n  height: 16px;\n  stroke: ",";\n  fill: transparent;\n  cursor: pointer;\n  transition: all 250ms linear;\n\n  &:hover {\n    opacity: 0.4;\n    transform: scale(1.4);\n  }\n"])),(function(n){return n.theme.column.icon})),Ke=Zn.ZP.button(xn||(xn=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 334px;\n  padding: 14px;\n  margin-bottom: 16px;\n\n  font-size: 14px;\n  font-family: 'Poppins';\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  border: none;\n  color: ",";\n  background-color: ",";\n  border-radius: 8px;\n\n  transition: all 250ms linear;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"])),(function(n){return n.theme.column.buttonColor}),(function(n){return n.theme.column.buttonBackground})),nt=Zn.ZP.div(hn||(hn=(0,yn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n\n  width: 28px;\n  height: 28px;\n  background-color: ",";\n  margin-right: 8px;\n  padding: 7px;\n\n  transition: all 250ms linear;\n\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.column.plusBackground})),et=Zn.ZP.svg(mn||(mn=(0,yn.Z)(["\n  width: 14px;\n  height: 14px;\n  stroke: ",";\n"])),(function(n){return n.theme.column.plusColor})),tt=Me.Ry().shape({title:Me.Z_().required("Title is required!"),description:Me.Z_().max(230,"Name must be at most 230 characters").required("Description is required")}),it=["low","medium","high","without"],rt={year:"numeric",month:"2-digit",day:"2-digit"},ot=new Date,at=["January","February","March","April","May","June","July","August","September","October","November","December"][ot.getMonth()],lt=ot.getDate(),ct="".concat(at," ").concat(lt),dt=function(n){var e=n.columnId,t=n.closeModal,i=(0,bn.I0)(),r=(0,En.useState)(it[3]),o=(0,In.Z)(r,2),a=o[0],l=o[1],c=(0,En.useState)(""),d=(0,In.Z)(c,2),s=d[0],p=d[1],u=""!==s?s.toLocaleString("en-GB",rt):null,x={title:"",description:"",priority:a},h=s;return(0,Sn.jsxs)(se,{children:[(0,Sn.jsx)(pe,{children:"Add Card"}),(0,Sn.jsx)(de.J9,{initialValues:x,validationSchema:tt,onSubmit:function(n,r){var o=r.resetForm,a=n.title,l=n.description,c=n.priority;""===h&&(h=(new Date).toISOString()),i((0,On.Z0)({columnId:e,title:a,description:l,priority:c,deadline:h})),o(),t()},children:(0,Sn.jsxs)(ke,{children:[(0,Sn.jsxs)(ue,{children:[(0,Sn.jsx)(ve,{name:"title",component:"div"}),(0,Sn.jsx)(xe,{type:"text",id:"title",name:"title",placeholder:"Title"}),(0,Sn.jsx)(ve,{name:"description",component:"div"}),(0,Sn.jsx)(he,{component:"textarea",name:"description",id:"description",type:"text",placeholder:"Description"})]}),(0,Sn.jsxs)(ue,{children:[(0,Sn.jsx)(ge,{children:"Icons "}),(0,Sn.jsx)(be,{children:it.map((function(n,e){return(0,Sn.jsxs)(ye,{value:n,className:a===n?"active":"",children:[(0,Sn.jsx)(Ze,{onClick:function(){return l(n)},value:n,className:a===n?"active":""}),(0,Sn.jsx)(fe,{type:"radio",value:n,name:"priority"})]},e)}))})]}),(0,Sn.jsxs)(ue,{children:[(0,Sn.jsx)(ge,{children:"Deadline "}),(0,Sn.jsx)(_e,{onClick:function(){return document.querySelector(".input-ref").click()},children:""!==s?u:"Today, ".concat(ct)}),(0,Sn.jsx)(Pe,{children:(0,Sn.jsx)(ce(),{className:"input-ref",minDate:new Date,timeFormat:"dd/MM/yyyy",selected:s,onChange:function(n){return p(n)}})})]}),(0,Sn.jsxs)(me,{type:"submit",children:[(0,Sn.jsx)(je,{children:(0,Sn.jsx)(we,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-plus"})})}),"Create"]})]})})]})},st=function(n){var e=n.item,t=(0,bn.I0)(),i=(0,En.useState)(!1),r=(0,In.Z)(i,2),o=r[0],a=r[1],l=(0,En.useState)(!1),c=(0,In.Z)(l,2),d=c[0],s=c[1],p=function(){return a(!1)},u=function(){return s(!1)};return(0,Sn.jsxs)(Re,{children:[(0,Sn.jsxs)(Qe,{children:[(0,Sn.jsxs)(Ve,{children:[(0,Sn.jsxs)($e,{children:[(0,Sn.jsx)(We,{children:e.title}),(0,Sn.jsxs)(Xe,{children:[(0,Sn.jsx)(Ye,{onClick:function(){return a(!0)},children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-pencil"})}),(0,Sn.jsx)(Ye,{onClick:function(){return t((0,On.eA)(e._id))},children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-trash"})})]})]}),(0,Sn.jsx)(Ue,{children:e.cards&&e.cards.map((function(n){return(0,Sn.jsx)(De,{item:n},n._id)}))})]}),(0,Sn.jsxs)(Ke,{onClick:function(){return s(!0)},children:[(0,Sn.jsx)(nt,{children:(0,Sn.jsx)(et,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-plus"})})}),"Add another card"]})]}),(0,Sn.jsx)(ae.Z,{open:o,closeModal:p,children:(0,Sn.jsx)(Ge,{columnId:e._id,closeModal:p})}),(0,Sn.jsx)(ae.Z,{open:d,closeModal:u,children:(0,Sn.jsx)(dt,{columnId:e._id,closeModal:u})})]})},pt=Zn.ZP.div(fn||(fn=(0,yn.Z)(["\n  display: flex;\n\n  overflow-x: scroll;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 8px;\n\n  ::-webkit-scrollbar {\n    height: 12px;\n    width: calc(100% - 24px);\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 12px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n    background-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    overflow-x: ",";\n  }\n\n  @media screen and (min-width: 1280px) {\n    overflow-x: ",";\n  }\n"])),(function(n){return n.theme.column.scrollTrack}),(function(n){return n.theme.column.scrollBorder}),(function(n){return n.theme.column.scrollThumb}),(function(n){return n.length<2?"hidden":"scroll"}),(function(n){return n.length<3?"hidden":"scroll"})),ut=Zn.ZP.div(gn||(gn=(0,yn.Z)(["\n  position: relative;\n  display: flex;\n  gap: 34px;\n"]))),xt=Me.Ry().shape({title:Me.Z_().required("Title is required")}),ht={title:""},mt=function(n){var e=n.dashboardId,t=n.closeModal,i=(0,bn.I0)(),r=(0,bn.v9)(Fn.eo);return(0,Sn.jsxs)(Ie,{children:[(0,Sn.jsx)(Ne,{children:"Add column"}),(0,Sn.jsx)(de.J9,{initialValues:ht,validationSchema:xt,onSubmit:function(n,o){var a=o.resetForm,l=n.title;if(r.findIndex((function(n){return n.title.toLowerCase()===l.toLowerCase()}))>=0)return"".concat(r.name," is already added to contact list");i((0,On.Wf)({dashboardId:e,title:l})),a(),t()},children:(0,Sn.jsxs)(Oe,{children:[(0,Sn.jsxs)(Te,{children:[(0,Sn.jsx)(Ee,{name:"title",component:"div"}),(0,Sn.jsx)(qe,{type:"text ",id:"text",name:"title",placeholder:"Title "})]}),(0,Sn.jsxs)(Ae,{type:"submit",children:[(0,Sn.jsx)(Fe,{children:(0,Sn.jsx)(Le,{children:(0,Sn.jsx)("use",{href:Mn.Z+"#icon-plus"})})}),"Add"]})]})})]})},ft=function(){var n=(0,bn.v9)(Fn.Qe),e=(0,bn.v9)(Fn.H$),t=(0,bn.v9)(Fn.eo),i=(0,En.useState)(!1),r=(0,In.Z)(i,2),o=r[0],a=r[1],l=function(){return a(!1)};return(0,Sn.jsxs)(pt,{length:n,children:[(0,Sn.jsxs)(ut,{children:[t&&t.map((function(n){return(0,Sn.jsx)(st,{item:n},n._id)})),(0,Sn.jsx)(Ln,{openModal:function(){return a(!0)}})]}),(0,Sn.jsx)(ae.Z,{open:o,closeModal:l,children:(0,Sn.jsx)(mt,{dashboardId:null===e||void 0===e?void 0:e._id,closeModal:l})})]})},gt=function(){var n=(0,bn.I0)(),e=(0,bn.v9)(wn.f),t=(0,bn.v9)((function(n){return n.dashboards.currentBg})),i=(0,bn.v9)((function(n){return n.dashboards.currentName}));return(0,Sn.jsxs)(jn,{onClick:function(){e&&n((0,vn.ve)())},bgcUrl:t,isOpen:e,children:[(0,Sn.jsx)(Dn,{children:i}),(0,Sn.jsx)(ft,{})]})}},6767:function(n,e,t){t.d(e,{H$:function(){return r},Qe:function(){return a},ef:function(){return i},eo:function(){return o}});var i=function(n){return n.dashboards.dashboards},r=function(n){return n.dashboards.currentDashboard.dashboard},o=function(n){return n.dashboards.currentDashboard.columns},a=function(n){return n.dashboards.columnsLength}},3840:function(n,e,t){t.d(e,{f:function(){return i}});var i=function(n){return n.menuMode.isMenuOpen}}}]);
//# sourceMappingURL=452.d4c89d76.chunk.js.map