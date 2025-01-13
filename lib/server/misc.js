import * as argon2 from "argon2";

export async function hashPassword(password) {
  return await argon2.hash(password);
}

export function isWithinDateRange(date, startDate, endDate) {
  return date >= startDate && date <= endDate;
}

export function hasTimeConflict(start1, end1, start2, end2) {
  return (
    (start1 >= start2 && start1 < end2) ||
    (end1 > start2 && end1 <= end2) ||
    (start1 <= start2 && end1 >= end2)
  );
}
