const apiKey = 'LDHQy3B5eXnoLmRUgOvJtQdKXcdcfCrc'


export default function getGifs({keyword="goku"}){

    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(apiUrl).then(res => res.json()).then(response =>{
        const { data } = response;
        const gifs = data.map(image => {
            const {images,title,id} = image;
            const {url} = image.images.downsized_medium.url
            return {title, id, url}
        });
        return gifs
      })
}