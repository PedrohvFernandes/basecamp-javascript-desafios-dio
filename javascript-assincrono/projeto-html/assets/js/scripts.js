const URL_API = "https://thatcopy.pw/catapi/rest/";
async function chamarGatinho() {
  const JSON = await fetch(URL_API);
  const JSON_DATA = await JSON.json();
  //   O webpurl é uma url da imagem jpg comprimida
  return JSON_DATA.webpurl;
}

// async function chamarGatinho() {
//   const data = await fetch(URL_API)
//     .then((res) => res.json())
//     .catch((e) => console.log(e));

//   return data.webpurl;
// }

async function puxarGatinho() {
  let gatinhos = document.getElementsByTagName("img")[0];
  gatinhos.src = await chamarGatinho();
}
// Ja invoca a função pra chamar o gatinho quando iniciar a pagina
puxarGatinho();

// Resposta:

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const getCats = async () => {
// 	try {
// 		const data = await fetch(BASE_URL);
// 		const json = await data.json();
// 		return json.webpurl;
// 	} catch (e) {
// 		console.log(e.message);
// 	}
// };

// const loadImg = async () => {
// 	const img = document.getElementsByTagName('img')[0];
// 	img.src = await getCats();
// };

// loadImg();

// const btn = document.getElementById('change-cat');
// btn.addEventListener('click', loadImg);
