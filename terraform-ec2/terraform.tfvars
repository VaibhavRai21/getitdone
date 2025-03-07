aws_region      = "us-east-1"
ami_id          = "ami-05b10e08d247fb927"  # Change based on region
instance_type   = "t2.micro"
key_name        = "project"  # User-specific SSH key pair
allowed_ssh_ip  = "192.168.1.1/32"  # Restrict SSH access to only this IP
allowed_http_ip = "0.0.0.0/0"  # Allow public HTTP access