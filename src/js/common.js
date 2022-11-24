import dayjs from "dayjs";

export const FLAG = {
  EXPIRED: "Просрочена",
  COMPLETED: "Выполнена",
  DEFAULT: "",
};

export const format = (date, formatStr) => date.format(formatStr);
export const formatDate = (date) => format(date, "DD/MM/YY");
export const formatTStoDate = (seconds) => dayjs(seconds * 1000);

const defaultDay = "2040-01-01";
export const defaultTime = " 00:00:00+03:00";
export const defaultDate = defaultDay.concat(defaultTime);
export const currentDate = dayjs();
export const currentDateFormat = format(currentDate, "YYYY-MM-DD");
export const getDefaultDate = dayjs(defaultDate);
