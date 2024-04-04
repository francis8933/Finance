import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000, // Your desired port here
  //   // Additional server options can be configured here as needed
  //   //   proxy: {
  //   //     '/socket.io': {
  //   //       target: 'ws://localhost:3001',
  //   //       ws: true,
  //   //     },
  //   //   },
  // },
});
