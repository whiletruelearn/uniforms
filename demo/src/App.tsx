import React from 'react';

import schema from './schema';
import TutorialForm from '../../website/components/TutorialForm';

export default function App() {
  return (
    <TutorialForm>
      <AutoForm
        schema={schema}
        onSubmit={model => alert(JSON.stringify(model, null, 2))}
      />
    </TutorialForm>
  );
}
