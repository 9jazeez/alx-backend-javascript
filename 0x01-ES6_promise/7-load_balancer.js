//works like a load balancer

export default function loadBalancer(chainaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((res) => res);
}
