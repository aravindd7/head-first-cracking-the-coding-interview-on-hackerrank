describe("basic", () => {
  it("for of", () => {
    let arr = [1, 2, 3, 4];
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }

    expect(sum).toBe(10);
  });
  it("for ", () => {
    let arr = [1, 2, 3, 4];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    expect(sum).toBe(10);
  });
  it("array foreach", () => {
    let arr = [1, 2, 3, 4];
    let sum = 0;
    arr.forEach((num, index) => {
      sum += num;
    });
    expect(sum).toBe(10);
  });
  it("for in object", () => {
    const me_obj = {
      name: "Doomed1993",
      activity: "Sleeping"
    };
    let result = [];
    for (let property in me_obj) {
      result.push(property);
    }
    expect(result).toEqual(["name", "activity"]);
  });
  it("for in array,proven again array is just numbered index object in javascript", () => {
    let arr = [1, 2, 3, 4];
    let indexes = [];
    for (let num in arr) {
      indexes.push(num);
    }

    expect(indexes).toEqual(["0", "1", "2", "3"]);
  });
});
