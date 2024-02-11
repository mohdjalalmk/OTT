export const getPosterImage = (posterUrl) =>{
    switch (posterUrl) {
        case 'poster1.jpg':
          return require('../../assets/moviePosters/poster1.jpg')
        case 'poster2.jpg':
            return require('../../assets/moviePosters/poster2.jpg')
        case 'poster3.jpg':
            return require('../../assets/moviePosters/poster3.jpg')
        case 'poster4.jpg':
            return require('../../assets/moviePosters/poster4.jpg')
        case 'poster5.jpg':
            return require('../../assets/moviePosters/poster5.jpg')
        case 'poster6.jpg':
            return require('../../assets/moviePosters/poster6.jpg')
        case 'poster7.jpg':
            return require('../../assets/moviePosters/poster7.jpg')
        case 'poster8.jpg':
            return require('../../assets/moviePosters/poster8.jpg')
        case 'poster9.jpg':
            return require('../../assets/moviePosters/poster9.jpg')
        default:
            return require('../../assets/moviePosters/placeholder_for_missing_posters.png')
        }
}