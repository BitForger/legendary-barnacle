resource "aws_ecs_task_definition" "primary" {
  container_definitions = file("${path.module}/container.json")
  family = "noahkovacs-me"
  memory = "64"
  cpu = "64"
}

data "aws_iam_role" "execution-role" {
  name = "ecsTaskExecutionRole"
}
