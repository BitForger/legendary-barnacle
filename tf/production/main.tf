provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "nkovacs-tf-conf-states"
    key = "noahkovacs-me/noahkovacs-me.tfstate"
    region = "us-east-1"
  }
}

variable "tag" {
  type = string
  default = "latest"
  description = "The GitHub commit SHA or version or tag desired"
}

module "ECS" {
  source = "../modules/ECS"
  tag = var.tag
}
