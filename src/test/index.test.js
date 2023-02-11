import React from 'react';
import ReactDOM from 'react-dom/client';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('App', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    const root = ReactDOM.createRoot(div);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
    root.unmount();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
