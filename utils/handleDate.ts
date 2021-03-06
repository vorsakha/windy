function handleDate(newDate: any) {
  const data = new Date(newDate),
    day = data.getDate().toString(),
    dayF = day.length == 1 ? "0" + day : day,
    month = (data.getMonth() + 1).toString(),
    monthF = month.length == 1 ? "0" + month : month,
    year = data.getFullYear();
  return dayF + "/" + monthF + "/" + year;
}

export default handleDate;
