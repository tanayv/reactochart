import React from 'react';
import ComponentDocs from '../../ComponentDocs';
import ExampleSection from '../../ExampleSection';
// autogenerated docs data containing descriptions of this component's props
import propDocs from './propDocs.json';

const examples = [
  {
    id: 'basic',
    label: 'Basic XYPlot',
    codeText: require('raw-loader!./examples/XYPlot.js.example'),
  },
  {
    id: 'spacing',
    label: 'Custom Spacing',
    codeText: require('raw-loader!./examples/CustomSpacing.js.example'),
  },
];

export default class XYPlotExamples extends React.Component {
  render() {
    return (
      <ComponentDocs name="XYPlot" propDocs={propDocs}>
        {/* documentation goes here. intersperse docs with examples or leave examples loop below */}

        {examples.map(example => {
          return <ExampleSection {...example} key={example.id} />;
        })}
      </ComponentDocs>
    );
  }
}
