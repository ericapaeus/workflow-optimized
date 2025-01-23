module.exports = {
  apps: [
    {
      name: 'pgg2', // 应用名称
      script: 'npm', // 执行命令
      args: 'start', // 传递给命令的参数
      cwd: './', // 应用程序所在目录
      instances: 'max', // 负载均衡实例数 max 表示根据 CPU 核心数创建
      exec_mode: 'cluster', // 集群模式
      autorestart: true, // 程序崩溃后自动重启
      watch: true, // 启用文件监控
      max_memory_restart: '1G', // 内存超限重启
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        // 其他环境变量
      },
      env_production: {
        NODE_ENV: 'production',
      },
      // 日志配置
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/error.log', // 错误日志路径
      out_file: 'logs/out.log', // 输出日志路径
      merge_logs: true, // 集群模式下合并日志
      log_type: 'json', // 日志格式
      max_size: '20M', // 日志文件大小限制
      rotate_interval: '1d', // 日志轮转间隔
      wait_ready: true, // 等待应用程序发送 ready 信号
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
