module.exports = {
  apps: [
    {
      name: 'pgg2', // 应用名称
      script: 'npm', // 执行命令
      args: 'start', // 传递给命令的参数
      cwd: './', // 应用程序所在目录
      instances: 1, // 改为 1 个实例
      exec_mode: 'fork', // 改为 fork 模式
      autorestart: true, // 程序崩溃后自动重启
      watch: true, // 启用文件监控
      max_memory_restart: '1G', // 内存超限重启

      // 默认环境变量 (development)
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },

      // 生产环境变量 (使用 --env production 时生效)
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        // 其他生产环境特定的变量
      },
      // 日志配置
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/error.log', // 错误日志路径
      out_file: 'logs/out.log', // 输出日志路径
      merge_logs: true, // 集群模式下合并日志
      log_type: 'json', // 日志格式
      max_size: '20M', // 日志文件大小限制
      rotate_interval: '1d', // 日志轮转间隔
      listen_timeout: 50000, // 等待时间
      kill_timeout: 5000, // 发送 SIGKILL 信号前的等待时间
      increment_var: 'PORT', // 自动增加端口号
      instance_var: 'INSTANCE_ID', // 实例ID环境变量
      // 监控配置
      ignore_watch: [
        // 忽略监控的文件
        'node_modules',
        'logs',
      ],
      min_uptime: '60s', // 最小运行时间
      max_restarts: 10, // 最大重启次数
      restart_delay: 4000, // 重启延迟
    },
  ],
}
