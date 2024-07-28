let cls = document.querySelector('#first')
cls.className = 'text-black red'//class name added to the html with id first
console.log(cls.classList)
cls.classList.remove('red') //remove class name
cls.classList.add('yellow') // adds class name
cls.classList.toggle('white') // adds class if not exist otherwise remove if it is already present
console.log(cls.classList.contains('red')) //returns true or false