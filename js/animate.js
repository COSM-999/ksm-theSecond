/**
 * 动画函数
 * @param 需要做动画的dom对象,必填    obj 
 * @param 动画目标值,必填            target 
 * @param 回调函数,可选              callback 
 * 没有返回值
 */
function animate( obj , target , callback ){
    // 清除之前的定时器
    clearInterval( obj.timer );

    // 开启定时器,  对象是可以通过对象.属性名 = 属性值的方法给对象添加属性
    obj.timer = window.setInterval(function(){
        // 动画运动的速度
        // 缓慢动画公式  ( 目标值 - 当前值 ) / 10
        var speed = ( target - obj.offsetLeft ) / 10 ;
        // 正数向上取整,负数向下取整
        speed = speed >= 0 ? Math.ceil( speed ) : Math.floor( speed )

        // 设置结束动画条件,结束动画其实就是清除定时器
        if( obj.offsetLeft == target ){
            window.clearInterval( obj.timer );

            // 判断是否存在回调函数,如果存在就调用这个回调函数
            callback && callback();

            return;
        }
        // 设置元素的偏移量
        obj.style.left = obj.offsetLeft+speed+"px";
    }, 15);
}