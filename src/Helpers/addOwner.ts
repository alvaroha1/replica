import { Package } from './../Types/Package';

export function addOwner(packages: Package[]) {
  packages.map(pack => {
    const owner = pack.repository_url.match("\/github.com\/(?:([^/]*))");
    if (owner !== null)pack.owner = owner[1];
  })
  return packages;
}