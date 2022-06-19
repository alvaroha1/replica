import { addOwner } from "../Helpers/addOwner";
import { Package } from "./../Types/Package";

const package1: Package = {
  description: "jQuery JavaScript Library",
  forks: 20411,
  homepage: "https://jquery.com",
  name: "jQuery",
  rank: 13,
  repository_url: "https://github.com/jquery/jquery.git",
  stars: 56192,
};

const package2: Package = {
  description: "jQuery JavaScript Library",
  forks: 20411,
  homepage: "https://jquery.com",
  name: "jQuery",
  rank: 13,
  stars: 56192,
  repository_url: "",
};

const package3: Package = {
  description: "jQuery JavaScript Library",
  forks: 20411,
  homepage: "https://jquery.com",
  name: "jQuery",
  rank: 13,
  stars: 56192,
  repository_url: "https://www.google.com/jquery",
};

describe("Test addOwner function", () => {
  it("when the repository_url is included", () => {
    const addOwnerFlag = addOwner([package1]);

    expect(addOwnerFlag[0].owner).toEqual("jquery");
  });

  it("when the repository_url is not included", () => {
    const addOwnerFlag = addOwner([package2]);

    expect(addOwnerFlag[0].owner).toEqual(undefined);
  });

  it("when the repository_url is not a github url", () => {
    const addOwnerFlag = addOwner([package3]);

    expect(addOwnerFlag[0].owner).toEqual(undefined);
  });
});
