import { Package } from './../Types/Package';

export function addOwner(packages: Package[]) {
  packages.map(pack => {
    if (pack.repository_url !== null) {
      const owner = pack.repository_url.match("\/github.com\/(?:([^/]*))");
      if (owner !== null)pack.owner = owner[1];
    } else {
      pack.owner = pack.name;
    }
  })
  return packages;
}