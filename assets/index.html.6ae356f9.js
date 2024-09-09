import{_ as a,o as e,c as i,e as r}from"./app.cc3919a2.js";const t={},d=r('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>公钥基础设施（Public Key Infrastructure，简称PKI）是采用非对称密码算法和技术，来实现和提供安全服务，并具有通用性的安全基础设施，是一种遵循既定标准的密钥管理平台。它能够透明地为所有网络应用提供采用加密和数字签名等密码服务所必需的密钥和证书管理。PKI体系实际上就是计算机软硬件、权威机构及应用系统的结合。它采用数字证书的形式管理公钥，通过CA把用户的公钥和用户的其他标识信息（如名称、身份证号码、e-mail地址等）捆绑在一起，实现对用户身份的验证；它将公钥密码和对称密码结合起来，通过网络和计算机技术实现密钥的自动管理，保证机密数据的保密性和完整性。<br> 通过采用PKI体系管理密钥和证书，可以建立一个安全的网络环境，实现信息的保密性、完整性，并完成身份鉴别以确保不可抵赖性。</p><h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h2><h3 id="crl" tabindex="-1"><a class="header-anchor" href="#crl" aria-hidden="true">#</a> CRL</h3><p>证书撤销列表，简称CRL，一个已标识的列表，它指定了一套认证中心确认为无效的证书</p><h3 id="pfx文件" tabindex="-1"><a class="header-anchor" href="#pfx文件" aria-hidden="true">#</a> PFX文件</h3><p>PFX文件为标准个人私钥文件，内部使用口令保护封装有个人私钥及对应的公钥证书。一般情况下，该文件中的用户私钥应由用户口令加密存放。</p><h3 id="dn" tabindex="-1"><a class="header-anchor" href="#dn" aria-hidden="true">#</a> DN</h3><p>Distinguish Name，证书主题名称</p><h3 id="digital-certificate-数字证书" tabindex="-1"><a class="header-anchor" href="#digital-certificate-数字证书" aria-hidden="true">#</a> Digital Certificate（数字证书）</h3><p>Digital Certificate，是由国家认可的，具有权威性、可信性、公正性的第三方证书认证机构进行数字签名的一个可信的数字化文件。数字证书包含公开密钥拥有者信息以及公开密钥的文件。</p>',12),h=[d];function c(n,s){return e(),i("div",null,h)}const o=a(t,[["render",c],["__file","index.html.vue"]]);export{o as default};
