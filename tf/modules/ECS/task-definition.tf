resource "aws_ecs_task_definition" "primary" {
  execution_role_arn = data.aws_iam_role.execution-role.arn
  container_definitions = <<DOC
  [
    {
      "name": "noahkovacs-me",
      "executionRoleArn": "arn:aws:iam::508511800738:role/ecsTaskExecutionRole",
      "image": "508511800738.dkr.ecr.us-east-1.amazonaws.com/noahkovacs-me:${var.tag}",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 80
        }
      ],
      "secrets": [
        {
          "valueFrom": "arn:aws:ssm:us-east-1:508511800738:parameter/noahkovacs-me/github-uri",
          "name": "REACT_APP_GITHUB_URI"
        },
        {
          "valueFrom": "arn:aws:ssm:us-east-1:508511800738:parameter/noahkovacs-me/github-token",
          "name": "REACT_APP_GITHUB_AUTH_TOKEN"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/noahkovacs-me",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "web"
        }
      }
    }
  ]
  DOC

  family = "noahkovacs-me"
  memory = "128"
  cpu = "128"
}

data "aws_iam_role" "execution-role" {
  name = "ecsTaskExecutionRole"
}
