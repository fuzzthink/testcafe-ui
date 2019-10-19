import React, { useEffect, useState } from 'react';
import {
  default as Accordion,
  AccordionItem,
  // AccordionSkeleton
} from 'carbon-components-react/lib/components/Accordion';
import Checkbox from 'carbon-components-react/lib/components/Checkbox';
// import { settings } from 'carbon-components';

const Tests = ({ tests }) => (
  <fieldset>
    {tests && tests.map(test => {
      const props = {
        id: test.name,
        key: test.name,
        labelText: test.meta.title,
        disabled: test.disabled,
        hideLabel: false,
      };
      return <Checkbox defaultChecked {...props} />
    })}
  </fieldset>
)

const TestFixture = fixture => {
  const props = {
    title: fixture.name,
    open: false,
  };
  return (
    <Accordion key={fixture.name}>
      <AccordionItem {...props}>
        {Tests(fixture)}
      </AccordionItem>
    </Accordion>
  );
};

const setFetched = async (uri, setter) => {
  const resp = await fetch(uri);
  const res = await resp.json();
  setter(res);
}

export default () => {
  const [globals, setGlobals] = useState({});

  useEffect(() => {
    setFetched('globals', setGlobals);
  }, []);

  const { fixtures } = globals;

  return (
    <>
      <h1>End-to-End Tests</h1>
      {fixtures && fixtures.map(fixture => TestFixture(fixture))}
    </>
  )
};
