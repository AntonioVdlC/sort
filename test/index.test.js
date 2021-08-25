import {
  alphabetically,
  alphabeticallyBase,
  chronologically,
  numerically,
} from "../src/index.ts";

describe("alphabetically", () => {
  it("is a function", () => {
    expect(typeof alphabetically).toBe("function");
  });

  it("sorts an array of numbers correctly (asc by default)", () => {
    const arr = ["Bob", "Alice", "Tom", "Candice"];

    const expected = ["Alice", "Bob", "Candice", "Tom"];
    const actual = arr.sort(alphabetically);

    expect(actual).toEqual(expected);
  });

  describe("alphabetically.desc", () => {
    it("is a function", () => {
      expect(typeof alphabetically.desc).toBe("function");
    });

    it("sorts an array of numbers correctly (desc)", () => {
      const arr = ["Bob", "Alice", "Tom", "Candice"];

      const expected = ["Tom", "Candice", "Bob", "Alice"];
      const actual = arr.sort(alphabetically.desc);

      expect(actual).toEqual(expected);
    });
  });

  describe("alphabetically.asc", () => {
    it("is a function", () => {
      expect(typeof alphabetically.asc).toBe("function");
    });

    it("sorts an array of numbers correctly (asc)", () => {
      const arr = ["Bob", "Alice", "Tom", "Candice"];

      const expected = ["Alice", "Bob", "Candice", "Tom"];
      const actual = arr.sort(alphabetically.asc);

      expect(actual).toEqual(expected);
    });
  });
});

describe("alphabeticallyBase", () => {
  it("is a function", () => {
    expect(typeof alphabeticallyBase).toBe("function");
  });

  it("sorts an array of numbers correctly (asc by default)", () => {
    const arr = ["bob", "Alice", "tom", "Candice"];

    const expected = ["Alice", "bob", "Candice", "tom"];
    const actual = arr.sort(alphabeticallyBase);

    expect(actual).toEqual(expected);
  });

  describe("alphabeticallyBase.desc", () => {
    it("is a function", () => {
      expect(typeof alphabeticallyBase.desc).toBe("function");
    });

    it("sorts an array of numbers correctly (desc)", () => {
      const arr = ["bob", "Alice", "tom", "Candice"];

      const expected = ["tom", "Candice", "bob", "Alice"];
      const actual = arr.sort(alphabeticallyBase.desc);

      expect(actual).toEqual(expected);
    });
  });

  describe("alphabeticallyBase.asc", () => {
    it("is a function", () => {
      expect(typeof alphabeticallyBase.asc).toBe("function");
    });

    it("sorts an array of numbers correctly (asc)", () => {
      const arr = ["bob", "Alice", "tom", "Candice"];

      const expected = ["Alice", "bob", "Candice", "tom"];
      const actual = arr.sort(alphabeticallyBase.asc);

      expect(actual).toEqual(expected);
    });
  });
});

describe("chronologically", () => {
  it("is a function", () => {
    expect(typeof chronologically).toBe("function");
  });

  it("sorts an array of numbers correctly (asc by default)", () => {
    const now = new Date();
    const arr = [now, "01-01-1970", new Date("12-12-2012")];

    const expected = ["01-01-1970", new Date("12-12-2012"), now];
    const actual = arr.sort(chronologically);

    expect(actual).toEqual(expected);
  });

  describe("chronologically.desc", () => {
    it("is a function", () => {
      expect(typeof chronologically.desc).toBe("function");
    });

    it("sorts an array of numbers correctly (desc)", () => {
      const now = new Date();
      const arr = [now, "01-01-1970", new Date("12-12-2012")];

      const expected = [now, new Date("12-12-2012"), "01-01-1970"];
      const actual = arr.sort(chronologically.desc);

      expect(actual).toEqual(expected);
    });
  });

  describe("chronologically.asc", () => {
    it("is a function", () => {
      expect(typeof chronologically.asc).toBe("function");
    });

    it("sorts an array of numbers correctly (asc)", () => {
      const now = new Date();
      const arr = [now, "01-01-1970", new Date("12-12-2012")];

      const expected = ["01-01-1970", new Date("12-12-2012"), now];
      const actual = arr.sort(chronologically.asc);

      expect(actual).toEqual(expected);
    });
  });
});

describe("numerically", () => {
  it("is a function", () => {
    expect(typeof numerically).toBe("function");
  });

  it("sorts an array of numbers correctly (asc by default)", () => {
    const arr = [1, 2, 2, 23, 30, 4];

    const expected = [1, 2, 2, 4, 23, 30];
    const actual = arr.sort(numerically);

    expect(actual).toEqual(expected);
  });

  describe("numerically.desc", () => {
    it("is a function", () => {
      expect(typeof numerically.desc).toBe("function");
    });

    it("sorts an array of numbers correctly (desc)", () => {
      const arr = [1, 2, 2, 23, 30, 4];

      const expected = [30, 23, 4, 2, 2, 1];
      const actual = arr.sort(numerically.desc);

      expect(actual).toEqual(expected);
    });
  });

  describe("numerically.asc", () => {
    it("is a function", () => {
      expect(typeof numerically.asc).toBe("function");
    });

    it("sorts an array of numbers correctly (asc)", () => {
      const arr = [1, 2, 2, 23, 30, 4];

      const expected = [1, 2, 2, 4, 23, 30];
      const actual = arr.sort(numerically.asc);

      expect(actual).toEqual(expected);
    });
  });
});
