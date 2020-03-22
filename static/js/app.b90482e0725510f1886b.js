webpackJsonp([1],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("7+uW"),a=t("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",[n._v("单例设计模式")]),n._v(" "),t("h2",[n._v("饿汉式（立即加载）")]),n._v(" "),t("pre",[n._v("    public class Singleton {\n\n      private Singleton() {\n          // 私有化构造方法，外部不能通过new来创建实例\n      }\n\n      private static final Singleton INSTANCE = new Singleton();// 立即加载 开辟内存空间\n\n      public static Singleton getInstance() {\n          return INSTANCE;\n      }\n    }\n  ")]),n._v("\n  在调用"),t("code",[n._v("Singleton.getInstance()")]),n._v("时候的加载顺序"),t("br"),n._v("\n  首先加载常量（静态修饰），开辟内存空间（调用构造方法）初始化常量，返回常量给调用方。"),t("br"),n._v(" "),t("b",[n._v("缺点： 当Singleton类加载的时候就会对INSTANCE初始化，开辟内存空间，随类销毁才能释放内存。在特定条件下消耗内存")]),n._v(" "),t("h2",[n._v("懒汉式（延迟加载）")]),n._v(" "),t("pre",[n._v("    public class Singleton {\n\n      private Singleton() {\n          // 私有化构造方法，外部不能通过new来创建实例\n      }\n\n      private static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。\n\n      public static Singleton getInstance() {\n        if(instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n      }\n    }\n  ")]),n._v("\n  在调用"),t("code",[n._v("Singleton.getInstance()")]),n._v("时候的加载顺序"),t("br"),n._v("\n  先加载静态变量instance，但不对其开辟内存空间，相比于饿汉式，节省内存资源，只有第一次调用"),t("code",[n._v("Singleton.getInstance()")]),n._v("的时候才会开辟内存。"),t("br"),n._v(" "),t("b",[n._v("缺点： 在多线程中，线程不安全，因为没有final修饰，不表示常量，也就是说该值是会被改变的，不能保证单例")]),n._v(" "),t("h2",[n._v("synchronized 单例（懒汉式升级）")]),n._v(" "),t("pre",[n._v("    public class Singleton {\n\n      private Singleton() {\n          // 私有化构造方法，外部不能通过new来创建实例\n      }\n\n      private static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。\n\n      public static synchronized Singleton getInstance() {\n        if(instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n      }\n    }\n  ")]),n._v("\n  在调用"),t("code",[n._v("Singleton.getInstance()")]),n._v("时候的加载顺序"),t("br"),n._v("\n  先加载静态变量instance，不开辟内存空间，使用synchronized修饰，实现同步，在多线程中保证单例"),t("br"),n._v(" "),t("b",[n._v("缺点： 使用synchronized，虽然实现了同步，多线程下保证了单例，但是降低了效率")]),n._v(" "),t("h2",[n._v("DCL（Double checked Locking）双检查锁")]),n._v(" "),t("pre",[n._v("    public class Singleton {\n\n      private Singleton() {\n          // 私有化构造方法，外部不能通过new来创建实例\n      }\n\n      private static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。\n\n      public static Singleton getInstance() {\n        if(instance == null) {\n            // 某一个线程获取类锁\n            synchronized (Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n      }\n    }\n  ")]),n._v("\n  在调用"),t("code",[n._v("Singleton.getInstance()")]),n._v("时候的加载顺序"),t("br"),n._v("\n  DCL存在失效问题，一个线程正在执行"),t("code",[n._v("new Singleton();")]),n._v("开辟内存空间，没开辟完成时，另一个线程进来发现instance实例不是空，直接返回了。于是有了下面解决方案\n  "),t("pre",[n._v("    public class Singleton {\n      private Singleton() {\n          // 私有化构造方法，外部不能通过new来创建实例\n      }\n\n      private volatile static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。volatile 轻量级的同步\n\n      public static Singleton getInstance() {\n        if(instance == null) {\n          // 某一个线程获取类锁\n          synchronized (Singleton.class) {\n              if (instance == null) {\n                  instance = new Singleton();\n              }\n          }\n        }\n        return instance;\n      }\n    }\n  ")]),n._v(" "),t("h2",[n._v("静态内部类方式实现单例")]),n._v(" "),t("pre",[n._v("  public class Singleton {\n\n      private Singleton(){}// 私有化构造方法\n\n      private static class SingletonHolder {// 只有在调用静态内部类的时候才会加载静态内部类，所以实现了懒加载\n        private static final Singleton INSTANCE = new Singleton();\n      }\n\n      public static Singleton getInstance() {\n        return SingletonHolder.INSTANCE;\n      }\n  }\n  ")]),n._v("\n  在调用"),t("code",[n._v("Singleton.getInstance()")]),n._v("时候的加载顺序"),t("br"),n._v("\n  加载静态内部类，加载静态内部类中常量，调用外部构造方法开辟内存空间，返回给调用方"),t("br"),n._v("\n  静态内部类 实现懒加载，只有在调用静态内部类的时候，静态内部类才会加载，随即静态内部类中的常量加载，并调用外部构造方法，开辟内存空间初始化常量。达到了节约内存资源的目的\n  同时使用final修饰 保证了常量不会被修改"),t("br")])}]};var s=t("VU/8")({name:"Singleton"},l,!1,function(n){t("hl7D")},"data-v-5903a22a",null).exports;i.default.use(a.a);var c=new a.a({routes:[{path:"/dp/singleton",name:"Singleton",component:s}]}),o=t("zL8q"),r=t.n(o),v=(t("tvR6"),{name:"Navigation",methods:{handleOpen:function(n,e){console.log(n,e)},handleClose:function(n,e){console.log(n,e)},routeHandler:function(n){switch(alert(n),n){case"1-1":c.push("/java");break;case"1-2":c.push("/java/co");break;case"2-1":c.push("/dp/singleton")}}}}),u={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("el-row",{staticClass:"tac"},[t("el-col",{attrs:{span:24}},[t("el-menu",{attrs:{"default-active":"1-1","background-color":"#151515","text-color":"#B5E853","active-text-color":"#D28445"},on:{open:n.handleOpen,close:n.handleClose}},[t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),n._v(" "),t("span",[n._v("Java 基础")])]),n._v(" "),t("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return n.routeHandler("1-1")}}},[n._v("基础语法")]),n._v(" "),t("el-menu-item",{attrs:{index:"1-2"},on:{click:function(e){return n.routeHandler("1-2")}}},[n._v("类与对象")]),n._v(" "),t("el-menu-item",{attrs:{index:"1-3"}},[n._v("接口")]),n._v(" "),t("el-menu-item",{attrs:{index:"1-4"}},[n._v("BIO")]),n._v(" "),t("el-menu-item",{attrs:{index:"1-5"}},[n._v("NIO")]),n._v(" "),t("el-menu-item",{attrs:{index:"1-6"}},[n._v("AIO")])],2),n._v(" "),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),n._v(" "),t("span",[n._v("设计模式")])]),n._v(" "),t("el-menu-item",{attrs:{index:"2-1"},on:{click:function(e){return n.routeHandler("2-1")}}},[n._v("单例设计模式")]),n._v(" "),t("el-menu-item",{attrs:{index:"2-2"}},[n._v("工厂模式")])],2),n._v(" "),t("el-submenu",{attrs:{index:"3"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),n._v(" "),t("span",[n._v("NoSql")])]),n._v(" "),t("el-menu-item-group",{attrs:{title:"Redis"}},[t("el-menu-item",{attrs:{index:"3-1"}},[n._v("简介")]),n._v(" "),t("el-menu-item",{attrs:{index:"3-2"}},[n._v("分布式锁")])],1),n._v(" "),t("el-menu-item-group",{attrs:{title:"MongoDB"}},[t("el-menu-item",{attrs:{index:"3-3"}},[n._v("简介")])],1)],2)],1)],1)],1)},staticRenderFns:[]};var _={name:"Layout",components:{Navigation:t("VU/8")(v,u,!1,function(n){t("ejWW")},"data-v-4d50edf2",null).exports}},g={render:function(){var n=this.$createElement,e=this._self._c||n;return e("el-container",[e("el-header",[e("div",{attrs:{id:"left"}},[e("span",{staticStyle:{"margin-right":"30px"}},[this._v("Best Wu")]),this._v(" "),e("span",{staticStyle:{"margin-right":"30px"}},[this._v("新浪微博：itwujt@sina.com")]),this._v(" "),e("span",[this._v("微信：1227321179")])])]),this._v(" "),e("el-container",[e("el-aside",[e("Navigation")],1),this._v(" "),e("el-main",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var d=t("VU/8")(_,g,!1,function(n){t("Sjsc")},"data-v-392d2ed2",null).exports;i.default.config.productionTip=!1,i.default.use(r.a),new i.default({el:"#app",router:c,render:function(n){return n(d)}})},Sjsc:function(n,e){},ejWW:function(n,e){},hl7D:function(n,e){},tvR6:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.b90482e0725510f1886b.js.map