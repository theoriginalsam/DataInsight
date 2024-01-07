// index.js

import Daily from '@daily-co/daily-js';
import { DailyProvider } from '@daily-co/daily-react';

interface AppProps {
    children: React.ReactNode;
}

function App({ children }: AppProps) {
    // Create an instance of the Daily call object
    const co = Daily.createCallObject();

    return <DailyProvider callObject={co}>{children}</DailyProvider>;
}
