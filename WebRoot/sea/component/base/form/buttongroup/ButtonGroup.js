define(function(require, exports, module) {
	/** * 模块外部依赖 ** */
	require.async("./css/buttongroup"+Cookie.theme+".css");
	var Component = require("Component"); 
	/** * 模块私有数据 ** */
	var defaults = {
			id:"",
			align:"0",//横排：horizontal  或 0; 竖排：vertical 或 1
			cls : "",
			css : {},
			attr : {},
			separatorWidth:20,
			items:[{
				id : "",
				value : "",
				cls : "",
				css : {},
				attr : {},
				icon:null,
				events : {
					//click : null
				}
			}]
	};
	/** * 模块私有方法 ** */
	var self = {
		init : function(me) {
			me.buttonGroup=$("<div></div>").addClass(me._className);
			var ul=$("<ul></ul>").appendTo(me.buttonGroup);
			$.each(me.configs.items,function(index,item){
				var li;
				if(item.icon){
					li=$("<li></li>").append("<a href='#'><span  class='"+item.icon+"'></span>"+item.value+"</a>").appendTo(ul);
				}else{
					li=$("<li></li>").append("<a href='#'>"+item.value+"</a>").appendTo(ul);
				}
				if(me.configs.align=="0"||me.configs.align=="horizontal"){
					li.css("display","inline");
					li.css("margin-right",me.configs.separatorWidth);
				}else{
					li.css("margin-bottom",me.configs.separatorWidth);
				}
				// 控件类名设置
				Component.addClass(li.find("a"), item);
				// 控件样式设置
				Component.css(li.find("a"), item);
				// 控件的属性设置
				Component.attr(li.find("a"), item);
				// 控件的事件绑定
				Component.bind(li, item);
			});
			// 控件类名设置
			Component.addClass(me.buttonGroup, me.configs);
			// 控件样式设置
			Component.css(me.buttonGroup, me.configs);
			// 控件的属性设置
			Component.attr(me.buttonGroup, me.configs);
		}
	};
	/** * 类定义 ** */
	var ButtonGroup = function(configs) {
		// 类的属性定义
		this.configs = $.extend(true, {}, defaults, configs);
		// 初始化
		// 类的属性定义
		this.configs=$.extend(true,{},defaults,configs);
		this._className="sea_buttongroup";
		//初始化
		self.init(this);
	};
	// 类公共方法
	ButtonGroup.prototype = {
		 
	};
	/** * 输出类对象 ** */
	exports.create = function(configs) {
		return new ButtonGroup(configs);
	};
});
