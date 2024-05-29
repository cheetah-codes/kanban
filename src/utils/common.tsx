import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import format from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(format);
dayjs.tz.setDefault("Africa/Lagos");

export const date = dayjs;

export const getNumberWithCommas = (x: number) => {
  return x?.toString() != "-" && x != undefined
    ? Number(x)
        .toFixed(2)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    : "";
};

export const clean = (object: object) =>
  JSON.parse(JSON.stringify(object, (_, value) => value ?? undefined));

export const getQueryStringParams = (queryStringParam: object) =>
  new URLSearchParams(clean(queryStringParam)).toString();

export const handleError = (e: any, callback: (message: string) => void) => {
  let message;

  if (e.response) {
    if (e.response.status === 401) {
      message = "You are unauthorized";
    } else {
      const res = e?.response.data.message;

      if (typeof res === "string") {
        message = res;
      } else {
        message = res[0];
      }
    }
  } else {
    message = e.message;
  }

  callback(message);
};
