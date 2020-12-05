import getDateDiff from "./get-date-diff";

describe("getDateDiff", () => {
  it("same date", () => {
    const date = new Date();
    const diff = getDateDiff(date, date);
    expect(diff).toMatchObject({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliSeconds: 0,
    });
  });

  it("days difference", () => {
    const diff = getDateDiff(new Date(2020, 0, 1), new Date(2020, 0, 2));
    expect(diff).toMatchObject({
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliSeconds: 0,
    });
  });

  it("hours difference", () => {
    const diff = getDateDiff(
      new Date(2020, 0, 1, 10),
      new Date(2020, 0, 2, 12),
    );
    expect(diff).toMatchObject({
      days: 1,
      hours: 2,
      minutes: 0,
      seconds: 0,
      milliSeconds: 0,
    });
  });

  it("minutes difference", () => {
    const diff = getDateDiff(
      new Date(2020, 0, 1, 10, 55),
      new Date(2020, 0, 2, 12, 30),
    );
    expect(diff).toMatchObject({
      days: 1,
      hours: 1,
      minutes: 35,
      seconds: 0,
      milliSeconds: 0,
    });
  });

  it("seconds difference", () => {
    const diff = getDateDiff(
      new Date(2020, 0, 1, 10, 55, 1),
      new Date(2020, 0, 2, 12, 30, 47),
    );
    expect(diff).toMatchObject({
      days: 1,
      hours: 1,
      minutes: 35,
      seconds: 46,
      milliSeconds: 0,
    });
  });

  it("milliseconds difference", () => {
    const diff = getDateDiff(
      new Date(2020, 0, 1, 10, 55, 1, 200),
      new Date(2020, 0, 2, 12, 30, 47, 212),
    );
    expect(diff).toMatchObject({
      days: 1,
      hours: 1,
      minutes: 35,
      seconds: 46,
      milliSeconds: 12,
    });
  });
});
