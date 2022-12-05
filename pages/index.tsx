import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import * as React from 'react';
import {DemoPlayer} from './components/Video'

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});
 
const theme: ThemeConfig = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};

export default function Home() {
  return (<div className="text-red-900">
    <LivepeerConfig client={livepeerClient} theme={theme}>
      <DemoPlayer />
    </LivepeerConfig>
  </div>);
}
