import './App.css';
import Button from './components/Button.js'

function App() {

  const buttons = [
    { value: 'Кнопка1', fn: () => console.log(1) },
    { value: 'Кнопка2', fn: () => console.log(2) },
    { value: 'Кнопка3', fn: () => console.log(3) },
    { value: 'Кнопка4', fn: () => console.log(4) },
    { value: 'Кнопка5', fn: () => console.log(5) },
  ]









  return (
    <div className="App">
      <header className="App-header">
        <h1>Привет, мир!</h1>
        <div>
          <Button
            value={'Моя кнопка!'}
            onClickHandler={() => alert('Ура!')}
          />
          <Button
            value={'Моя кнопка2'}
            onClickHandler={() => alert('Кнопка2')}
          />
          <Button
            value={'Моя кнопка3'}
            onClickHandler={() => alert('Кнопка3')}
          />
          <Button
            value={'Моя кнопка5'}
            onClickHandler={() => alert('Кнопка5')}
          />

          <hr />
          {buttons.map((button, index) => (
            <Button
              value={button.value}
              onClickHandler={button.fn}
              key={index}

            />
          ))}

        </div>
      </header>
    </div>
  );
}
export default App;
