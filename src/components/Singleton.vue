<template>
    <div>
        <h2>单例设计模式</h2>
        <h2>饿汉式（立即加载）</h2>
        <pre>
            public class Singleton {

                private Singleton() {
                    // 私有化构造方法，外部不能通过new来创建实例
                }

                private static final Singleton INSTANCE = new Singleton();// 立即加载 开辟内存空间

                public static Singleton getInstance() {
                    return INSTANCE;
                }
            }
        </pre>
        在调用<code>Singleton.getInstance()</code>时候的加载顺序<br/>
        首先加载常量（静态修饰），开辟内存空间（调用构造方法）初始化常量，返回常量给调用方。<br/>
        <b>缺点： 当Singleton类加载的时候就会对INSTANCE初始化，开辟内存空间，随类销毁才能释放内存。在特定条件下消耗内存</b>

        <h2>懒汉式（延迟加载）</h2>
        <pre>
        public class Singleton {

            private Singleton() {
                // 私有化构造方法，外部不能通过new来创建实例
            }

            private static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。

            public static Singleton getInstance() {
                if(instance == null) {
                    instance = new Singleton();
                }
                return instance;
            }
        }
        </pre>
        在调用<code>Singleton.getInstance()</code>时候的加载顺序<br/>
        先加载静态变量instance，但不对其开辟内存空间，相比于饿汉式，节省内存资源，只有第一次调用<code>Singleton.getInstance()</code>的时候才会开辟内存。<br/>
        <b>缺点： 在多线程中，线程不安全，因为没有final修饰，不表示常量，也就是说该值是会被改变的，不能保证单例</b>

        <h2>synchronized 单例（懒汉式升级）</h2>
        <pre>
        public class Singleton {

            private Singleton() {
                // 私有化构造方法，外部不能通过new来创建实例
            }

            private static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。

            public static synchronized Singleton getInstance() {
                if(instance == null) {
                    instance = new Singleton();
                }
                return instance;
            }
        }
        </pre>
        在调用<code>Singleton.getInstance()</code>时候的加载顺序<br/>
        先加载静态变量instance，不开辟内存空间，使用synchronized修饰，实现同步，在多线程中保证单例<br/>
        <b>缺点： 使用synchronized，虽然实现了同步，多线程下保证了单例，但是降低了效率</b>

        <h2>DCL（Double checked Locking）双检查锁</h2>
        <pre>
        public class Singleton {

            private Singleton() {
                // 私有化构造方法，外部不能通过new来创建实例
            }

            private static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。

            public static Singleton getInstance() {
                if(instance == null) {
                    // 某一个线程获取类锁
                    synchronized (Singleton.class) {
                        if (instance == null) {
                            instance = new Singleton();
                        }
                    }
                }
                return instance;
            }
        }
        </pre>
        在调用<code>Singleton.getInstance()</code>时候的加载顺序<br/>
        DCL存在失效问题，一个线程正在执行<code>new Singleton();</code>开辟内存空间，没开辟完成时，另一个线程进来发现instance实例不是空，直接返回了。于是有了下面解决方案
        <pre>
        public class Singleton {
            private Singleton() {
                // 私有化构造方法，外部不能通过new来创建实例
            }

            private volatile static Singleton instance = null;// 延迟加载，没有立即开辟内存空间初始化变量，去掉了final修饰符，表示该变量的值可被修改。volatile 轻量级的同步

            public static Singleton getInstance() {
                if(instance == null) {
                    // 某一个线程获取类锁
                    synchronized (Singleton.class) {
                        if (instance == null) {
                            instance = new Singleton();
                        }
                    }
                }
                return instance;
            }
        }
        </pre>

        <h2>静态内部类方式实现单例</h2>
        <pre>
        public class Singleton {

            private Singleton(){}// 私有化构造方法

            private static class SingletonHolder {// 只有在调用静态内部类的时候才会加载静态内部类，所以实现了懒加载
                private static final Singleton INSTANCE = new Singleton();
            }

            public static Singleton getInstance() {
                return SingletonHolder.INSTANCE;
            }
        }
        </pre>
        在调用<code>Singleton.getInstance()</code>时候的加载顺序<br/>
        加载静态内部类，加载静态内部类中常量，调用外部构造方法开辟内存空间，返回给调用方<br/>
        静态内部类 实现懒加载，只有在调用静态内部类的时候，静态内部类才会加载，随即静态内部类中的常量加载，并调用外部构造方法，开辟内存空间初始化常量。达到了节约内存资源的目的
        同时使用final修饰 保证了常量不会被修改<br/>
    </div>
</template>

<script>
export default {
    name: 'Singleton'
}
</script>

<style>

</style>