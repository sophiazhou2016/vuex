# 问题描述
> 当我们需要判断数组是否包含某项，有以下写法：
1. if (arr.indexOf(el) !== -1) { }
2. arr.indexOf(el) >= 0
3. if(~arr.indexOf(el)) { } // 此写法跟第1种一个意思，~是按位非，详见 https://www.cnblogs.com/moqiutao/p/6275483.html

# includes 代替 has 
1. Map WeakMap Reflect （Map 是对象，key不仅仅是字符串，有has方法)
2. Set （它类似于数组，但是成员的值都是唯一的，没有重复的值。有has方法）
3. String (本来就有includes方法)

> Reflect 使编程 由命令式 => 函数式
```
// 旧写法
'foo' in myObject // true
// 新写法
Reflect.has(myObject, 'foo')
```

# 用法
1. 数组包含NaN的index:
```
[1,2,NaN].indexOf(NaN); // -1
[1,2,NaN].includes(NaN); // true
```
2. includes(item, index1) 传两个参数表示item的index是不是index1
```
["a", "b", "c"].includes("a", 0)
```

> 参考链接： https://github.com/tc39/Array.prototype.includes