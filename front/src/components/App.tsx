import React from 'react';
import Button from '../atomics/Button';
import { BUTTON_COLOR, BUTTON_HOVER_COLOR } from '../constants/color';

function App() {
  return (
    <>
      <Button
        style={{
          width: 300,
          height: 50,
        }}
        background={BUTTON_COLOR}
        hoverColor={BUTTON_HOVER_COLOR}
        onClick={() => console.log('test')}
      >
        버튼
      </Button>
    </>
  );
}

export default App;
