import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Authy } from './Authy';
import { Generate } from './generate/Generate';
import { Verify } from './Verify';

export const Index = () => (
  <Tabs>
    <TabList>
      <Tab>生成 | generate</Tab>
      <Tab>验证 | verify</Tab>
      <Tab>Authy</Tab>
    </TabList>
    <TabPanel>
      <Generate />
    </TabPanel>
    <TabPanel>
      <Verify />
    </TabPanel>
    <TabPanel>
      <Authy />
    </TabPanel>
  </Tabs>
);