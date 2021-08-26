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

  it("sorts an array of strings correctly (asc by default)", () => {
    const arr = ["Bob", "Alice", "Tom", "Candice"];

    const expected = ["Alice", "Bob", "Candice", "Tom"];
    const actual = arr.sort(alphabetically);

    expect(actual).toEqual(expected);
  });

  describe("alphabetically.desc", () => {
    it("is a function", () => {
      expect(typeof alphabetically.desc).toBe("function");
    });

    it("sorts an array of strings correctly (desc)", () => {
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

    it("sorts an array of strings correctly (asc)", () => {
      const arr = ["Bob", "Alice", "Tom", "Candice"];

      const expected = ["Alice", "Bob", "Candice", "Tom"];
      const actual = arr.sort(alphabetically.asc);

      expect(actual).toEqual(expected);
    });
  });

  describe("alphabetically.by", () => {
    it("is a function", () => {
      expect(typeof alphabetically.by).toBe("function");
    });

    it("sorts an array of object by a string field (asc by default)", () => {
      const arr = [
        { name: "Bob", age: 23 },
        { name: "Alice", age: 32 },
        { name: "Tom", age: 60 },
        { name: "Candice", age: 45 },
      ];

      const expected = [
        { name: "Alice", age: 32 },
        { name: "Bob", age: 23 },
        { name: "Candice", age: 45 },
        { name: "Tom", age: 60 },
      ];
      const actual = arr.sort(alphabetically.by("name"));

      expect(actual).toEqual(expected);
    });

    it("sorts an array of object by a string field (desc)", () => {
      const arr = [
        { name: "Bob", age: 23 },
        { name: "Alice", age: 32 },
        { name: "Tom", age: 60 },
        { name: "Candice", age: 45 },
      ];

      const expected = [
        { name: "Tom", age: 60 },
        { name: "Candice", age: 45 },
        { name: "Bob", age: 23 },
        { name: "Alice", age: 32 },
      ];
      const actual = arr.sort(alphabetically.by("-name"));

      expect(actual).toEqual(expected);
    });

    it("sorts an array of object by a string field (null present)", () => {
      const arr = [
        { name: "Bob", age: 23 },
        { name: "Alice", age: 32 },
        null,
        { name: "Tom", age: 60 },
        { name: "Candice", age: 45 },
      ];

      const expected = [
        { name: "Alice", age: 32 },
        { name: "Bob", age: 23 },
        { name: "Candice", age: 45 },
        { name: "Tom", age: 60 },
        null,
      ];
      const actual = arr.sort(alphabetically.by("name"));

      expect(actual).toEqual(expected);
    });
  });
});

describe("alphabeticallyBase", () => {
  it("is a function", () => {
    expect(typeof alphabeticallyBase).toBe("function");
  });

  it("sorts an array of strings correctly (asc by default)", () => {
    const arr = ["bob", "Alice", "tom", "Candice"];

    const expected = ["Alice", "bob", "Candice", "tom"];
    const actual = arr.sort(alphabeticallyBase);

    expect(actual).toEqual(expected);
  });

  describe("alphabeticallyBase.desc", () => {
    it("is a function", () => {
      expect(typeof alphabeticallyBase.desc).toBe("function");
    });

    it("sorts an array of strings correctly (desc)", () => {
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

    it("sorts an array of strings correctly (asc)", () => {
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

  it("sorts an array of dates correctly (asc by default)", () => {
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

    it("sorts an array of dates correctly (desc)", () => {
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

    it("sorts an array of dates correctly (asc)", () => {
      const now = new Date();
      const arr = [now, "01-01-1970", new Date("12-12-2012")];

      const expected = ["01-01-1970", new Date("12-12-2012"), now];
      const actual = arr.sort(chronologically.asc);

      expect(actual).toEqual(expected);
    });
  });

  describe("chronologically.by", () => {
    it("is a function", () => {
      expect(typeof chronologically.by).toBe("function");
    });

    it("sorts an array of object by a date field (asc by default)", () => {
      const arr = [
        { name: "Bob", age: 23, date: { joined: new Date("01-01-2012") } },
        { name: "Alice", age: 32, date: { joined: new Date("01-10-2012") } },
        { name: "Tom", age: 60, date: { joined: new Date("01-01-2001") } },
        { name: "Candice", age: 45, date: { joined: new Date("12-06-2020") } },
      ];

      const expected = [
        { name: "Tom", age: 60, date: { joined: new Date("01-01-2001") } },
        { name: "Bob", age: 23, date: { joined: new Date("01-01-2012") } },
        { name: "Alice", age: 32, date: { joined: new Date("01-10-2012") } },
        { name: "Candice", age: 45, date: { joined: new Date("12-06-2020") } },
      ];
      const actual = arr.sort(chronologically.by("date.joined"));

      expect(actual).toEqual(expected);
    });

    it("sorts an array of object by a date field (desc)", () => {
      const arr = [
        { name: "Bob", age: 23, date: { joined: new Date("01-01-2012") } },
        { name: "Alice", age: 32, date: { joined: new Date("01-10-2012") } },
        { name: "Tom", age: 60, date: { joined: new Date("01-01-2001") } },
        { name: "Candice", age: 45, date: { joined: new Date("12-06-2020") } },
      ];

      const expected = [
        { name: "Candice", age: 45, date: { joined: new Date("12-06-2020") } },
        { name: "Alice", age: 32, date: { joined: new Date("01-10-2012") } },
        { name: "Bob", age: 23, date: { joined: new Date("01-01-2012") } },
        { name: "Tom", age: 60, date: { joined: new Date("01-01-2001") } },
      ];
      const actual = arr.sort(chronologically.by("-date.joined"));

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

  describe("numerically.by", () => {
    it("is a function", () => {
      expect(typeof numerically.by).toBe("function");
    });

    it("sorts an array of object by a numeric field (asc by default)", () => {
      const arr = [
        { name: "Bob", age: 23 },
        { name: "Alice", age: 32 },
        { name: "Tom", age: 60 },
        { name: "Candice", age: 45 },
      ];

      const expected = [
        { name: "Bob", age: 23 },
        { name: "Alice", age: 32 },
        { name: "Candice", age: 45 },
        { name: "Tom", age: 60 },
      ];
      const actual = arr.sort(numerically.by("age"));

      expect(actual).toEqual(expected);
    });

    it("sorts an array of object by a numeric field (desc)", () => {
      const arr = [
        { name: "Bob", age: 23 },
        { name: "Alice", age: 32 },
        { name: "Tom", age: 60 },
        { name: "Candice", age: 45 },
      ];

      const expected = [
        { name: "Tom", age: 60 },
        { name: "Candice", age: 45 },
        { name: "Alice", age: 32 },
        { name: "Bob", age: 23 },
      ];
      const actual = arr.sort(numerically.by("-age"));

      expect(actual).toEqual(expected);
    });
  });
});
