resource "aws_cloudwatch_log_group" "log-group" {
  name = "/ecs/noahkovacs-me"
  retention_in_days = 7
}

resource "aws_ecs_service" "frontend" {
  name = "noahkovacs-me"
  task_definition = aws_ecs_task_definition.primary.arn
  desired_count = 1
  cluster = "Production"
  launch_type = "EC2"
  load_balancer {
    container_name = "noahkovacs-me-frontend"
    container_port = 80
    target_group_arn = aws_lb_target_group.main.arn
  }
  depends_on = [aws_lb_target_group.main]
}
