/*
    console.log(replacePathParams('/profile/:id/:name', { id: '111', name: 'tim' })) 
    //return '/profile/111/tim'
*/

export function replacePathParams (path, params, prefix = ':') {
  let newPath = path

  Object.entries(params).forEach(([key, value]) => {
    newPath = newPath.replace(prefix + key, value)
  })
  return newPath
}