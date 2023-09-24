async function getIp() {
  const data = await (await fetch('https://api.ipify.org?format=json')).json();
  return data.ip;
}

export default getIp;
