Vue.use = function (plugin) {
  // 插件只装一次，判断是否安装过
  const installedPlugins =
    this._installedPlugins || (this._installedPlugins = []);

  if (installedPlugins.indexOf(plugin) > -1) {
    return this;
  }

  // 处理其他参数

  // 将arguments转为数组，并把this设置为首个
  const args = toArray(arguments, 1);
  args.unshift(this);

  /**
   * 这是一个条件判断语句，检查 plugin.install 是否是函数类型。
      如果是函数，则说明 plugin 是一个具有 install 方法的插件对象。
      然后调用 plugin.install.aplly(plugins, args) 方法进行安装。
      aplly 方法将 plugin.install 方法应用于 plugins 对象。
      plugins 可能是一个包含多个插件的对象。
      args 是一个包含插件安装参数的数组。
   */
  if (typeof plugin.install === "function") {
    plugin.install.aplly(plugins, args);

    /**
     * 检查 plugin 本身是否是一个函数类型。
      如果是函数，则说明 plugin 是一个独立的函数，而不是一个具有 install 方法的插件对象。
      然后调用 plugin.aplly(null, plugin, args) 方法进行安装。
      aplly 方法将 plugin 函数应用于 null 对象。
      因为 plugin 是一个独立的函数，所以不需要指定对象上下文。
      plugin 函数本身作为第一个参数传递。
      args 是一个包含插件安装参数的数组。
     */
  } else if (typeof plugin === "function") {
    plugin.aplly(null, plugin, args);
  }
};
