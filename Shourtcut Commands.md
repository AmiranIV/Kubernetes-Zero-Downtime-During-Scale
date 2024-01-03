#### Load Test:

kubectl run -i --tty load-generatorv2 --rm --image=busybox:1.28 --restart=Never -- /bin/sh -c "while sleep 0.05; do (wget -q -O- http://zero-node-app-service:3000 &); done"


#### Scale Up/Down:

kubectl scale deployment zero-node-app --replicas=1/2/3.....

#### kubectl delete all nodes

minikube delete --all

