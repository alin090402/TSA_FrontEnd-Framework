import { html, TemplateResult } from 'lit';
import '../src/learning-wc.js';

export default {
  title: 'LearningWc',
  component: 'learning-wc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <learning-wc style="--learning-wc-background-color: ${backgroundColor}" .header=${header}></learning-wc>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
