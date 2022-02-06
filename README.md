# pexels_deno
A wrapper for accessing pexels api service through Deno [Pexels API](https://www.pexels.com/api/). Please refer to the API docs to understand the inputs and expected results.

### Supported API methods are.
* Photos
* Videos
* Collections


[Create authorization key from pexels](https://www.pexels.com/api/documentation/#authorization)

### Usage

```js
import { Pexels } from "https://deno.land/pexels_deno@1.0.0/mod.ts";

// Create Client instance by passing in API key 

const pexelsClient = new PexelsApi("<API_KEY>");

// Search Photos API
try {
    return await pexelsClient.searchPhotos({query: 'food'});
}catch(err) {
    console.log(err);
} 

// Search Videos API
try {
    return await pexelsClient.searchVideos({query:"people"});
}catch(err) {
    console.log(err);
} 

// Trending Photos
try {
    return await pexelsClient.getTrendingPhotos();
}catch(err) {
    console.log(err);
} 

// Random Photos
try {
    return await pexelsClient.getRandomPhotos();
}catch(err) {
    console.log(err);
} 

// Photo by ID
try {
    return await pexelsClient.getPhotoById(1710795);
}catch(err) {
    console.log(err);
} 

// Popular Videos
try {
    return await pexelsClient.getPopularVideos();
}catch(err) {
    console.log(err);
} 


// My collections
try {
    return await pexelsClient.getMyCollection();
}catch(err) {
    console.log(err);
} 

//  Collections Media
try {
    return await pexelsClient.getCollectionsMedia('9mp14cx', 'all');
}catch(err) {
    console.log(err);
} 


// Featured collections
try {
    return await pexelsClient.getFeaturedCollections();
}catch(err) {
    console.log(err);
} 



```

#### API Version
Get Pexels API version

```js
PexelsAPIInstance.getPexelsApiVerison();
```

### Development
git clone [pexels_deno](git@github.com:sajanv88/pexels_deno.git)
`deno run --allow-net src/mod.ts`

### Acknowledgements
Thanks, [Pexels](http://pexels.com) for creating a great platform for great images.
I'd like to thank all the folks who have been using this library!

