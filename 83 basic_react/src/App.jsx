import './App.css';
import Title from './Title';
import Description from './Description';
import Product from './Product'
import ProductTab from './ProductTab'





// function App() {
//   return (
//     <div>
//       <h1>This is my App Component</h1>
//       <Title /> {/* return the components here to render in html page */}
//       <Description />
//       <h1>Hello World!!</h1>
//       <h4>This is jsx with curly braces 2 * 2 = {2 * 2}</h4>
//       <h4>My name is sairam --- in uppercase  {"sairam".toUpperCase()} by using js function</h4>
//       <Product></Product>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </>
  )
}

// function App() {
//   return (
//     <ProductTab/>
//   )
// }

export default App
