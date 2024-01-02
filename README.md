## Zero Downtime Scale in Kubernetes

Objective: Achieve zero downtime during scale-up/down events of a Nodejs webserver on Kubernetes.

### Summary:

Built and deployed a Nodejs webserver on Kubernetes, ensuring zero downtime during scaling operations. Key accomplishments include:

### Image Management:

Built the Docker image for the webserver.

Pushed the image to DockerHub.

Deployment and Service:

Deployed the webserver as a Kubernetes Deployment with an associated Service.

Traffic Generation:

Generated incoming traffic (20 requests/second) to simulate real-world usage.

Scale Operations:

Investigated and addressed request losses during scale-up/down events.

Implemented liveness and readiness probes to support zero downtime during scaling.

Horizontal Pod Autoscaler (HPA):

Created an HPA based on CPU utilization, limiting resources to 300m CPU.

Tested HPA functionality, ensuring no request losses during scaling events.

Bonus: Rolling Update:

Achieved zero downtime during a rolling update while under traffic load.
