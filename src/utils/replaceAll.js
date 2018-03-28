export default (text, obj) => {
    for (var x in obj) {
        text = text.replace(new RegExp(x, 'g'), obj[x])
    }
    return text
  }