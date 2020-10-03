import { pascalCase, paramCase } from 'change-case';

export const routeTemplate = (f: string) => {
  const FeatureName = pascalCase(f);
  const featureName = paramCase(f);

  const Route = `${FeatureName}Route`;
  const Provider = `${FeatureName}Provider`;

  return `
    import React from 'react';
    import { Switch, Redirect, Route } from 'react-router-dom';

    import ${FeatureName} from './${f}';
    import {${Provider}} from './${f}.context';
    
    function ${Route}() {
      return (
        <${Provider}>
          <Switch>
            <Route exact path='/${featureName}' component={${FeatureName}} />
            <Route exact path='/${featureName}/404' component={NotFound} />
            <Redirect to='/${featureName}/404' />
          </Switch>
        </${Provider}>
      );
    }

    function NotFound(){
        return <div>NOT FOUND </div>
    }
    
    export default ${Route};
    `;
};
